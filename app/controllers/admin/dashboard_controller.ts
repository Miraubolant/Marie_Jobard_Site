import type { HttpContext } from '@adonisjs/core/http'
import Service from '#models/service'
import ContactMessage from '#models/contact_message'

export default class DashboardController {
  /**
   * Display admin dashboard with stats
   */
  async index({ inertia }: HttpContext) {
    const servicesCount = await Service.query().count('* as total')
    const unreadMessagesCount = await ContactMessage.query()
      .where('isRead', false)
      .count('* as total')

    return inertia.render('admin/dashboard', {
      servicesCount: servicesCount[0].$extras.total,
      unreadMessagesCount: unreadMessagesCount[0].$extras.total,
    })
  }
}
