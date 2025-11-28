import { AdminLayout } from '@/components/layout/admin-layout'
import { Link, router } from '@inertiajs/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Plus, Pencil, Trash2, Star } from 'lucide-react'
import type { Testimonial } from '@/types/models'

type TestimonialsIndexProps = {
  testimonials: Testimonial[]
}

export default function TestimonialsIndex({ testimonials }: TestimonialsIndexProps) {
  const handleDelete = (id: number, authorName: string) => {
    if (confirm(`Êtes-vous sûr de vouloir supprimer le témoignage de ${authorName} ?`)) {
      router.delete(`/admin/testimonials/${id}`)
    }
  }

  return (
    <AdminLayout pageTitle="Témoignages - Administration">
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-terracotta/10 via-pastel-peach/10 to-pastel-rose/10 rounded-2xl p-6 border border-terracotta/20">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-serif font-semibold text-neutral-800">
                Gestion des témoignages
              </h1>
              <p className="text-neutral-600 mt-1">
                Gérez les témoignages affichés sur votre site
              </p>
            </div>
            <Link href="/admin/testimonials/create">
              <Button className="flex items-center gap-2 bg-gradient-to-r from-terracotta to-terracotta-dark hover:from-terracotta-dark hover:to-terracotta text-white">
                <Plus className="w-4 h-4" />
                Ajouter un témoignage
              </Button>
            </Link>
          </div>
        </div>

        {testimonials.length === 0 ? (
          <Card className="border-terracotta/20">
            <CardContent className="pt-6 text-center text-neutral-600">
              Aucun témoignage créé pour le moment. Ajoutez votre premier témoignage !
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="flex flex-col border-terracotta/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-12 h-12 rounded-full border-2 border-white shadow-md overflow-hidden bg-terracotta/10 flex-shrink-0">
                        {testimonial.authorPhoto ? (
                          <img
                            src={testimonial.authorPhoto}
                            alt={testimonial.authorName}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-terracotta/20 to-pastel-rose/20">
                            <span className="text-xl font-bold text-terracotta-dark">
                              {testimonial.authorName.charAt(0)}
                            </span>
                          </div>
                        )}
                      </div>
                      <CardTitle className="text-lg text-terracotta-dark">{testimonial.authorName}</CardTitle>
                    </div>
                    <Badge
                      variant={testimonial.isActive ? 'default' : 'secondary'}
                      className={testimonial.isActive ? 'bg-terracotta hover:bg-terracotta-dark' : ''}
                    >
                      {testimonial.isActive ? 'Actif' : 'Inactif'}
                    </Badge>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className={`w-4 h-4 ${
                          index < testimonial.rating
                            ? 'fill-terracotta text-terracotta'
                            : 'text-neutral-300'
                        }`}
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-neutral-600 line-clamp-4 italic">
                    "{testimonial.comment}"
                  </p>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Link href={`/admin/testimonials/${testimonial.id}/edit`} className="flex-1">
                    <Button variant="outline" className="w-full border-terracotta/40 text-terracotta-dark hover:bg-terracotta/5">
                      <Pencil className="w-4 h-4 mr-2" />
                      Modifier
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    onClick={() => handleDelete(testimonial.id, testimonial.authorName)}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  )
}
