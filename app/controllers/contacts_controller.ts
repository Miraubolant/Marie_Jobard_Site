import type { HttpContext } from '@adonisjs/core/http'
import ContactMessage from '#models/contact_message'
import { createContactValidator } from '#validators/contact'

export default class ContactsController {
  /**
   * Handle contact form submission
   */
  async store({ request, response, session }: HttpContext) {
    const data = await request.validateUsing(createContactValidator)

    // Save message to database
    await ContactMessage.create({
      ...data,
      isRead: false,
    })

    // TODO: Send email notification (Phase 4)
    // await mail.send(...)

    session.flash('success', 'Votre message a bien été envoyé. Nous vous répondrons rapidement !')

    return response.redirect().back()
  }
}