import type { HttpContext } from '@adonisjs/core/http'
import PageContent from '#models/page_content'
import { updatePageContentValidator } from '#validators/page_content'
import { cuid } from '@adonisjs/core/helpers'
import app from '@adonisjs/core/services/app'

export default class PageContentsController {
  /**
   * Display list of editable page sections
   */
  async index({ inertia }: HttpContext) {
    const sections = await PageContent.all()

    return inertia.render('admin/pages/index', {
      sections,
    })
  }

  /**
   * Show edit form for a specific section
   */
  async edit({ inertia, params }: HttpContext) {
    const section = await PageContent.findByOrFail('sectionKey', params.section)

    return inertia.render('admin/pages/edit', {
      section,
    })
  }

  /**
   * Update page content section
   */
  async update({ request, response, session, params }: HttpContext) {
    const section = await PageContent.findByOrFail('sectionKey', params.section)
    const data = await request.validateUsing(updatePageContentValidator)
    const image = request.file('image', {
      size: '2mb',
      extnames: ['jpg', 'png', 'jpeg', 'webp'],
    })

    if (image) {
      const imageName = `${cuid()}.${image.extname}`
      await image.move(app.makePath('public/uploads/pages'), {
        name: imageName,
      })
      data.imagePath = `/uploads/pages/${imageName}`
    }

    section.merge(data)
    await section.save()

    session.flash('success', 'Contenu modifié avec succès')
    return response.redirect('/admin/pages')
  }
}
