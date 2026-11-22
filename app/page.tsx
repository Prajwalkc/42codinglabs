import { Hero } from '@/components/site/Hero'
import { Stats } from '@/components/site/Stats'
import { Reel } from '@/components/site/Reel'
import { About } from '@/components/site/About'
import { Services } from '@/components/site/Services'
import { Process } from '@/components/site/Process'
import { Apps } from '@/components/site/Apps'
import { AiSection } from '@/components/site/AiSection'
import { Testimonials } from '@/components/site/Testimonials'
import { Contact } from '@/components/site/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Reel />
      <About />
      <Services />
      <Process />
      <Apps />
      <AiSection />
      <Testimonials />
      <Contact />
    </>
  )
}
