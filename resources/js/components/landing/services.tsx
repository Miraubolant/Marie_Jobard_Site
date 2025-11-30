import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { X, MapPin, Heart } from 'lucide-react'
import type { Service } from '@/types/models'

type ServicesProps = {
  services: Service[]
}

export function Services({ services }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
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
    <>
      <section id="services" className="py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-pastel-rose/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-pastel-blue/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="scroll-fade-up text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-neutral-800">Comment puis-je vous </span>
              <span className="text-terracotta-dark">accompagner</span>
              <span className="text-neutral-800"> ?</span>
            </h2>
            <p className="text-xl md:text-2xl font-bold leading-relaxed">
              <span className="text-neutral-700">Des </span>
              <span className="text-terracotta-dark">moments privilégiés</span>
              <span className="text-neutral-700"> pour prendre soin de </span>
              <span className="text-terracotta-dark">vous</span>
              <span className="text-neutral-700"> et de votre </span>
              <span className="text-terracotta-dark">bébé</span>
              <span className="text-neutral-700">, en toute </span>
              <span className="text-terracotta-dark">bienveillance</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`scroll-scale stagger-${Math.min((index % 3) + 1, 3)} group h-full`}
              >
                {/* Clickable card design */}
                <div
                  onClick={() => setSelectedService(service)}
                  className="relative h-full flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-terracotta/20 hover:border-terracotta cursor-pointer"
                  style={{ backgroundColor: '#faf8f5' }}
                >
                  {/* Image section */}
                  {service.imagePath && (
                    <div className="relative h-40 flex-shrink-0 overflow-hidden">
                      <img
                        src={service.imagePath}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Price badge */}
                      {service.price && (
                        <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1.5 shadow-md border-2 border-terracotta/30">
                          <span className="text-lg font-bold text-terracotta-dark">{service.price}€</span>
                          {service.priceLabel && (
                            <span className="text-xs text-neutral-500 ml-1">{service.priceLabel}</span>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Content section */}
                  <div className="p-5 flex flex-col flex-grow">
                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-neutral-800 leading-tight line-clamp-2 min-h-[3.5rem]">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-600 text-sm leading-relaxed line-clamp-3 mt-3 min-h-[4.5rem]">
                      {service.shortDescription || service.description.substring(0, 100) + '...'}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-terracotta-dark bg-terracotta/10 px-2.5 py-1 rounded-full">
                        <MapPin className="w-3 h-3" />
                        Bordeaux
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-terracotta-dark bg-terracotta/10 px-2.5 py-1 rounded-full">
                        <Heart className="w-3 h-3" />
                        Bienveillant
                      </span>
                    </div>

                    {/* Action button - pushed to bottom */}
                    <div className="pt-4 mt-auto">
                      <Button
                        onClick={(e) => {
                          e.stopPropagation()
                          scrollToContact()
                        }}
                        size="sm"
                        className="w-full rounded-full bg-terracotta hover:bg-terracotta-dark text-white font-semibold text-sm transition-all"
                      >
                        Contacter
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Dialog */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-cream border-terracotta/20">
          {selectedService && (
            <>
              <DialogHeader className="border-b border-terracotta/20 pb-4">
                <DialogTitle className="text-3xl font-sans text-terracotta-dark pr-8">
                  {selectedService.title}
                </DialogTitle>
                {selectedService.price && (
                  <div className="text-3xl font-bold text-terracotta-dark mt-2">
                    {selectedService.price}€
                    {selectedService.priceLabel && (
                      <span className="text-lg text-neutral-600 font-normal ml-2">
                        {selectedService.priceLabel}
                      </span>
                    )}
                  </div>
                )}
              </DialogHeader>

              <div className="space-y-6 pt-4">
                {selectedService.imagePath && (
                  <div className="w-full h-72 overflow-hidden rounded-2xl shadow-lg border-2 border-terracotta/20">
                    <img
                      src={selectedService.imagePath}
                      alt={selectedService.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="bg-white/60 rounded-2xl p-6 border border-terracotta/10">
                  <h3 className="font-serif font-semibold text-xl text-terracotta-dark mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-terracotta-dark rounded"></span>
                    Description du service
                  </h3>
                  <DialogDescription className="text-neutral-700 leading-relaxed text-base whitespace-pre-line">
                    {selectedService.description}
                  </DialogDescription>
                </div>

                <div className="bg-gradient-to-br from-pastel-peach/40 via-pastel-rose/30 to-pastel-lavender/20 rounded-2xl p-6 border border-terracotta/20 shadow-sm">
                  <h3 className="font-serif font-semibold text-xl text-terracotta-dark mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-terracotta-dark rounded"></span>
                    Informations pratiques
                  </h3>
                  <ul className="space-y-3 text-neutral-700">
                    <li className="flex items-start gap-3">
                      <span className="text-terracotta-dark mt-1 text-xl">•</span>
                      <span className="flex-1">Intervention à domicile sur Bordeaux et agglomération</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-terracotta-dark mt-1 text-xl">•</span>
                      <span className="flex-1">Prise de rendez-vous par téléphone ou via le formulaire de contact</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-terracotta-dark mt-1 text-xl">•</span>
                      <span className="flex-1">Première consultation gratuite de 15 minutes par téléphone</span>
                    </li>
                  </ul>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    onClick={() => {
                      setSelectedService(null)
                      scrollToContact()
                    }}
                    className="btn-handdrawn flex-1 bg-gradient-to-r from-terracotta to-terracotta-dark hover:from-terracotta-dark hover:to-terracotta text-white font-bold"
                  >
                    Prendre rendez-vous
                  </Button>
                  <Button
                    onClick={() => setSelectedService(null)}
                    variant="outline"
                    className="btn-handdrawn border-2 border-terracotta/40 text-terracotta-dark hover:bg-terracotta hover:text-white font-semibold"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Fermer
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
