const UNSPLASH_API = 'https://api.unsplash.com'

export interface UnsplashImage {
  src: string
  alt: string
  credit: string
  creditUrl: string
}

function fallback(query: string, w: number, h: number): UnsplashImage {
  return {
    src: `https://placehold.co/${w}x${h}/1a2744/f8f6f3?text=${encodeURIComponent(query)}`,
    alt: query,
    credit: '',
    creditUrl: '',
  }
}

/**
 * Fetch a single image from Unsplash by keyword.
 * Server-side only — call from Server Components or at build time.
 * Falls back to placehold.co if no API key or on error.
 * Results are cached 24 h via Next.js fetch cache.
 */
export async function getUnsplashImage(
  query: string,
  options: {
    width?: number
    height?: number
    orientation?: 'landscape' | 'portrait' | 'squarish'
    index?: number
  } = {}
): Promise<UnsplashImage> {
  const key = process.env.UNSPLASH_ACCESS_KEY
  const w = options.width ?? 1400
  const h = options.height ?? 700

  if (!key || key === 'YOUR_UNSPLASH_ACCESS_KEY') {
    return fallback(query, w, h)
  }

  try {
    const params = new URLSearchParams({
      query,
      per_page: String(Math.max((options.index ?? 0) + 1, 3)),
      orientation: options.orientation ?? 'landscape',
      client_id: key,
    })

    const res = await fetch(`${UNSPLASH_API}/search/photos?${params}`, {
      next: { revalidate: 86400 },
    })

    if (!res.ok) return fallback(query, w, h)

    const data = await res.json()
    const photos = data.results
    if (!photos?.length) return fallback(query, w, h)

    const idx = options.index ?? 0
    const photo = photos[Math.min(idx, photos.length - 1)]

    return {
      src: `${photo.urls.raw}&w=${w}&h=${h}&fit=crop&q=80&fm=jpg`,
      alt: photo.alt_description ?? query,
      credit: photo.user.name,
      creditUrl: `${photo.user.links.html}?utm_source=evolvia_demo&utm_medium=referral`,
    }
  } catch {
    return fallback(query, w, h)
  }
}

/**
 * Fetch multiple images from Unsplash in parallel.
 * Each entry gets its own API call (cached independently).
 */
export async function getUnsplashImages(
  queries: {
    query: string
    width?: number
    height?: number
    index?: number
  }[],
  orientation: 'landscape' | 'portrait' | 'squarish' = 'landscape'
): Promise<UnsplashImage[]> {
  return Promise.all(
    queries.map((q) =>
      getUnsplashImage(q.query, {
        width: q.width,
        height: q.height,
        orientation,
        index: q.index,
      })
    )
  )
}
