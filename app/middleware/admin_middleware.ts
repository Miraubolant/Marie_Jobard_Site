import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class AdminMiddleware {
  async handle({ auth, response }: HttpContext, next: NextFn) {
    /**
     * Check if user is authenticated and is an admin
     */
    await auth.check()

    if (!auth.user) {
      return response.redirect('/admin/login')
    }

    if (!auth.user.isAdmin) {
      return response.forbidden('Access denied. Admin privileges required.')
    }

    /**
     * Call next method in the pipeline and return its output
     */
    const output = await next()
    return output
  }
}