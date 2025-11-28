import { Check } from 'lucide-react'
import type { PageContent } from '@/types/models'

type AboutProps = {
  data: PageContent
}

export function About({ data }: AboutProps) {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Centered Title */}
        <div className="scroll-fade-up text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="text-neutral-800">Une </span>
            <span className="text-terracotta-dark">écoute</span>
            <span className="text-neutral-800"> personnalisée pour chaque </span>
            <span className="text-terracotta-dark">famille</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="scroll-fade-left order-2 md:order-1">
            {data.imagePath ? (
              <img
                src={data.imagePath}
                alt={data.title}
                className="w-full h-[400px] object-cover rounded-3xl shadow-xl"
              />
            ) : (
              <div className="w-full h-[400px] bg-gradient-to-br from-neutral-100 to-terracotta/10 rounded-3xl flex items-center justify-center">
                <p className="text-neutral-400 font-serif text-xl">Image à venir</p>
              </div>
            )}
          </div>

          {/* Text Content */}
          <div className="scroll-fade-right order-1 md:order-2 space-y-8">

            <div className="prose prose-lg max-w-none">
              {data.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-2xl md:text-3xl text-neutral-700 leading-relaxed font-medium">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Values List */}
            {data.metadata?.values && Array.isArray(data.metadata.values) && (
              <div className="space-y-5 pt-4">
                {data.metadata.values.map((value: string, index: number) => (
                  <div key={index} className={`scroll-fade-up stagger-${Math.min(index + 1, 5)} flex items-start gap-5`}>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-terracotta/15 flex items-center justify-center mt-1">
                      <Check className="w-6 h-6 text-terracotta-dark" />
                    </div>
                    <p className="text-2xl md:text-3xl text-terracotta-dark font-bold">{value}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
