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

export default function TestimonialCreate() {
  const { data, setData, post, processing, errors } = useForm({
    authorName: '',
    authorPhoto: null as File | null,
    comment: '',
    rating: 5,
    isActive: true,
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    post('/admin/testimonials')
  }

  return (
    <AdminLayout pageTitle="Ajouter un témoignage - Administration">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="bg-gradient-to-r from-terracotta/10 via-pastel-peach/10 to-pastel-rose/10 rounded-2xl p-6 border border-terracotta/20">
          <h1 className="text-3xl font-serif font-semibold text-neutral-800">
            Ajouter un témoignage
          </h1>
          <p className="text-neutral-600 mt-1">
            Créez un nouveau témoignage à afficher sur votre site
          </p>
        </div>

        <Card className="border-terracotta/20 shadow-sm">
          <CardHeader className="bg-gradient-to-r from-cream/30 to-pastel-peach/10">
            <CardTitle className="text-terracotta-dark">Informations du témoignage</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="authorName">Nom de l'auteur *</Label>
                <Input
                  id="authorName"
                  value={data.authorName}
                  onChange={(e) => setData('authorName', e.target.value)}
                  placeholder="Ex: Sophie M."
                  required
                />
                {errors.authorName && <InputError message={errors.authorName} />}
              </div>

              <div className="space-y-2">
                <Label htmlFor="comment">Commentaire *</Label>
                <Textarea
                  id="comment"
                  value={data.comment}
                  onChange={(e) => setData('comment', e.target.value)}
                  placeholder="Le témoignage du client..."
                  rows={6}
                  required
                />
                <p className="text-sm text-neutral-600">
                  Minimum 10 caractères
                </p>
                {errors.comment && <InputError message={errors.comment} />}
              </div>

              <div className="space-y-2">
                <Label htmlFor="rating">Note (1 à 5) *</Label>
                <div className="flex items-center gap-4">
                  <Input
                    id="rating"
                    type="number"
                    min="1"
                    max="5"
                    value={data.rating}
                    onChange={(e) => setData('rating', parseInt(e.target.value))}
                    className="w-24"
                    required
                  />
                  <span className="text-neutral-600">étoiles</span>
                </div>
                {errors.rating && <InputError message={errors.rating} />}
              </div>

              <div className="space-y-2">
                <Label htmlFor="authorPhoto">Photo de l'auteur</Label>
                <Input
                  id="authorPhoto"
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/jpg"
                  onChange={(e) => setData('authorPhoto', e.target.files?.[0] || null)}
                />
                <p className="text-sm text-neutral-600">
                  Photo ronde affichée sur la carte du témoignage. Formats : JPG, PNG, WEBP. Taille max : 2 Mo
                </p>
                {errors.authorPhoto && <InputError message={errors.authorPhoto} />}
              </div>

              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-cream/50 to-pastel-lavender/20 rounded-xl border border-terracotta/10">
                <div className="space-y-0.5">
                  <Label htmlFor="isActive" className="text-base">
                    Afficher sur le site
                  </Label>
                  <p className="text-sm text-neutral-600">
                    Le témoignage sera visible publiquement
                  </p>
                </div>
                <Switch
                  id="isActive"
                  checked={data.isActive}
                  onCheckedChange={(checked) => setData('isActive', checked)}
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  type="submit"
                  disabled={processing}
                  className="bg-gradient-to-r from-terracotta to-terracotta-dark hover:from-terracotta-dark hover:to-terracotta text-white"
                >
                  {processing ? 'Création...' : 'Créer le témoignage'}
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
