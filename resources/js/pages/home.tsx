import { Head } from '@inertiajs/react'
import type { PageContent, Service, Testimonial, FooterSetting } from '@/types/models'
import { Header } from '@/components/landing/header'
import { Hero } from '@/components/landing/hero'
import { About } from '@/components/landing/about'
import { Services } from '@/components/landing/services'
import { Rsai } from '@/components/landing/rsai'
import { Testimonials } from '@/components/landing/testimonials'
import { Contact } from '@/components/landing/contact'
import { Footer } from '@/components/landing/footer'
import { ScrollToTop } from '@/components/common/scroll-to-top'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

type HomeProps = {
  hero: PageContent | null
  about: PageContent | null
  rsai: PageContent | null
  services: Service[]
  testimonials: Testimonial[]
  footerSettings: FooterSetting | null
}

export default function Home({ hero, about, rsai, services, testimonials, footerSettings }: HomeProps) {
  useScrollAnimation()

  return (
    <>
      <Head title="Marie Jobard - Infirmière Puéricultrice à Bordeaux" />
      <div className="min-h-screen pt-24">
        <Header />
        {hero && <Hero data={hero} />}
        {about && <About data={about} />}
        {services.length > 0 && <Services services={services} />}
        <Rsai data={rsai} />
        {testimonials.length > 0 && <Testimonials testimonials={testimonials} />}
        <Contact />
        <Footer footerSettings={footerSettings} />
        <ScrollToTop />
      </div>
    </>
  )
}
