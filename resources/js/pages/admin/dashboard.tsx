import { AdminLayout } from '@/components/layout/admin-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Briefcase, MessageSquare, FileText, Eye } from 'lucide-react'
import { Link } from '@inertiajs/react'

type DashboardProps = {
  servicesCount: number
  unreadMessagesCount: number
}

export default function AdminDashboard({ servicesCount, unreadMessagesCount }: DashboardProps) {
  return (
    <AdminLayout pageTitle="Dashboard - Administration">
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-terracotta/10 via-pastel-peach/10 to-pastel-rose/10 rounded-2xl p-8 border border-terracotta/20">
          <h1 className="text-3xl font-serif font-semibold text-neutral-800">
            Bienvenue Marie ! 👋
          </h1>
          <p className="text-neutral-600 mt-2 text-lg">
            Gérez facilement votre site web professionnel
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-terracotta/20 bg-gradient-to-br from-white to-cream/30 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-neutral-700">
                Services actifs
              </CardTitle>
              <div className="p-2 bg-terracotta/10 rounded-lg">
                <Briefcase className="h-5 w-5 text-terracotta-dark" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-terracotta-dark">{servicesCount}</div>
              <p className="text-sm text-neutral-600 mt-1">
                Prestations disponibles sur le site
              </p>
              <Link href="/admin/services" className="mt-4 inline-block">
                <Button variant="outline" size="sm" className="border-terracotta/40 text-terracotta-dark hover:bg-terracotta/5">
                  <Eye className="h-4 w-4 mr-2" />
                  Voir les services
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-terracotta/20 bg-gradient-to-br from-white to-pastel-peach/20 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-neutral-700">
                Messages non lus
              </CardTitle>
              <div className="p-2 bg-terracotta/10 rounded-lg">
                <MessageSquare className="h-5 w-5 text-terracotta-dark" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-terracotta-dark">{unreadMessagesCount}</div>
              <p className="text-sm text-neutral-600 mt-1">
                Nouveaux messages à traiter
              </p>
              <Link href="/admin/messages" className="mt-4 inline-block">
                <Button variant="outline" size="sm" className="border-terracotta/40 text-terracotta-dark hover:bg-terracotta/5">
                  <Eye className="h-4 w-4 mr-2" />
                  Voir les messages
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-terracotta/20 bg-gradient-to-br from-white to-pastel-rose/20 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-neutral-700">
                Contenu du site
              </CardTitle>
              <div className="p-2 bg-terracotta/10 rounded-lg">
                <FileText className="h-5 w-5 text-terracotta-dark" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-terracotta-dark">2</div>
              <p className="text-sm text-neutral-600 mt-1">
                Sections à personnaliser
              </p>
              <Link href="/admin/pages" className="mt-4 inline-block">
                <Button variant="outline" size="sm" className="border-terracotta/40 text-terracotta-dark hover:bg-terracotta/5">
                  <Eye className="h-4 w-4 mr-2" />
                  Modifier le contenu
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Info Banner */}
        <div className="bg-gradient-to-r from-pastel-blue/30 to-pastel-lavender/30 rounded-2xl p-6 border border-terracotta/10">
          <h3 className="font-serif font-semibold text-neutral-800 mb-2">
            💡 Astuce du jour
          </h3>
          <p className="text-neutral-700">
            Pensez à mettre régulièrement à jour vos services et tarifs pour refléter vos prestations actuelles.
            Les visiteurs apprécient les informations à jour !
          </p>
        </div>
      </div>
    </AdminLayout>
  )
}
