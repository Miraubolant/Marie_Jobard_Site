import { AdminLayout } from '@/components/layout/admin-layout'
import { useForm, usePage } from '@inertiajs/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { InputError } from '@/components/common/input-error'
import { FormEvent, useEffect, useState } from 'react'
import type { FooterSetting } from '@/types/models'
import type { SharedProps } from '@/types'
import { CheckCircle2 } from 'lucide-react'

type FooterEditProps = {
  footerSettings: FooterSetting
}

export default function FooterEdit({ footerSettings }: FooterEditProps) {
  const { flash } = usePage<SharedProps>().props
  const [showSuccess, setShowSuccess] = useState(false)

  const { data, setData, put, processing, errors } = useForm({
    phone: footerSettings.phone || '',
    email: footerSettings.email || '',
    address: footerSettings.address || '',
    facebookUrl: footerSettings.facebookUrl || '',
    instagramUrl: footerSettings.instagramUrl || '',
    linkedinUrl: footerSettings.linkedinUrl || '',
    openingHours: footerSettings.openingHours ? JSON.stringify(footerSettings.openingHours, null, 2) : '',
  })

  useEffect(() => {
    if (flash?.success) {
      setShowSuccess(true)
      const timer = setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [flash])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    put('/admin/footer')
  }

  return (
    <AdminLayout pageTitle="Paramètres du Footer - Administration">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-gradient-to-r from-terracotta/10 via-pastel-peach/10 to-pastel-rose/10 rounded-2xl p-6 border border-terracotta/20">
          <h1 className="text-3xl font-serif font-semibold text-neutral-800">
            Paramètres du Footer
          </h1>
          <p className="text-neutral-600 mt-1">
            Gérez les informations affichées dans le pied de page du site
          </p>
        </div>

        {/* Success notification */}
        {showSuccess && (
          <div className="animate-in fade-in slide-in-from-top duration-500">
            <div className="bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-500 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-800 mb-1">Modifications enregistrées !</h3>
                  <p className="text-lg text-green-700">{flash?.success}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <Card className="border-terracotta/20 shadow-sm">
          <CardHeader className="bg-gradient-to-r from-cream/30 to-pastel-peach/10">
            <CardTitle className="text-terracotta-dark">Informations de contact</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone *</Label>
                  <Input
                    id="phone"
                    value={data.phone}
                    onChange={(e) => setData('phone', e.target.value)}
                    placeholder="06 12 34 56 78"
                    required
                  />
                  {errors.phone && <InputError message={errors.phone} />}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    placeholder="contact@example.com"
                    required
                  />
                  {errors.email && <InputError message={errors.email} />}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Adresse / Zone d'intervention *</Label>
                <Input
                  id="address"
                  value={data.address}
                  onChange={(e) => setData('address', e.target.value)}
                  placeholder="Bordeaux et agglomération"
                  required
                />
                {errors.address && <InputError message={errors.address} />}
              </div>

              <div className="space-y-4 p-6 bg-gradient-to-r from-cream/50 to-pastel-lavender/20 rounded-xl border border-terracotta/10">
                <h3 className="font-semibold text-terracotta-dark">Réseaux sociaux (optionnel)</h3>

                <div className="space-y-2">
                  <Label htmlFor="facebookUrl">URL Facebook</Label>
                  <Input
                    id="facebookUrl"
                    value={data.facebookUrl}
                    onChange={(e) => setData('facebookUrl', e.target.value)}
                    placeholder="https://facebook.com/..."
                  />
                  {errors.facebookUrl && <InputError message={errors.facebookUrl} />}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="instagramUrl">URL Instagram</Label>
                  <Input
                    id="instagramUrl"
                    value={data.instagramUrl}
                    onChange={(e) => setData('instagramUrl', e.target.value)}
                    placeholder="https://instagram.com/..."
                  />
                  {errors.instagramUrl && <InputError message={errors.instagramUrl} />}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="linkedinUrl">URL LinkedIn</Label>
                  <Input
                    id="linkedinUrl"
                    value={data.linkedinUrl}
                    onChange={(e) => setData('linkedinUrl', e.target.value)}
                    placeholder="https://linkedin.com/in/..."
                  />
                  {errors.linkedinUrl && <InputError message={errors.linkedinUrl} />}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="openingHours">Horaires d'ouverture (JSON, optionnel)</Label>
                <Textarea
                  id="openingHours"
                  value={data.openingHours}
                  onChange={(e) => setData('openingHours', e.target.value)}
                  rows={6}
                  placeholder='{"lundi": "9h-18h", "mardi": "9h-18h"}'
                />
                <p className="text-sm text-neutral-600">
                  Format JSON pour les horaires (laissez vide si non utilisé)
                </p>
                {errors.openingHours && <InputError message={errors.openingHours} />}
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  type="submit"
                  disabled={processing}
                  className="bg-gradient-to-r from-terracotta to-terracotta-dark hover:from-terracotta-dark hover:to-terracotta text-white"
                >
                  {processing ? 'Enregistrement...' : 'Enregistrer les modifications'}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => window.location.href = '/admin/dashboard'}
                  className="border-terracotta/40 text-terracotta-dark hover:bg-terracotta/5"
                >
                  Retour au tableau de bord
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
