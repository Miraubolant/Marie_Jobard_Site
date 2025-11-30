import { AdminLayout } from '@/components/layout/admin-layout'
import { useForm } from '@inertiajs/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { InputError } from '@/components/common/input-error'
import { FormEvent } from 'react'
import type { PageContent, RsaiMission } from '@/types/models'
import { Plus, Trash2, GripVertical } from 'lucide-react'

const availableIcons = [
  { value: 'Users', label: 'Utilisateurs' },
  { value: 'Heart', label: 'Coeur' },
  { value: 'FileCheck', label: 'Document validé' },
  { value: 'AlertTriangle', label: 'Alerte' },
  { value: 'Stethoscope', label: 'Stéthoscope' },
  { value: 'BookOpen', label: 'Livre' },
  { value: 'Shield', label: 'Bouclier' },
  { value: 'ClipboardList', label: 'Liste' },
]

type PageEditProps = {
  section: PageContent
}

export default function PageEdit({ section }: PageEditProps) {
  const { data, setData, put, processing, errors } = useForm({
    title: section.title,
    content: section.content,
    image: null as File | null,
    metadata: section.metadata || {},
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    put(`/admin/pages/${section.sectionKey}`)
  }

  const getSectionLabel = (key: string) => {
    const labels: Record<string, string> = {
      hero: 'Section Hero (Accueil)',
      about: 'Section À Propos',
      rsai: 'Section RSAI',
    }
    return labels[key] || key
  }

  // RSAI missions management
  const addMission = () => {
    const missions = data.metadata.missions || []
    setData('metadata', {
      ...data.metadata,
      missions: [...missions, { icon: 'Shield', title: '', description: '' }],
    })
  }

  const removeMission = (index: number) => {
    const missions = [...(data.metadata.missions || [])]
    missions.splice(index, 1)
    setData('metadata', { ...data.metadata, missions })
  }

  const updateMission = (index: number, field: keyof RsaiMission, value: string) => {
    const missions = [...(data.metadata.missions || [])]
    missions[index] = { ...missions[index], [field]: value }
    setData('metadata', { ...data.metadata, missions })
  }

  return (
    <AdminLayout pageTitle={`Modifier ${getSectionLabel(section.sectionKey)} - Administration`}>
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="bg-gradient-to-r from-terracotta/10 via-pastel-peach/10 to-pastel-rose/10 rounded-2xl p-6 border border-terracotta/20">
          <h1 className="text-3xl font-serif font-semibold text-neutral-800">
            {getSectionLabel(section.sectionKey)}
          </h1>
          <p className="text-neutral-600 mt-1">
            Modifiez le contenu de cette section
          </p>
        </div>

        <Card className="border-terracotta/20 shadow-sm">
          <CardHeader className="bg-gradient-to-r from-cream/30 to-pastel-peach/10">
            <CardTitle className="text-terracotta-dark">Contenu de la section</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {section.imagePath && (
                <div className="space-y-2">
                  <Label>Image actuelle</Label>
                  <img
                    src={section.imagePath}
                    alt={section.title}
                    className="w-full max-w-md h-48 object-cover rounded-lg"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="title">
                  {section.sectionKey === 'hero' ? 'Titre SEO / Alt image *' : 'Titre *'}
                </Label>
                <Input
                  id="title"
                  value={data.title}
                  onChange={(e) => setData('title', e.target.value)}
                  required
                />
                {section.sectionKey === 'hero' && (
                  <p className="text-sm text-neutral-500">
                    Utilisé pour le référencement et le texte alternatif de l'image
                  </p>
                )}
                {errors.title && <InputError message={errors.title} />}
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">
                  {section.sectionKey === 'hero' ? 'Sous-titre / Description *' : 'Contenu *'}
                </Label>
                <Textarea
                  id="content"
                  value={data.content}
                  onChange={(e) => setData('content', e.target.value)}
                  rows={section.sectionKey === 'hero' ? 3 : 8}
                  required
                />
                <p className="text-sm text-neutral-500">
                  {section.sectionKey === 'hero'
                    ? "Le texte affiché sous le nom \"Marie Jobard Infirmière Puéricultrice\""
                    : 'Utilisez des sauts de ligne pour créer des paragraphes'}
                </p>
                {errors.content && <InputError message={errors.content} />}
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Nouvelle image</Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/jpg"
                  onChange={(e) => setData('image', e.target.files?.[0] || null)}
                />
                <p className="text-sm text-neutral-600">
                  Formats acceptés : JPG, PNG, WEBP. Taille max : 2 Mo. Laissez vide pour conserver l'image actuelle.
                </p>
                {errors.image && <InputError message={errors.image} />}
              </div>

              {section.sectionKey === 'hero' && (
                <div className="space-y-4 p-6 bg-gradient-to-r from-cream/50 to-pastel-lavender/20 rounded-xl border border-terracotta/10">
                  <h3 className="font-semibold text-terracotta-dark">Options de la section Hero</h3>

                  <div className="space-y-2">
                    <Label htmlFor="location">Badge de localisation</Label>
                    <Input
                      id="location"
                      value={data.metadata.location || ''}
                      onChange={(e) => setData('metadata', { ...data.metadata, location: e.target.value })}
                      placeholder="Bordeaux et agglomération"
                    />
                    <p className="text-sm text-neutral-500">Le texte affiché dans le badge avec l'icône de localisation</p>
                  </div>

                  <div className="space-y-3">
                    <Label>Badges de confiance</Label>
                    <p className="text-sm text-neutral-500">Les 3 badges affichés sous le sous-titre</p>
                    {[0, 1, 2].map((index) => (
                      <Input
                        key={index}
                        value={(data.metadata.badges || [])[index]?.text || ''}
                        onChange={(e) => {
                          const badges = [...(data.metadata.badges || [
                            { text: "Diplômée d'État" },
                            { text: "+5 ans d'expérience" },
                            { text: "RSAI Certifiée" },
                          ])]
                          badges[index] = { text: e.target.value }
                          setData('metadata', { ...data.metadata, badges })
                        }}
                        placeholder={`Badge ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="ctaText">Bouton principal</Label>
                      <Input
                        id="ctaText"
                        value={data.metadata.ctaText || ''}
                        onChange={(e) => setData('metadata', { ...data.metadata, ctaText: e.target.value })}
                        placeholder="Découvrir mes services"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ctaSecondary">Bouton secondaire</Label>
                      <Input
                        id="ctaSecondary"
                        value={data.metadata.ctaSecondary || ''}
                        onChange={(e) => setData('metadata', { ...data.metadata, ctaSecondary: e.target.value })}
                        placeholder="Me contacter"
                      />
                    </div>
                  </div>
                </div>
              )}

              {section.sectionKey === 'rsai' && (
                <div className="space-y-4 p-6 bg-gradient-to-r from-cream/50 to-pastel-lavender/20 rounded-xl border border-terracotta/10">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-terracotta-dark">Missions RSAI</h3>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={addMission}
                      className="border-terracotta/40 text-terracotta-dark hover:bg-terracotta/5"
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      Ajouter une mission
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {(data.metadata.missions || []).map((mission: RsaiMission, index: number) => (
                      <div
                        key={index}
                        className="p-4 bg-white rounded-lg border border-terracotta/20 space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <GripVertical className="w-4 h-4 text-neutral-400" />
                            <span className="text-sm font-medium text-neutral-600">Mission {index + 1}</span>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeMission(index)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>

                        <div className="grid gap-3">
                          <div className="space-y-1">
                            <Label className="text-sm">Icône</Label>
                            <select
                              value={mission.icon}
                              onChange={(e) => updateMission(index, 'icon', e.target.value)}
                              className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                            >
                              {availableIcons.map((icon) => (
                                <option key={icon.value} value={icon.value}>
                                  {icon.label}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="space-y-1">
                            <Label className="text-sm">Titre *</Label>
                            <Input
                              value={mission.title}
                              onChange={(e) => updateMission(index, 'title', e.target.value)}
                              placeholder="Titre de la mission"
                              required
                            />
                          </div>

                          <div className="space-y-1">
                            <Label className="text-sm">Description *</Label>
                            <Textarea
                              value={mission.description}
                              onChange={(e) => updateMission(index, 'description', e.target.value)}
                              placeholder="Description de la mission"
                              rows={3}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    ))}

                    {(!data.metadata.missions || data.metadata.missions.length === 0) && (
                      <p className="text-center text-neutral-500 py-4">
                        Aucune mission définie. Cliquez sur "Ajouter une mission" pour commencer.
                      </p>
                    )}
                  </div>
                </div>
              )}

              <div className="flex gap-4">
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
