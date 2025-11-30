import { Button } from '@/components/ui/button'
import type { PageContent } from '@/types/models'
import { ChevronDown, MapPin, Award, Heart } from 'lucide-react'

type HeroProps = {
  data: PageContent
}

export function Hero({ data }: HeroProps) {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="hero" className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 md:w-96 md:h-96 bg-pastel-rose/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-72 h-72 md:w-96 md:h-96 bg-pastel-lavender/20 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 max-w-7xl py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1 space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="scroll-fade-up inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-terracotta/20 shadow-sm">
              <MapPin className="w-4 h-4 text-terracotta" />
              <span className="text-sm font-medium text-neutral-700">
                {data.metadata?.location || 'Bordeaux et agglomération'}
              </span>
            </div>

            {/* Main Title */}
            <div className="scroll-fade-up stagger-1 space-y-3 md:space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
                <span className="text-neutral-800">Marie Jobard</span>
                <br />
                <span className="text-terracotta-dark">Infirmière</span>
                <span className="text-neutral-800"> Puéricultrice</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 font-medium leading-relaxed max-w-xl">
                {data.content || 'Accompagnement professionnel en crèche et soutien personnalisé à la parentalité'}
              </p>
            </div>

            {/* Trust Badges */}
            <div className="scroll-fade-up stagger-2 flex flex-wrap gap-3 md:gap-4">
              {(data.metadata?.badges || [
                { text: "Diplômée d'État" },
                { text: "+5 ans d'expérience" },
                { text: "RSAI Certifiée" },
              ]).map((badge: { text: string }, index: number) => (
                <div key={index} className="flex items-center gap-2 px-3 py-2 bg-white/60 backdrop-blur-sm rounded-xl border border-neutral-200">
                  {index === 1 ? (
                    <Heart className="w-5 h-5 text-terracotta" />
                  ) : (
                    <Award className="w-5 h-5 text-terracotta" />
                  )}
                  <span className="text-sm font-medium text-neutral-700">{badge.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="scroll-fade-up stagger-3 flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
              {data.metadata?.ctaText && (
                <Button
                  size="lg"
                  onClick={() => scrollToSection('#services')}
                  className="btn-handdrawn bg-terracotta hover:bg-terracotta-dark text-white font-bold text-lg md:text-xl px-6 md:px-8 py-5 md:py-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-terracotta-dark"
                >
                  {data.metadata.ctaText}
                </Button>
              )}
              {data.metadata?.ctaSecondary && (
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('#contact')}
                  className="btn-handdrawn bg-white border-2 border-terracotta text-terracotta-dark hover:bg-terracotta hover:text-white font-bold text-lg md:text-xl px-6 md:px-8 py-5 md:py-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  {data.metadata.ctaSecondary}
                </Button>
              )}
            </div>

            {/* Key Services Cards - Desktop */}
            <div className="scroll-fade-up stagger-4 hidden md:grid grid-cols-3 gap-4 pt-4">
              <div className="group rounded-2xl p-4 border-2 border-terracotta/20 hover:border-terracotta bg-white/60 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full border-2 border-white shadow-lg overflow-hidden mb-3 group-hover:scale-110 transition-transform">
                  <img
                    src="/images/accompagnement.png"
                    alt="Accompagnement"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg text-neutral-800 mb-1">Accompagnement</h3>
                <p className="text-sm text-neutral-600">Suivi personnalisé</p>
              </div>
              <div className="group rounded-2xl p-4 border-2 border-terracotta/20 hover:border-terracotta bg-white/60 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full border-2 border-white shadow-lg overflow-hidden mb-3 group-hover:scale-110 transition-transform">
                  <img
                    src="/images/formation.png"
                    alt="Formation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg text-neutral-800 mb-1">Formation</h3>
                <p className="text-sm text-neutral-600">Équipes & structures</p>
              </div>
              <div className="group rounded-2xl p-4 border-2 border-terracotta/20 hover:border-terracotta bg-white/60 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full border-2 border-white shadow-lg overflow-hidden mb-3 group-hover:scale-110 transition-transform">
                  <img
                    src="/images/soutien.png"
                    alt="Soutien"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg text-neutral-800 mb-1">Soutien</h3>
                <p className="text-sm text-neutral-600">Parentalité</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2 scroll-fade-right relative">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-terracotta/20 to-pastel-rose/20 rounded-[2rem] -z-10 hidden md:block" />

              {/* Main Image */}
              {data.imagePath ? (
                <img
                  src={data.imagePath}
                  alt={data.title}
                  className="w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] object-cover rounded-2xl md:rounded-3xl shadow-2xl"
                />
              ) : (
                <div className="w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] bg-gradient-to-br from-terracotta/20 to-pastel-rose/20 rounded-2xl md:rounded-3xl flex items-center justify-center border-2 border-terracotta/30">
                  <p className="text-neutral-400 font-serif text-xl">Image à venir</p>
                </div>
              )}

            </div>

            {/* Mobile Services Cards */}
            <div className="grid grid-cols-3 gap-2 mt-6 md:hidden">
              <div className="rounded-xl p-3 border border-terracotta/20 bg-white/80 backdrop-blur-sm text-center">
                <div className="w-10 h-10 mx-auto rounded-full border-2 border-white shadow overflow-hidden mb-2">
                  <img src="/images/accompagnement.png" alt="Accompagnement" className="w-full h-full object-cover" />
                </div>
                <p className="text-xs font-bold text-neutral-800">Accompagnement</p>
              </div>
              <div className="rounded-xl p-3 border border-terracotta/20 bg-white/80 backdrop-blur-sm text-center">
                <div className="w-10 h-10 mx-auto rounded-full border-2 border-white shadow overflow-hidden mb-2">
                  <img src="/images/formation.png" alt="Formation" className="w-full h-full object-cover" />
                </div>
                <p className="text-xs font-bold text-neutral-800">Formation</p>
              </div>
              <div className="rounded-xl p-3 border border-terracotta/20 bg-white/80 backdrop-blur-sm text-center">
                <div className="w-10 h-10 mx-auto rounded-full border-2 border-white shadow overflow-hidden mb-2">
                  <img src="/images/soutien.png" alt="Soutien" className="w-full h-full object-cover" />
                </div>
                <p className="text-xs font-bold text-neutral-800">Soutien</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('#about')}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-4 animate-bounce cursor-pointer group"
        >
          <span className="text-2xl font-bold text-neutral-600 group-hover:text-terracotta transition-colors">Découvrir</span>
          <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm border-2 border-terracotta/40 flex items-center justify-center shadow-lg group-hover:bg-terracotta/10 group-hover:border-terracotta group-hover:shadow-xl transition-all">
            <ChevronDown className="w-9 h-9 text-terracotta" />
          </div>
        </button>
      </div>
    </section>
  )
}
