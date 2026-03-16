import { getUnsplashImages } from '@/lib/unsplash'
import RealisationsContent from './content'

const PROJECT_QUERIES = [
  { query: 'electrical panel renovation residential', width: 800, height: 500 },
  { query: 'smart home automation living room', width: 800, height: 500 },
  { query: 'electric vehicle charging station home garage', width: 800, height: 500 },
  { query: 'electrical safety inspection multimeter', width: 800, height: 500 },
  { query: 'solar panels residential roof installation', width: 800, height: 500 },
  { query: 'new circuit breaker panel installation', width: 800, height: 500 },
]

export default async function RealisationsPage() {
  const images = await getUnsplashImages(PROJECT_QUERIES)

  return <RealisationsContent images={images} />
}
