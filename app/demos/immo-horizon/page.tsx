import { getUnsplashImage, getUnsplashImages } from '@/lib/unsplash'
import HomeContent from './content'

export default async function ImmoHorizonPage() {
  const [heroImage, propertyImages, agentImages] = await Promise.all([
    getUnsplashImage('bordeaux city quai chartrons architecture france', {
      width: 1400,
      height: 800,
    }),
    getUnsplashImages(
      [
        { query: 'bordeaux apartment interior lumineux', width: 600, height: 400 },
        { query: 'echoppe bordelaise garden stone house', width: 600, height: 400, index: 1 },
        { query: 'modern apartment renovation parquet', width: 600, height: 400, index: 2 },
      ],
      'landscape'
    ),
    getUnsplashImages(
      [
        { query: 'professional woman real estate agent portrait', width: 200, height: 200 },
        { query: 'professional man real estate agent portrait', width: 200, height: 200 },
      ],
      'squarish'
    ),
  ])

  return (
    <HomeContent
      heroImage={heroImage}
      propertyImages={propertyImages}
      agentImages={agentImages}
    />
  )
}
