import { useState } from 'react'
import { ChevronDown, Shield, Users, Heart, FileCheck, Stethoscope, BookOpen, ClipboardList, AlertTriangle, LucideIcon } from 'lucide-react'
import type { PageContent, RsaiMission } from '@/types/models'

// Map icon names to Lucide components
const iconMap: Record<string, LucideIcon> = {
  Users,
  Heart,
  FileCheck,
  AlertTriangle,
  Stethoscope,
  BookOpen,
  Shield,
  ClipboardList,
}

// Default missions if no data provided
const defaultMissions: RsaiMission[] = [
  {
    icon: 'Users',
    title: 'Informer, sensibiliser et conseiller',
    description: 'Accompagner les équipes et les familles dans la compréhension des enjeux de santé et de bien-être des enfants accueillis.',
  },
  {
    icon: 'Heart',
    title: 'Apporter son concours',
    description: "Apporter son concours pour la mise en œuvre des mesures nécessaires à la bonne adaptation, au bien-être, au bon développement des enfants et au respect de leurs besoins dans l'établissement ou le service.",
  },
  {
    icon: 'FileCheck',
    title: 'Aider et accompagner',
    description: "Pour un enfant dont l'état de santé le nécessite, aider et accompagner l'équipe de l'établissement ou du service dans la compréhension et la mise en œuvre d'un projet d'accueil individualisé élaboré par le médecin traitant de l'enfant en accord avec sa famille.",
  },
  {
    icon: 'AlertTriangle',
    title: 'Contribuer au repérage des enfants en danger',
    description: "Contribuer, dans le cadre du dispositif départemental de traitement des informations préoccupantes, en coordination avec le référent technique ou le directeur de l'établissement, au repérage des enfants en danger ou en risque de l'être et à l'information sur les conduites à tenir.",
  },
  {
    icon: 'Stethoscope',
    title: 'Procéder à un examen',
    description: "Procéder, lorsqu'il l'estime nécessaire pour l'exercice de ses missions et avec l'accord des titulaires de l'autorité parentale, à un examen de l'enfant afin d'envisager si nécessaire une orientation médicale.",
  },
  {
    icon: 'BookOpen',
    title: 'Présenter et expliquer',
    description: "Présenter et expliquer aux professionnels chargés de l'encadrement des enfants les protocoles prévus par la réglementation.",
  },
  {
    icon: 'Shield',
    title: "Veiller à l'accueil inclusif",
    description: "Veiller à la mise en place de toutes mesures nécessaires à l'accueil inclusif des enfants en situation de handicap, vivant avec une affection chronique, ou présentant tout problème de santé nécessitant un traitement ou une attention particulière.",
  },
  {
    icon: 'Heart',
    title: "Assurer des actions d'éducation",
    description: "Assurer des actions d'éducation et de promotion de la santé auprès des professionnels, notamment en matière de recommandations nutritionnelles, d'activités physiques, de sommeil, d'exposition aux écrans et de santé environnementale.",
  },
  {
    icon: 'ClipboardList',
    title: "Contribuer à l'établissement de protocoles",
    description: "Contribuer, en concertation avec le référent technique ou le directeur de l'établissement, à l'établissement des protocoles annexés au règlement de fonctionnement, et veiller à leur bonne compréhension par l'équipe.",
  },
]

type RsaiProps = {
  data?: PageContent | null
}

export function Rsai({ data }: RsaiProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  // Use data from backend or fallback to defaults
  const title = data?.title || "Qu'est-ce que le RSAI ?"
  const content = data?.content || "Je réponds aux missions spécifiées par le décret, mais également aux besoins des structures. Ensemble, nous déterminerons des interventions sur mesure."
  const missions: RsaiMission[] = data?.metadata?.missions || defaultMissions

  return (
    <section id="rsai" className="py-24 relative overflow-hidden bg-gradient-to-br from-cream via-pastel-peach/10 to-pastel-lavender/10">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-terracotta/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pastel-rose/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="scroll-fade-up text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-terracotta/10 rounded-full mb-6">
            <Shield className="w-5 h-5 text-terracotta-dark" />
            <span className="text-sm font-bold text-terracotta-dark">Référent Santé et Accueil Inclusif</span>
          </div>

          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-neutral-800">{title.includes('RSAI') ? title.split('RSAI')[0] : title}</span>
            {title.includes('RSAI') && <span className="text-terracotta-dark">RSAI</span>}
            {title.includes('RSAI') && <span className="text-neutral-800">{title.split('RSAI')[1]}</span>}
          </h2>

          <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed">
            {content.split('.')[0]}.
            <span className="text-terracotta-dark font-semibold">{content.split('.').slice(1).join('.')}</span>
          </p>
        </div>

        {/* Missions FAQ */}
        <div className="max-w-4xl mx-auto">
          <div className="scroll-fade-up">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2 flex items-center gap-3">
                <span className="w-2 h-8 bg-terracotta-dark rounded-full"></span>
                Les missions selon le décret
              </h3>
              <p className="text-neutral-600 ml-5">Découvrez les différentes missions du Référent Santé et Accueil Inclusif</p>
            </div>

          <div className="space-y-3">
            {missions.map((mission, index) => {
              const Icon = iconMap[mission.icon] || Shield
              const isOpen = openIndex === index

              return (
                <div
                  key={index}
                  className={`rounded-2xl border-2 transition-all duration-300 ${
                    isOpen
                      ? 'border-terracotta bg-white shadow-lg'
                      : 'border-terracotta/20 bg-white/60 hover:border-terracotta/40 hover:bg-white/80'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full px-6 py-5 flex items-center gap-4 text-left"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isOpen ? 'bg-terracotta text-white' : 'bg-terracotta/10 text-terracotta-dark'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`flex-grow font-bold text-lg ${isOpen ? 'text-terracotta-dark' : 'text-neutral-800'}`}>
                      {mission.title}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-terracotta-dark transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="px-6 pb-5 pt-0">
                      <div className="pl-16">
                        <p className="text-neutral-600 leading-relaxed">
                          {mission.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          </div>
        </div>

        {/* CTA */}
        <div className="scroll-fade-up text-center mt-12">
          <p className="text-lg text-neutral-600 mb-4">
            Vous avez des questions sur le RSAI ou souhaitez en savoir plus ?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector('#services')
                if (element) {
                  const headerOffset = 80
                  const elementPosition = element.getBoundingClientRect().top
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
                }
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-terracotta text-terracotta-dark hover:bg-terracotta/5 font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Voir mes tarifs
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector('#contact')
                if (element) {
                  const headerOffset = 80
                  const elementPosition = element.getBoundingClientRect().top
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
                }
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-terracotta to-terracotta-dark hover:from-terracotta-dark hover:to-terracotta text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
