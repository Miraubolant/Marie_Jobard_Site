import { useForm, usePage } from '@inertiajs/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { InputError } from '@/components/common/input-error'
import { CheckCircle2 } from 'lucide-react'
import { FormEvent, useEffect, useState } from 'react'
import type { SharedProps } from '@/types'

export function Contact() {
  const { flash } = usePage<SharedProps>().props
  const [showSuccess, setShowSuccess] = useState(false)

  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
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
    post('/contact', {
      preserveScroll: true,
      onSuccess: () => {
        reset()
      },
    })
  }

  return (
    <section id="contact" className="py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pastel-lavender/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pastel-peach/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="scroll-fade-up text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
            <span className="text-neutral-800">Envie d'</span>
            <span className="text-terracotta-dark">échanger</span>
            <span className="text-neutral-800"> ensemble ?</span>
          </h2>
          <p className="text-xl md:text-2xl font-bold leading-relaxed">
            <span className="text-neutral-700">Je suis là pour vous </span>
            <span className="text-terracotta-dark">écouter</span>
            <span className="text-neutral-700"> et répondre à toutes vos questions avec </span>
            <span className="text-terracotta-dark">bienveillance</span>
          </p>
        </div>

        {/* Success notification */}
        {showSuccess && (
          <div className="max-w-6xl mx-auto mb-8 animate-in fade-in slide-in-from-top duration-500">
            <div className="bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-500 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-800 mb-1">Message envoyé avec succès !</h3>
                  <p className="text-lg text-green-700">Je vous répondrai dans les plus brefs délais.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="scroll-fade-left space-y-4">
            <Card className="rounded-2xl border-2 border-terracotta/30 hover:border-terracotta hover:shadow-xl transition-all" style={{ backgroundColor: '#faf8f5' }}>
              <CardHeader className="pb-3 pt-5 px-5">
                <CardTitle className="font-serif text-2xl md:text-3xl font-bold text-neutral-800">Informations de contact</CardTitle>
                <CardDescription className="text-base text-neutral-600 font-medium">
                  Je suis disponible pour répondre à vos questions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 px-5 pb-5">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-pastel-peach/30 to-transparent hover:from-pastel-peach/50 transition-all">
                  <img
                    src="/images/telephone.png"
                    alt="Téléphone"
                    className="flex-shrink-0 w-16 h-16 object-contain"
                  />
                  <div>
                    <h3 className="font-bold text-lg text-neutral-800 mb-1">Téléphone</h3>
                    <a
                      href="tel:0658756909"
                      className="text-base text-terracotta-dark hover:text-terracotta transition-colors font-bold"
                    >
                      06 58 75 69 09
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-pastel-rose/30 to-transparent hover:from-pastel-rose/50 transition-all">
                  <img
                    src="/images/email.png"
                    alt="Email"
                    className="flex-shrink-0 w-16 h-16 object-contain"
                  />
                  <div>
                    <h3 className="font-bold text-lg text-neutral-800 mb-1">Email</h3>
                    <a
                      href="mailto:marie.jobard@example.com"
                      className="text-base text-terracotta-dark hover:text-terracotta transition-colors font-bold break-all"
                    >
                      marie.jobard@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-pastel-lavender/30 to-transparent hover:from-pastel-lavender/50 transition-all">
                  <img
                    src="/images/itineraire.png"
                    alt="Zone d'intervention"
                    className="flex-shrink-0 w-16 h-16 object-contain"
                  />
                  <div>
                    <h3 className="font-bold text-lg text-neutral-800 mb-1">Zone d'intervention</h3>
                    <p className="text-base text-neutral-700 font-bold">
                      Bretagne
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="scroll-fade-right rounded-2xl border-2 border-terracotta/30 hover:border-terracotta hover:shadow-xl transition-all" style={{ backgroundColor: '#faf8f5' }}>
            <CardHeader className="pb-3 pt-5 px-5">
              <CardTitle className="font-serif text-2xl md:text-3xl font-bold text-neutral-800">Envoyez-moi un message</CardTitle>
              <CardDescription className="text-base text-neutral-600 font-medium">
                Je vous répondrai dans les plus brefs délais
              </CardDescription>
            </CardHeader>
            <CardContent className="px-5 pb-5">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="name" className="text-sm font-bold">Nom *</Label>
                    <Input
                      id="name"
                      value={data.name}
                      onChange={(e) => setData('name', e.target.value)}
                      placeholder="Votre nom"
                      required
                      className="rounded-xl border-2 border-neutral-200 focus:border-terracotta text-base py-5 px-3"
                    />
                    {errors.name && <InputError message={errors.name} />}
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="email" className="text-sm font-bold">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={data.email}
                      onChange={(e) => setData('email', e.target.value)}
                      placeholder="votre@email.com"
                      required
                      className="rounded-xl border-2 border-neutral-200 focus:border-terracotta text-base py-5 px-3"
                    />
                    {errors.email && <InputError message={errors.email} />}
                  </div>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="phone" className="text-sm font-bold">Téléphone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={data.phone}
                    onChange={(e) => setData('phone', e.target.value)}
                    placeholder="06 12 34 56 78"
                    className="rounded-xl border-2 border-neutral-200 focus:border-terracotta text-base py-5 px-3"
                  />
                  {errors.phone && <InputError message={errors.phone} />}
                </div>

                <div className="space-y-1">
                  <Label htmlFor="subject" className="text-sm font-bold">Sujet</Label>
                  <Input
                    id="subject"
                    value={data.subject}
                    onChange={(e) => setData('subject', e.target.value)}
                    placeholder="L'objet de votre message"
                    className="rounded-xl border-2 border-neutral-200 focus:border-terracotta text-base py-5 px-3"
                  />
                  {errors.subject && <InputError message={errors.subject} />}
                </div>

                <div className="space-y-1">
                  <Label htmlFor="message" className="text-sm font-bold">Message *</Label>
                  <Textarea
                    id="message"
                    value={data.message}
                    onChange={(e) => setData('message', e.target.value)}
                    placeholder="Votre message..."
                    rows={4}
                    required
                    className="rounded-xl border-2 border-neutral-200 focus:border-terracotta text-base px-3 py-3 resize-none"
                  />
                  {errors.message && <InputError message={errors.message} />}
                </div>

                <Button
                  type="submit"
                  disabled={processing}
                  className="btn-handdrawn w-full bg-terracotta hover:bg-terracotta-dark text-white font-bold text-lg py-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-terracotta-dark"
                  size="lg"
                >
                  {processing ? 'Envoi en cours...' : 'Envoyer le message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
