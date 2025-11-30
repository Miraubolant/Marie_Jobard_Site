import { DASHBOARD_ROUTE } from '@/app/routes'
import { InputError } from '@/components/common/input-error'
import TextLink from '@/components/common/text-link'
import { AuthLayout } from '@/components/layout/auth-layout'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { LOGIN_API } from '@/lib/constants'
import { type ValidationErrors } from '@/types'
import { type PageProps } from '@/types/inertia'
import { Head, router, useForm } from '@inertiajs/react'
import { EyeIcon, EyeOffIcon, LoaderCircle } from 'lucide-react'
import { useState } from 'react'

type LoginForm = {
  email: string
  password: string
  remember: boolean
}

interface LoginProps extends PageProps {
  status?: string
  canResetPassword: boolean
}

const LoginPage = ({ status, canResetPassword, auth, flash }: LoginProps) => {
  const { errors } = flash as { errors: ValidationErrors }

  const [showPassword, setShowPassword] = useState(false)
  const { data, setData, post, reset, processing } = useForm<Required<LoginForm>>({
    email: '',
    password: '',
    remember: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Direct Inertia form submission
    post(LOGIN_API, {
      onFinish: () => reset('password'),
      onError: (_errors) => {
        // show a toast or send error to Sentry or log it to Firebase.
        // whatever you prefer
      },
    })
  }

  // Backend handles redirect after login, no need for client-side check

  return (
    <AuthLayout title="Connexion" description="Accédez à votre espace d'administration">
      <Head title="Connexion - Marie Jobard" />

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6">
          <div className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="email" className="text-lg font-bold">Email</Label>
              <Input
                id="email"
                type="email"
                required
                autoFocus
                tabIndex={1}
                autoComplete="email"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                placeholder="marie.jobard@example.com"
                className="rounded-2xl border-2 border-neutral-200 focus:border-terracotta text-lg py-6"
              />
              <InputError message={errors?.email} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="password" className="text-lg font-bold">Mot de passe</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  tabIndex={2}
                  autoComplete="current-password"
                  value={data.password}
                  onChange={(e) => setData('password', e.target.value)}
                  className="rounded-2xl border-2 border-neutral-200 focus:border-terracotta text-lg py-6"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  disabled={!data.password}
                  className="absolute top-0 right-0 h-full px-3 py-2 hover:cursor-pointer hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </Button>
              </div>
              <InputError message={errors?.password} />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                name="remember"
                checked={data.remember}
                onClick={() => setData('remember', !data.remember)}
                tabIndex={3}
              />
              <Label className="text-base font-normal" htmlFor="remember">
                Se souvenir de moi
              </Label>
            </div>

            <Button
              type="submit"
              className="btn-handdrawn mt-4 h-14 w-full bg-terracotta hover:bg-terracotta-dark text-white font-bold text-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-terracotta-dark"
              tabIndex={4}
              disabled={processing}
            >
              {processing && <LoaderCircle className="h-5 w-5 animate-spin mr-2" />}
              Se connecter
            </Button>
          </div>
        </div>
      </form>

      {status && (
        <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>
      )}
    </AuthLayout>
  )
}

export default LoginPage
