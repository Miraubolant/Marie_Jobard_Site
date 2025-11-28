import { Button } from '@/components/ui/button'
import type { PageContent } from '@/types/models'

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
    <section id="hero" className="relative py-20 md:py-32 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pastel-rose/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pastel-lavender/30 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Title - Centered above everything */}
        <div className="scroll-fade-up stagger-1 space-y-4 text-center max-w-4xl mx-auto mb-16">
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="text-neutral-800">Infirmière </span>
            <span className="text-terracotta-dark">Puéricultrice</span>
          </h1>
          <p className="text-2xl md:text-3xl text-neutral-600 font-medium leading-relaxed">
            Accompagnement professionnel en crèche et soutien personnalisé à la parentalité
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 lg:pr-8">
            {/* Mobile Image - displayed after title on mobile only */}
            <div className="scroll-fade-up lg:hidden">
              {data.imagePath ? (
                <img
                  src={data.imagePath}
                  alt={data.title}
                  className="w-full h-[300px] object-cover rounded-3xl shadow-xl"
                />
              ) : (
                <div className="w-full h-[300px] bg-gradient-to-br from-terracotta/20 to-pastel-rose/20 rounded-3xl flex items-center justify-center border-2 border-terracotta/30">
                  <p className="text-neutral-400 font-serif text-xl">Image à venir</p>
                </div>
              )}
            </div>

            {/* Key Services Cards */}
            <div className="grid sm:grid-cols-3 gap-4 py-4">
              <div className="scroll-fade-up stagger-1 rounded-2xl p-5 border-2 border-terracotta/30 hover:border-terracotta hover:shadow-lg transition-all" style={{ backgroundColor: '#faf8f5' }}>
                <div className="w-16 h-16 rounded-full border-3 border-white shadow-lg overflow-hidden mb-3">
                  <img
                    src="/images/accompagnement.png"
                    alt="Accompagnement"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl text-neutral-800 mb-1">Accompagnement</h3>
                <p className="text-base text-neutral-600">Suivi personnalisé</p>
              </div>
              <div className="scroll-fade-up stagger-2 rounded-2xl p-5 border-2 border-terracotta/30 hover:border-terracotta hover:shadow-lg transition-all" style={{ backgroundColor: '#faf8f5' }}>
                <div className="w-16 h-16 rounded-full border-3 border-white shadow-lg overflow-hidden mb-3">
                  <img
                    src="/images/formation.png"
                    alt="Formation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl text-neutral-800 mb-1">Formation</h3>
                <p className="text-base text-neutral-600">Équipes & structures</p>
              </div>
              <div className="scroll-fade-up stagger-3 rounded-2xl p-5 border-2 border-terracotta/30 hover:border-terracotta hover:shadow-lg transition-all" style={{ backgroundColor: '#faf8f5' }}>
                <div className="w-16 h-16 rounded-full border-3 border-white shadow-lg overflow-hidden mb-3">
                  <img
                    src="/images/soutien.png"
                    alt="Soutien"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl text-neutral-800 mb-1">Soutien</h3>
                <p className="text-base text-neutral-600">Parentalité</p>
              </div>
            </div>

            {/* Description */}
            <p className="scroll-fade-up stagger-2 text-xl md:text-2xl text-neutral-700 leading-relaxed text-center lg:text-left">
              Spécialisée dans la santé, le développement et l'inclusion des enfants en crèche.
              Je propose des formations sur-mesure pour les professionnels et un accompagnement bienveillant pour les parents.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              {data.metadata?.ctaText && (
                <Button
                  size="lg"
                  onClick={() => scrollToSection('#services')}
                  className="btn-handdrawn bg-gradient-to-r from-terracotta to-terracotta-dark hover:from-terracotta-dark hover:to-terracotta text-white font-bold text-xl px-8 py-6 shadow-xl"
                >
                  {data.metadata.ctaText}
                </Button>
              )}
              {data.metadata?.ctaSecondary && (
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('#contact')}
                  className="btn-handdrawn border-2 border-terracotta text-terracotta-dark hover:bg-terracotta hover:text-white font-bold text-xl px-8 py-6"
                >
                  {data.metadata.ctaSecondary}
                </Button>
              )}
            </div>
          </div>

          {/* Right Column - Image (desktop only) */}
          <div className="scroll-fade-right relative hidden lg:block">
            {data.imagePath ? (
              <img
                src={data.imagePath}
                alt={data.title}
                className="w-full h-[400px] object-cover rounded-3xl shadow-xl"
              />
            ) : (
              <div className="w-full h-[400px] bg-gradient-to-br from-terracotta/20 to-pastel-rose/20 rounded-3xl flex items-center justify-center border-2 border-terracotta/30">
                <p className="text-neutral-400 font-serif text-xl">Image à venir</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
