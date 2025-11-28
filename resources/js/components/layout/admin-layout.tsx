import { Head, Link, usePage } from '@inertiajs/react'
import { type PropsWithChildren } from 'react'
import { type SharedProps } from '@/types'
import { Button } from '../ui/button'
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  MessageSquare,
  Star,
  Settings,
  LogOut
} from 'lucide-react'

type AdminLayoutProps = {
  pageTitle?: string
}

export const AdminLayout = ({
  children,
  pageTitle,
}: PropsWithChildren & AdminLayoutProps) => {
  const { auth } = usePage<SharedProps>().props

  const navItems = [
    { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/services', label: 'Services', icon: Briefcase },
    { href: '/admin/pages', label: 'Contenu', icon: FileText },
    { href: '/admin/testimonials', label: 'Témoignages', icon: Star },
    { href: '/admin/messages', label: 'Messages', icon: MessageSquare },
    { href: '/admin/footer', label: 'Footer', icon: Settings },
  ]

  return (
    <>
      <Head title={pageTitle} />
      <div className="min-h-screen bg-neutral-50" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
        {/* Admin Header */}
        <header className="bg-white border-b border-neutral-200">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-8">
                <Link href="/admin/dashboard" className="text-xl font-semibold text-neutral-800">
                  Administration - Marie Jobard
                </Link>
                <nav className="hidden md:flex items-center gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors"
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-neutral-600">
                  {auth?.user?.name}
                </span>
                <Link
                  href="/api/auth/logout"
                  method="post"
                  as="button"
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Déconnexion
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </div>
    </>
  )
}
