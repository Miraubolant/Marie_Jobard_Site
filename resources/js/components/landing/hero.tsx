import { Button } from '@/components/ui/button'
import type { PageContent } from '@/types/models'

// Icône Accompagnement - Mains qui se tiennent style doodle
const HandsHeartIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 52c-2-2-12-10-14-16-2-6 2-12 8-12 3 0 5 2 6 3 1-1 3-3 6-3 6 0 10 6 8 12-2 6-12 14-14 16z"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15"/>
    <path d="M12 28c0-4 3-8 8-8 2 0 4 1 5 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
    <path d="M52 28c0-4-3-8-8-8-2 0-4 1-5 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
    <path d="M8 32c2-1 4-2 6-2M56 32c-2-1-4-2-6-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3"/>
  </svg>
)

// Icône Formation - Livre ouvert avec étoile style sketch
const BookStarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 14c0-2 2-4 4-4h16c2 0 4 2 4 4v36c0 2-2 4-4 4H12c-2 0-4-2-4-4V14z"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
    <path d="M32 14c0-2 2-4 4-4h16c2 0 4 2 4 4v36c0 2-2 4-4 4H36c-2 0-4-2-4-4V14z"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
    <path d="M32 10v44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M14 22h10M14 28h8M14 34h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
    <path d="M44 20l2 4 4 1-3 3 1 4-4-2-4 2 1-4-3-3 4-1 2-4z"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.3"/>
  </svg>
)

// Icône Soutien - Famille/Parent-enfant style doodle
const FamilyCareIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.15"/>
    <path d="M24 24v6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M12 56v-14c0-4 3-8 8-8h8c5 0 8 4 8 8v14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="46" cy="28" r="6" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2" opacity="0.7"/>
    <path d="M46 34v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
    <path d="M38 56v-10c0-3 2-6 5-6h6c3 0 5 3 5 6v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
    <path d="M30 42c4-2 8-2 12 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 2"/>
  </svg>
)

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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 lg:pr-8">
            {/* Main Title */}
            <div className="scroll-fade-up stagger-1 space-y-4 text-center lg:text-left">
              <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-neutral-800">Infirmière </span>
                <span className="text-terracotta-dark">Puéricultrice</span>
              </h1>
              <p className="text-2xl md:text-3xl text-neutral-600 font-medium leading-relaxed">
                Accompagnement professionnel en crèche et soutien personnalisé à la parentalité
              </p>
            </div>

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
                <HandsHeartIcon className="w-12 h-12 text-terracotta-dark mb-3" />
                <h3 className="font-bold text-xl text-neutral-800 mb-1">Accompagnement</h3>
                <p className="text-base text-neutral-600">Suivi personnalisé</p>
              </div>
              <div className="scroll-fade-up stagger-2 rounded-2xl p-5 border-2 border-terracotta/30 hover:border-terracotta hover:shadow-lg transition-all" style={{ backgroundColor: '#faf8f5' }}>
                <BookStarIcon className="w-12 h-12 text-terracotta-dark mb-3" />
                <h3 className="font-bold text-xl text-neutral-800 mb-1">Formation</h3>
                <p className="text-base text-neutral-600">Équipes & structures</p>
              </div>
              <div className="scroll-fade-up stagger-3 rounded-2xl p-5 border-2 border-terracotta/30 hover:border-terracotta hover:shadow-lg transition-all" style={{ backgroundColor: '#faf8f5' }}>
                <FamilyCareIcon className="w-12 h-12 text-terracotta-dark mb-3" />
                <h3 className="font-bold text-xl text-neutral-800 mb-1">Soutien</h3>
                <p className="text-base text-neutral-600">Parentalité</p>
              </div>
            </div>

            {/* Description */}
            <p className="scroll-fade-up stagger-2 text-xl md:text-2xl text-neutral-700 leading-relaxed">
              Spécialisée dans la santé, le développement et l'inclusion des enfants en crèche.
              Je propose des formations sur-mesure pour les professionnels et un accompagnement bienveillant pour les parents.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
