import { Head, Link, usePage } from '@inertiajs/react'
import { type PropsWithChildren, useState } from 'react'
import { type SharedProps } from '@/types'
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  MessageSquare,
  Star,
  Settings,
  LogOut,
  Menu,
  X
} from 'lucide-react'

type AdminLayoutProps = {
  pageTitle?: string
}

export const AdminLayout = ({
  children,
  pageTitle,
}: PropsWithChildren & AdminLayoutProps) => {
  const { auth } = usePage<SharedProps>().props
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
                <Link href="/admin/dashboard" className="text-base md:text-xl font-semibold text-neutral-800">
                  <span className="hidden sm:inline">Administration - </span>Marie Jobard
                </Link>
                <nav className="hidden lg:flex items-center gap-4">
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
              <div className="flex items-center gap-2 md:gap-4">
                <span className="hidden md:inline text-sm text-neutral-600">
                  {auth?.user?.name}
                </span>
                <Link
                  href="/api/auth/logout"
                  method="post"
                  as="button"
                  className="hidden md:flex items-center gap-2 px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Déconnexion
                </Link>
                {/* Mobile menu button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 text-neutral-600 hover:text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-neutral-200 bg-white">
              <nav className="container mx-auto px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-base font-medium text-neutral-600 hover:text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors"
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                ))}
                <div className="border-t border-neutral-200 pt-4 mt-4">
                  <div className="flex items-center justify-between px-4 py-2">
                    <span className="text-sm text-neutral-600">
                      {auth?.user?.name}
                    </span>
                    <Link
                      href="/api/auth/logout"
                      method="post"
                      as="button"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-red-600 hover:text-red-700 rounded-lg hover:bg-red-50 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      Déconnexion
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </div>
    </>
  )
}
