import { Hero } from '@/components/home/Hero'
import { Benefits } from '@/components/home/Benefits'
import { Offers } from '@/components/home/Offers'
import { Process } from '@/components/home/Process'
import { Marquee } from '@/components/Marquee'
import { GlobeSection } from '@/components/home/GlobeSection'
import { Realisations } from '@/components/home/Realisations'
import { SocialProof } from '@/components/home/SocialProof'
import { CTA } from '@/components/home/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Benefits />
      <Offers />
      <Process />
      <Realisations />
      <GlobeSection />
      <SocialProof />
      <CTA />
    </>
  )
}
