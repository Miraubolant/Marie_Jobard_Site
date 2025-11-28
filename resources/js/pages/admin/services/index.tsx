import { AdminLayout } from '@/components/layout/admin-layout'
import { Link, router } from '@inertiajs/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Plus, Pencil, Trash2 } from 'lucide-react'
import type { Service } from '@/types/models'

type ServicesIndexProps = {
  services: Service[]
}

export default function ServicesIndex({ services }: ServicesIndexProps) {
  const handleDelete = (id: number, title: string) => {
    router.delete(`/admin/services/${id}`)
  }

  return (
    <AdminLayout pageTitle="Services - Administration">
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-terracotta/10 via-pastel-peach/10 to-pastel-rose/10 rounded-2xl p-6 border border-terracotta/20">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-serif font-semibold text-neutral-800">
                Gestion des services
              </h1>
              <p className="text-neutral-600 mt-1">
                Gérez les services proposés sur votre site
              </p>
            </div>
            <Link href="/admin/services/create">
              <Button className="flex items-center gap-2 bg-gradient-to-r from-terracotta to-terracotta-dark hover:from-terracotta-dark hover:to-terracotta text-white">
                <Plus className="w-4 h-4" />
                Ajouter un service
              </Button>
            </Link>
          </div>
        </div>

        {services.length === 0 ? (
          <Card className="border-terracotta/20">
            <CardContent className="pt-6 text-center text-neutral-600">
              Aucun service créé pour le moment. Ajoutez votre premier service !
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.id} className="flex flex-col border-terracotta/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  {service.imagePath && (
                    <img
                      src={service.imagePath}
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )}
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg text-terracotta-dark">{service.title}</CardTitle>
                    <Badge
                      variant={service.isActive ? 'default' : 'secondary'}
                      className={service.isActive ? 'bg-terracotta hover:bg-terracotta-dark' : ''}
                    >
                      {service.isActive ? 'Actif' : 'Inactif'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-neutral-600 line-clamp-3">
                    {service.shortDescription || service.description}
                  </p>
                  {service.price && (
                    <p className="text-lg font-semibold mt-4 text-terracotta-dark">
                      {service.price}€
                      {service.priceLabel && (
                        <span className="text-sm text-neutral-600 font-normal ml-1">
                          {service.priceLabel}
                        </span>
                      )}
                    </p>
                  )}
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Link href={`/admin/services/${service.id}/edit`} className="flex-1">
                    <Button variant="outline" className="w-full border-terracotta/40 text-terracotta-dark hover:bg-terracotta/5">
                      <Pencil className="w-4 h-4 mr-2" />
                      Modifier
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    onClick={() => handleDelete(service.id, service.title)}
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
