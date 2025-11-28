import { AdminLayout } from '@/components/layout/admin-layout'
import { router } from '@inertiajs/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, Trash2, Mail, Phone, Calendar } from 'lucide-react'
import type { ContactMessage } from '@/types/models'

type MessageShowProps = {
  message: ContactMessage
}

export default function MessageShow({ message }: MessageShowProps) {
  const handleDelete = () => {
    router.delete(`/admin/messages/${message.id}`)
  }

  return (
    <AdminLayout pageTitle={`Message de ${message.name} - Administration`}>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-gradient-to-r from-terracotta/10 via-pastel-peach/10 to-pastel-rose/10 rounded-xl p-8 border border-terracotta/20">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-neutral-800">
                Message de {message.name}
              </h1>
              <p className="text-neutral-600 mt-2 text-lg">
                Reçu le {new Date(message.createdAt).toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </div>
            {!message.isRead && (
              <Badge className="bg-terracotta hover:bg-terracotta-dark px-4 py-2 text-base">Nouveau</Badge>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="gap-2 hover:bg-terracotta/10 text-base px-4 py-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour aux messages
          </Button>
          <Button
            variant="outline"
            onClick={handleDelete}
            className="text-red-600 hover:text-red-700 hover:bg-red-50 text-base px-4 py-2"
          >
            <Trash2 className="w-5 h-5 mr-2" />
            Supprimer
          </Button>
        </div>

        <Card className="border-terracotta/20 shadow-md">
          <CardHeader className="bg-gradient-to-r from-cream/30 to-pastel-peach/10 pb-6">
            <CardTitle className="text-3xl font-bold text-terracotta-dark">{message.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6 p-8">
            <div className="grid gap-5">
              <div className="flex items-center gap-4 bg-terracotta/5 rounded-lg p-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-terracotta/20">
                  <Mail className="w-5 h-5 text-terracotta-dark" />
                </div>
                <a
                  href={`mailto:${message.email}`}
                  className="text-terracotta-dark hover:underline font-semibold text-lg"
                >
                  {message.email}
                </a>
              </div>

              {message.phone && (
                <div className="flex items-center gap-4 bg-terracotta/5 rounded-lg p-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-terracotta/20">
                    <Phone className="w-5 h-5 text-terracotta-dark" />
                  </div>
                  <a
                    href={`tel:${message.phone}`}
                    className="text-terracotta-dark hover:underline font-semibold text-lg"
                  >
                    {message.phone}
                  </a>
                </div>
              )}

              <div className="flex items-center gap-4 bg-neutral-50 rounded-lg p-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-200">
                  <Calendar className="w-5 h-5 text-neutral-600" />
                </div>
                <span className="text-neutral-700 font-medium text-lg">
                  {new Date(message.createdAt).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
            </div>

            {message.subject && (
              <>
                <Separator className="bg-terracotta/20 my-6" />
                <div className="bg-terracotta/5 rounded-xl p-6">
                  <h3 className="font-bold text-base text-terracotta-dark mb-3 uppercase tracking-wide">
                    Sujet
                  </h3>
                  <p className="text-neutral-900 text-xl font-semibold">{message.subject}</p>
                </div>
              </>
            )}

            <Separator className="bg-terracotta/20 my-6" />

            <div className="bg-white rounded-xl p-6 border border-neutral-200">
              <h3 className="font-bold text-base text-terracotta-dark mb-4 uppercase tracking-wide">
                Message
              </h3>
              <div className="prose prose-neutral prose-lg max-w-none">
                <p className="whitespace-pre-wrap text-neutral-900 text-lg leading-relaxed">
                  {message.message}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-terracotta/5 to-pastel-peach/10 border-terracotta/20">
          <CardContent className="pt-6 pb-6 px-8">
            <h3 className="font-bold mb-4 text-terracotta-dark text-lg">Actions rapides</h3>
            <div className="flex gap-3 flex-wrap">
              <Button
                variant="outline"
                onClick={() => window.location.href = `mailto:${message.email}`}
                className="border-terracotta text-terracotta-dark hover:bg-terracotta hover:text-white text-base px-6 py-5"
              >
                <Mail className="w-5 h-5 mr-2" />
                Répondre par email
              </Button>
              {message.phone && (
                <Button
                  variant="outline"
                  onClick={() => window.location.href = `tel:${message.phone}`}
                  className="border-terracotta text-terracotta-dark hover:bg-terracotta hover:text-white text-base px-6 py-5"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Appeler
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
