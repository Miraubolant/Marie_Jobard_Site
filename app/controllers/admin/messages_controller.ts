import type { HttpContext } from '@adonisjs/core/http'
import ContactMessage from '#models/contact_message'

export default class MessagesController {
  /**
   * Display list of contact messages
   */
  async index({ inertia, request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = 20

    const messages = await ContactMessage.query()
      .orderBy('created_at', 'desc')
      .paginate(page, limit)

    return inertia.render('admin/messages/index', {
      messages,
    })
  }

  /**
   * Display a single message and mark as read
   */
  async show({ inertia, params }: HttpContext) {
    const message = await ContactMessage.findOrFail(params.id)

    // Mark as read if not already
    if (!message.isRead) {
      message.isRead = true
      await message.save()
    }

    return inertia.render('admin/messages/show', {
      message,
    })
  }

  /**
   * Delete a contact message
   */
  async destroy({ response, session, params }: HttpContext) {
    const message = await ContactMessage.findOrFail(params.id)
    await message.delete()

    session.flash('success', 'Message supprimé avec succès')
    return response.redirect('/admin/messages')
  }
}
