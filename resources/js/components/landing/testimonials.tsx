import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'
import type { Testimonial } from '@/types/models'
import { OptimizedImage } from '@/components/common/optimized-image'

type TestimonialsProps = {
  testimonials: Testimonial[]
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  if (!testimonials || testimonials.length === 0) {
    return null
  }

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pastel-rose/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pastel-peach/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="scroll-fade-up text-center max-w-4xl mx-auto mb-20">
          <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="text-neutral-800">Ils m'ont fait </span>
            <span className="text-terracotta-dark">confiance</span>
          </h2>
          <p className="text-3xl md:text-4xl font-bold leading-relaxed">
            <span className="text-neutral-700">Découvrez les </span>
            <span className="text-terracotta-dark">témoignages</span>
            <span className="text-neutral-700"> de parents accompagnés avec </span>
            <span className="text-terracotta-dark">bienveillance</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`scroll-scale stagger-${Math.min((index % 3) + 1, 3)} rounded-3xl border-2 border-terracotta/20 hover:border-terracotta hover:shadow-2xl transition-all duration-300 hover:scale-105`}
              style={{ backgroundColor: '#faf8f5' }}
            >
              <CardContent className="p-8 space-y-6">
                {/* Photo de profil ronde */}
                <div className="flex justify-center -mt-16 mb-4">
                  <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden bg-terracotta/10">
                    {testimonial.authorPhoto ? (
                      <OptimizedImage
                        src={testimonial.authorPhoto}
                        alt={testimonial.authorName}
                        width={96}
                        height={96}
                        className="w-full h-full"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-terracotta/20 to-pastel-rose/20">
                        <span className="text-4xl font-bold text-terracotta-dark">
                          {testimonial.authorName.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Stars rating */}
                <div className="flex gap-1 justify-center">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={`w-7 h-7 ${
                        index < testimonial.rating
                          ? 'fill-terracotta text-terracotta'
                          : 'text-neutral-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Comment */}
                <blockquote className="text-xl md:text-2xl text-neutral-700 leading-relaxed italic text-center">
                  "{testimonial.comment}"
                </blockquote>

                {/* Author */}
                <div className="pt-4 border-t border-terracotta/10">
                  <p className="text-2xl md:text-3xl font-bold text-terracotta-dark text-center font-serif">
                    {testimonial.authorName}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
