import { AdminLayout } from '@/components/layout/admin-layout'
import { Link } from '@inertiajs/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Pencil } from 'lucide-react'
import type { PageContent } from '@/types/models'

type PagesIndexProps = {
  sections: PageContent[]
}

export default function PagesIndex({ sections }: PagesIndexProps) {
  const getSectionLabel = (key: string) => {
    const labels: Record<string, string> = {
      hero: 'Section Hero (Accueil)',
      about: 'Section À Propos',
      rsai: 'Section RSAI',
    }
    return labels[key] || key
  }

  return (
    <AdminLayout pageTitle="Contenu des pages - Administration">
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-terracotta/10 via-pastel-peach/10 to-pastel-rose/10 rounded-2xl p-6 border border-terracotta/20">
          <h1 className="text-3xl font-serif font-semibold text-neutral-800">
            Gestion du contenu
          </h1>
          <p className="text-neutral-600 mt-1">
            Modifiez le contenu des différentes sections de votre site
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <Card key={section.id} className="border-terracotta/20 hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-cream/30 to-pastel-peach/10">
                <CardTitle className="text-terracotta-dark">{getSectionLabel(section.sectionKey)}</CardTitle>
                <CardDescription>
                  Dernière modification : {new Date(section.updatedAt).toLocaleDateString('fr-FR')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                {section.imagePath && (
                  <img
                    src={section.imagePath}
                    alt={section.title}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                )}
                <div>
                  <h3 className="font-semibold mb-1 text-neutral-800">{section.title}</h3>
                  <p className="text-sm text-neutral-600 line-clamp-3">
                    {section.content}
                  </p>
                </div>
                <Link href={`/admin/pages/${section.sectionKey}/edit`}>
                  <Button variant="outline" className="w-full border-terracotta/40 text-terracotta-dark hover:bg-terracotta/5">
                    <Pencil className="w-4 h-4 mr-2" />
                    Modifier
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  )
}
