import { Head, Link } from '@inertiajs/react'
import { Button } from '@/components/ui/button'
import { Home, Mail } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Head title="404 - Page non trouvée" />
      <div className="min-h-screen bg-gradient-to-br from-pastel-peach/40 via-cream to-pastel-lavender/30 flex items-center justify-center px-4">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-pastel-rose/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-pastel-blue/20 rounded-full blur-3xl" />

        <div className="max-w-4xl w-full text-center relative z-10">
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <img
              src="/images/logo.png"
              alt="Marie Jobard"
              className="h-32 w-32 object-contain animate-bounce"
            />
          </div>

          {/* 404 Number */}
          <div className="font-serif text-9xl md:text-[12rem] font-bold mb-8">
            <span className="text-terracotta">4</span>
            <span className="text-pastel-rose">0</span>
            <span className="text-terracotta-dark">4</span>
          </div>

          {/* Funny Message */}
          <div className="space-y-6 mb-12">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-terracotta">Oups !</span>
              <span className="text-neutral-800"> Marie revient...</span>
            </h1>

            <p className="text-2xl md:text-3xl font-bold text-neutral-700 leading-relaxed">
              <span className="text-terracotta-dark">La page que vous cherchez</span>
              <span className="text-neutral-700"> semble avoir </span>
              <span className="text-pastel-rose">disparu</span>
              <span className="text-neutral-700"> dans les couches !</span>
            </p>

            <p className="text-xl md:text-2xl text-neutral-600">
              Pas de panique, Marie va vous aider à retrouver votre chemin
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/">
              <Button className="btn-handdrawn bg-gradient-to-r from-terracotta to-terracotta-dark hover:from-terracotta-dark hover:to-terracotta text-white font-bold text-xl md:text-2xl py-7 px-10">
                <Home className="w-6 h-6 mr-3" />
                Retour à l'accueil
              </Button>
            </Link>

            <Link href="/#contact">
              <Button
                variant="outline"
                className="btn-handdrawn border-3 border-terracotta text-terracotta-dark hover:bg-terracotta hover:text-white font-bold text-xl md:text-2xl py-7 px-10"
              >
                <Mail className="w-6 h-6 mr-3" />
                Me contacter
              </Button>
            </Link>
          </div>

          {/* Decorative Quote */}
          <div className="mt-16 p-8 bg-white/60 rounded-3xl border-2 border-terracotta/20 backdrop-blur-sm">
            <p className="text-2xl md:text-3xl font-serif text-terracotta-dark italic">
              "Même les meilleures infirmières se perdent parfois...
              <br />
              mais elles retrouvent toujours leur chemin !"
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
