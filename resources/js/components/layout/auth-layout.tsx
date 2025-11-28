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
              className="flex items-center gap-3 self-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-terracotta to-terracotta-dark text-white font-serif text-4xl font-bold shadow-lg">
                MJ
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-neutral-800">Marie Jobard</p>
                <p className="text-sm text-neutral-600 font-semibold">Infirmière Puéricultrice</p>
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
