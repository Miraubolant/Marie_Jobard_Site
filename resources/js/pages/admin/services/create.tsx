import { AdminLayout } from '@/components/layout/admin-layout'
import { useForm } from '@inertiajs/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { InputError } from '@/components/common/input-error'
import { FormEvent } from 'react'

export default function ServiceCreate() {
  const { data, setData, post, processing, errors } = useForm({
    title: '',
    description: '',
    shortDescription: '',
    price: '',
    priceLabel: '',
    image: null as File | null,
    displayOrder: 0,
    isActive: true,
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    post('/admin/services')
  }

  return (
    <AdminLayout pageTitle="Ajouter un service - Administration">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="bg-gradient-to-r from-terracotta/10 via-pastel-peach/10 to-pastel-rose/10 rounded-2xl p-6 border border-terracotta/20">
          <h1 className="text-3xl font-serif font-semibold text-neutral-800">
            Ajouter un service
          </h1>
          <p className="text-neutral-600 mt-1">
            Créez un nouveau service à afficher sur votre site
          </p>
        </div>

        <Card className="border-terracotta/20 shadow-sm">
          <CardHeader className="bg-gradient-to-r from-cream/30 to-pastel-peach/10">
            <CardTitle className="text-terracotta-dark">Informations du service</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Titre *</Label>
                <Input
                  id="title"
                  value={data.title}
                  onChange={(e) => setData('title', e.target.value)}
                  placeholder="Ex: Consultation à domicile"
                  required
                />
                {errors.title && <InputError message={errors.title} />}
              </div>

              <div className="space-y-2">
                <Label htmlFor="shortDescription">Description courte</Label>
                <Input
                  id="shortDescription"
                  value={data.shortDescription}
                  onChange={(e) => setData('shortDescription', e.target.value)}
                  placeholder="Description affichée sur la carte du service"
                />
                {errors.shortDescription && <InputError message={errors.shortDescription} />}
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description complète *</Label>
                <Textarea
                  id="description"
                  value={data.description}
                  onChange={(e) => setData('description', e.target.value)}
                  placeholder="Description détaillée du service"
                  rows={6}
                  required
                />
                {errors.description && <InputError message={errors.description} />}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Prix (€)</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    value={data.price}
                    onChange={(e) => setData('price', e.target.value)}
                    placeholder="50.00"
                  />
                  {errors.price && <InputError message={errors.price} />}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="priceLabel">Label du prix</Label>
                  <Input
                    id="priceLabel"
                    value={data.priceLabel}
                    onChange={(e) => setData('priceLabel', e.target.value)}
                    placeholder="Ex: / séance, / heure"
                  />
                  {errors.priceLabel && <InputError message={errors.priceLabel} />}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Image</Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/jpg"
                  onChange={(e) => setData('image', e.target.files?.[0] || null)}
                />
                <p className="text-sm text-neutral-600">
                  Formats acceptés : JPG, PNG, WEBP. Taille max : 2 Mo
                </p>
                {errors.image && <InputError message={errors.image} />}
              </div>

              <div className="space-y-2">
                <Label htmlFor="displayOrder">Ordre d'affichage</Label>
                <Input
                  id="displayOrder"
                  type="number"
                  value={data.displayOrder}
                  onChange={(e) => setData('displayOrder', parseInt(e.target.value))}
                  placeholder="0"
                />
                <p className="text-sm text-neutral-600">
                  Les services sont affichés par ordre croissant (0, 1, 2...)
                </p>
                {errors.displayOrder && <InputError message={errors.displayOrder} />}
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="isActive"
                  checked={data.isActive}
                  onCheckedChange={(checked) => setData('isActive', checked)}
                />
                <Label htmlFor="isActive" className="cursor-pointer">
                  Service actif (visible sur le site)
                </Label>
              </div>

              <div className="flex gap-4">
                <Button
                  type="submit"
                  disabled={processing}
                  className="bg-gradient-to-r from-terracotta to-terracotta-dark hover:from-terracotta-dark hover:to-terracotta text-white"
                >
                  {processing ? 'Enregistrement...' : 'Créer le service'}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => window.history.back()}
                  className="border-terracotta/40 text-terracotta-dark hover:bg-terracotta/5"
                >
                  Annuler
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
