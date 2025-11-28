import { AdminLayout } from '@/components/layout/admin-layout'
import { Link } from '@inertiajs/react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, MailOpen, Eye } from 'lucide-react'
import type { ContactMessage } from '@/types/models'

type MessagesIndexProps = {
  messages: {
    data: ContactMessage[]
    meta: {
      total: number
      per_page: number
      current_page: number
      last_page: number
    }
  }
}

export default function MessagesIndex({ messages }: MessagesIndexProps) {
  return (
    <AdminLayout pageTitle="Messages - Administration">
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-terracotta/10 via-pastel-peach/10 to-pastel-rose/10 rounded-xl p-8 border border-terracotta/20">
          <h1 className="text-4xl font-bold text-neutral-800">
            Messages de contact
          </h1>
          <p className="text-neutral-600 mt-2 text-lg">
            {messages.meta.total} message(s) reçu(s)
          </p>
        </div>

        {messages.data.length === 0 ? (
          <Card className="border-terracotta/20">
            <CardContent className="pt-8 pb-8 text-center text-neutral-600 text-lg">
              Aucun message pour le moment.
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {messages.data.map((message) => (
              <Link key={message.id} href={`/admin/messages/${message.id}`}>
                <Card className="hover:shadow-lg transition-all hover:border-terracotta/40 cursor-pointer border-terracotta/20 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-5">
                      <div className="mt-1 flex-shrink-0">
                        {message.isRead ? (
                          <MailOpen className="w-6 h-6 text-neutral-400" />
                        ) : (
                          <Mail className="w-6 h-6 text-terracotta-dark" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-bold text-neutral-900">
                                {message.name}
                              </h3>
                              {!message.isRead && (
                                <Badge variant="default" className="bg-terracotta hover:bg-terracotta-dark px-3 py-1">
                                  Nouveau
                                </Badge>
                              )}
                            </div>
                            <div className="flex flex-col gap-1">
                              <p className="text-base text-neutral-700 font-medium">
                                {message.email}
                              </p>
                              {message.phone && (
                                <p className="text-base text-neutral-600">
                                  📞 {message.phone}
                                </p>
                              )}
                            </div>
                          </div>
                          <span className="text-sm text-neutral-500 whitespace-nowrap font-medium">
                            {new Date(message.createdAt).toLocaleDateString('fr-FR', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </span>
                        </div>
                        {message.subject && (
                          <div className="bg-terracotta/5 rounded-lg px-4 py-2 mb-3">
                            <p className="text-base font-semibold text-terracotta-dark">
                              Sujet : {message.subject}
                            </p>
                          </div>
                        )}
                        <p className="text-base text-neutral-700 mt-2 line-clamp-3 leading-relaxed">
                          {message.message}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-terracotta-dark mt-4 font-medium">
                          <Eye className="w-4 h-4" />
                          Cliquer pour voir le message complet
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}

        {messages.meta.last_page > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: messages.meta.last_page }, (_, i) => i + 1).map((page) => (
              <Link
                key={page}
                href={`/admin/messages?page=${page}`}
                className={`px-4 py-2 rounded-lg font-medium ${
                  page === messages.meta.current_page
                    ? 'bg-gradient-to-r from-terracotta to-terracotta-dark text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-terracotta/10'
                }`}
              >
                {page}
              </Link>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  )
}
