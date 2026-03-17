import { getUnsplashImage } from '@/lib/unsplash'
import HomeContent from './content'

export default async function ImmoHorizonPage() {
  const heroImage = await getUnsplashImage(
    'bordeaux city quai chartrons architecture france',
    { width: 1400, height: 800 }
  )

  return <HomeContent heroImage={heroImage} />
}
