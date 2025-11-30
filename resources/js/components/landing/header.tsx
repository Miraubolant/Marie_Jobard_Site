import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { OptimizedImage } from '@/components/common/optimized-image'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Accueil', href: '#hero' },
    { label: 'À propos', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'RSAI', href: '#rsai' },
    { label: 'Contact', href: '#contact' },
  ]

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
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <div className="header-glass max-w-6xl w-full mx-4 px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#hero')
            }}
            className="group flex items-center gap-2"
          >
            <OptimizedImage
              src="/images/logo.png"
              alt="Marie Jobard - Infirmière Puéricultrice"
              priority={true}
              width={48}
              height={48}
              objectFit="contain"
              className="h-12 w-12 transition-all group-hover:scale-110"
            />
            <div>
              <div className="font-serif text-xl sm:text-2xl font-bold transition-colors leading-tight">
                <span className="text-terracotta-dark group-hover:text-terracotta">Marie</span>
                <span className="text-neutral-800 group-hover:text-terracotta-dark"> Jobard</span>
              </div>
              <div className="text-sm sm:text-base font-bold leading-tight">
                <span className="text-neutral-600">Infirmière </span>
                <span className="text-terracotta-dark">Puéricultrice</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className="btn-handdrawn nav-link px-5 py-2 text-lg font-bold text-neutral-700 hover:text-terracotta-dark transition-all relative after:absolute after:bottom-0.5 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-terracotta-dark after:transition-all after:duration-300 hover:after:w-3/4"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('#contact')}
              className="btn-handdrawn bg-terracotta hover:bg-terracotta-dark text-white font-bold text-base px-5 py-2.5 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-terracotta-dark"
            >
              Me contacter
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-neutral-700 hover:bg-terracotta/10 rounded-full transition-all hover:scale-110"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-terracotta/10">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className="btn-handdrawn nav-link px-5 py-3 text-xl font-bold text-neutral-700 hover:text-terracotta-dark transition-all text-center relative after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-terracotta-dark after:transition-all after:duration-300 hover:after:w-3/4"
                >
                  {item.label}
                </a>
              ))}
              <Button
                onClick={() => scrollToSection('#contact')}
                className="btn-handdrawn bg-terracotta hover:bg-terracotta-dark text-white font-bold text-lg py-5 mt-2 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-terracotta-dark"
              >
                Me contacter
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
