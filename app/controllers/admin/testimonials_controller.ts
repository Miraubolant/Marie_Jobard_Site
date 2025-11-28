import type { HttpContext } from '@adonisjs/core/http'
import Testimonial from '#models/testimonial'
import vine from '@vinejs/vine'
import { cuid } from '@adonisjs/core/helpers'
import app from '@adonisjs/core/services/app'

const createTestimonialValidator = vine.compile(
  vine.object({
    authorName: vine.string().trim().minLength(1),
    comment: vine.string().trim().minLength(10),
    rating: vine.number().min(1).max(5),
    isActive: vine.boolean().optional(),
  })
)

const updateTestimonialValidator = vine.compile(
  vine.object({
    authorName: vine.string().trim().minLength(1),
    comment: vine.string().trim().minLength(10),
    rating: vine.number().min(1).max(5),
    isActive: vine.boolean().optional(),
  })
)

export default class TestimonialsController {
  /**
   * Display list of testimonials
   */
  async index({ inertia }: HttpContext) {
    const testimonials = await Testimonial.query().orderBy('createdAt', 'desc')

    return inertia.render('admin/testimonials/index', {
      testimonials,
    })
  }

  /**
   * Show create testimonial form
   */
  async create({ inertia }: HttpContext) {
    return inertia.render('admin/testimonials/create')
  }

  /**
   * Create a new testimonial
   */
  async store({ request, response, session }: HttpContext) {
    const data = await request.validateUsing(createTestimonialValidator)
    const authorPhoto = request.file('authorPhoto', {
      size: '2mb',
      extnames: ['jpg', 'png', 'jpeg', 'webp'],
    })

    let authorPhotoPath = null

    if (authorPhoto) {
      const photoName = `${cuid()}.${authorPhoto.extname}`
      await authorPhoto.move(app.makePath('public/uploads/testimonials'), {
        name: photoName,
      })
      authorPhotoPath = `/uploads/testimonials/${photoName}`
    }

    await Testimonial.create({
      ...data,
      authorPhoto: authorPhotoPath,
      isActive: data.isActive ?? true,
    })

    session.flash('success', 'Témoignage créé avec succès')
    return response.redirect('/admin/testimonials')
  }

  /**
   * Show edit testimonial form
   */
  async edit({ inertia, params }: HttpContext) {
    const testimonial = await Testimonial.findOrFail(params.id)

    return inertia.render('admin/testimonials/edit', {
      testimonial,
    })
  }

  /**
   * Update testimonial
   */
  async update({ request, response, session, params }: HttpContext) {
    const testimonial = await Testimonial.findOrFail(params.id)
    const data = await request.validateUsing(updateTestimonialValidator)
    const authorPhoto = request.file('authorPhoto', {
      size: '2mb',
      extnames: ['jpg', 'png', 'jpeg', 'webp'],
    })

    if (authorPhoto) {
      const photoName = `${cuid()}.${authorPhoto.extname}`
      await authorPhoto.move(app.makePath('public/uploads/testimonials'), {
        name: photoName,
      })
      testimonial.authorPhoto = `/uploads/testimonials/${photoName}`
    }

    // Remove _method field before merging
    const { _method, ...testimonialData } = data as any
    testimonial.merge(testimonialData)
    await testimonial.save()

    session.flash('success', 'Témoignage modifié avec succès')
    return response.redirect('/admin/testimonials')
  }

  /**
   * Delete testimonial
   */
  async destroy({ response, session, params }: HttpContext) {
    const testimonial = await Testimonial.findOrFail(params.id)
    await testimonial.delete()

    session.flash('success', 'Témoignage supprimé avec succès')
    return response.redirect('/admin/testimonials')
  }
}
