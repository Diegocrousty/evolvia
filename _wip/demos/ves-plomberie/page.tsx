import { getUnsplashImage } from '@/lib/unsplash'
import Header from './components/Header'
import Hero from './components/Hero'
import Zone from './components/Zone'
import Services from './components/Services'
import Stats from './components/Stats'
import WhyUs from './components/WhyUs'
import Avis from './components/Avis'
import Formulaire from './components/Formulaire'
import Footer from './components/Footer'
import StickyMobile from './components/StickyMobile'

export default async function VesPlomberie() {
  const [heroImage, imgDepannage, imgRenovation, imgInstallation, imgArtisan] =
    await Promise.all([
      getUnsplashImage('plumber professional work workshop tools', {
        width: 1920,
        height: 1080,
      }),
      getUnsplashImage('water leak pipe repair emergency', {
        width: 600,
        height: 400,
      }),
      getUnsplashImage('modern bathroom renovation tile shower', {
        width: 600,
        height: 400,
        index: 1,
      }),
      getUnsplashImage('heating boiler radiator maintenance', {
        width: 600,
        height: 400,
      }),
      getUnsplashImage('plumber working professional uniform', {
        width: 600,
        height: 600,
        index: 2,
      }),
    ])

  const serviceImages = [
    { src: imgDepannage.src, alt: imgDepannage.alt },
    { src: imgRenovation.src, alt: imgRenovation.alt },
    { src: imgInstallation.src, alt: imgInstallation.alt },
  ]

  return (
    <>
      <Header />
      <main>
        <Hero image={heroImage} />
        <Zone />
        <Services images={serviceImages} />
        <Stats />
        <WhyUs image={{ src: imgArtisan.src, alt: imgArtisan.alt }} />
        <Avis />
        <Formulaire />
      </main>
      <Footer />
      <StickyMobile />
    </>
  )
}
