import { Mail, Phone, MapPin } from 'lucide-react'
import type { FooterSetting } from '@/types/models'

type FooterProps = {
  footerSettings?: FooterSetting | null
}

export function Footer({ footerSettings }: FooterProps) {
  const currentYear = new Date().getFullYear()

  // Fallback values if no settings are provided
  const phone = footerSettings?.phone || '06 58 75 69 09'
  const email = footerSettings?.email || 'marie.jobard@example.com'
  const address = footerSettings?.address || 'Bordeaux et agglomération'

  return (
    <footer className="border-t-2 border-terracotta" style={{ backgroundColor: '#faf8f5' }}>
      <div className="container mx-auto px-4 py-6">
        <div className="grid md:grid-cols-3 gap-6">
          {/* About */}
          <div>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-neutral-800 mb-3">
              Marie Jobard
            </h3>
            <p className="text-sm md:text-base text-neutral-700 leading-relaxed font-medium">
              Infirmière puéricultrice diplômée d'État, passionnée par l'accompagnement
              à la parentalité et le bien-être des nouveaux-nés.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-neutral-800 mb-3">
              Contact
            </h3>
            <div className="space-y-2">
              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-sm md:text-base text-neutral-700 hover:text-terracotta-dark transition-colors font-medium"
              >
                <Phone className="w-4 h-4" />
                {phone}
              </a>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-sm md:text-base text-neutral-700 hover:text-terracotta-dark transition-colors font-medium"
              >
                <Mail className="w-4 h-4" />
                {email}
              </a>
              <div className="flex items-center gap-2 text-sm md:text-base text-neutral-700 font-medium">
                <MapPin className="w-4 h-4" />
                {address}
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-neutral-800 mb-3">
              Informations légales
            </h3>
            <div className="space-y-1">
              <p className="text-sm md:text-base text-neutral-700 font-medium">
                SIRET : À compléter
              </p>
              <p className="text-sm md:text-base text-neutral-700 font-medium">
                N° ADELI : À compléter
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-terracotta/20 mt-4 pt-3 text-center">
          <p className="text-sm text-neutral-600 font-medium">
            &copy; {currentYear} Marie Jobard - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  )
}
