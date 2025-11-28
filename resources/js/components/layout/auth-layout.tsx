import { Link } from '@inertiajs/react'
import { type PropsWithChildren } from 'react'
import { DASHBOARD_ROUTE } from '@/app/routes'
import { AppLogo } from '../common/app-logo'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

interface AuthLayoutProps {
  name?: string
  title?: string
  description?: string
}

export const AuthLayout = ({
  children,
  title,
  description,
}: PropsWithChildren<AuthLayoutProps>) => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-gradient-to-br from-cream via-pastel-peach/20 to-pastel-lavender/10 p-6 md:p-10">
      <div className="flex w-full max-w-md flex-col gap-6">
        <div className="flex flex-col gap-8">
          <div className="items-left flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-3 self-center group"
            >
              <img
                src="/images/logo.png"
                alt="Marie Jobard - Infirmière Puéricultrice"
                className="h-16 w-16 object-contain transition-transform group-hover:scale-110"
              />
              <div>
                <p className="font-serif text-3xl font-bold">
                  <span className="text-terracotta-dark group-hover:text-terracotta transition-colors">Marie</span>
                  <span className="text-neutral-800 group-hover:text-terracotta-dark transition-colors"> Jobard</span>
                </p>
                <p className="text-sm font-semibold">
                  <span className="text-neutral-600">Infirmière </span>
                  <span className="text-terracotta-dark">Puéricultrice</span>
                </p>
              </div>
            </Link>
            <div className="flex flex-col gap-6">
              <Card className="rounded-3xl border-2 border-terracotta/30 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-3xl font-serif font-bold text-neutral-800">{title}</CardTitle>
                  <CardDescription className="text-lg text-neutral-600 font-medium">{description}</CardDescription>
                </CardHeader>
                <CardContent>{children}</CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
