import { getUnsplashImage } from '@/lib/unsplash'
import HomeContent from './content'

export default async function ElectricienDuboisPage() {
  const heroImage = await getUnsplashImage('electrician installing electrical panel professional', {
    width: 1400,
    height: 700,
  })

  return <HomeContent heroImage={heroImage} />
}
