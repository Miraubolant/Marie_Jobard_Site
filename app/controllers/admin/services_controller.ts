import type { HttpContext } from '@adonisjs/core/http'
import Service from '#models/service'
import { createServiceValidator, updateServiceValidator } from '#validators/service'
import { cuid } from '@adonisjs/core/helpers'
import app from '@adonisjs/core/services/app'

export default class ServicesController {
  /**
   * Display list of services
   */
  async index({ inertia }: HttpContext) {
    const services = await Service.query().orderBy('displayOrder', 'asc')

    return inertia.render('admin/services/index', {
      services,
    })
  }

  /**
   * Show create service form
   */
  async create({ inertia }: HttpContext) {
    return inertia.render('admin/services/create')
  }

  /**
   * Create a new service
   */
  async store({ request, response, session }: HttpContext) {
    const data = await request.validateUsing(createServiceValidator)
    const image = request.file('image', {
      size: '2mb',
      extnames: ['jpg', 'png', 'jpeg', 'webp'],
    })

    let imagePath = null

    if (image) {
      const imageName = `${cuid()}.${image.extname}`
      await image.move(app.makePath('public/uploads/services'), {
        name: imageName,
      })
      imagePath = `/uploads/services/${imageName}`
    }

    await Service.create({
      ...data,
      imagePath,
      displayOrder: data.displayOrder ?? 0,
      isActive: data.isActive ?? true,
    })

    session.flash('success', 'Service créé avec succès')
    return response.redirect('/admin/services')
  }

  /**
   * Show edit service form
   */
  async edit({ inertia, params }: HttpContext) {
    const service = await Service.findOrFail(params.id)

    return inertia.render('admin/services/edit', {
      service,
    })
  }

  /**
   * Update service
   */
  async update({ request, response, session, params }: HttpContext) {
    const service = await Service.findOrFail(params.id)
    const data = await request.validateUsing(updateServiceValidator)
    const image = request.file('image', {
      size: '2mb',
      extnames: ['jpg', 'png', 'jpeg', 'webp'],
    })

    if (image) {
      const imageName = `${cuid()}.${image.extname}`
      await image.move(app.makePath('public/uploads/services'), {
        name: imageName,
      })
      data.imagePath = `/uploads/services/${imageName}`
    }

    // Remove _method field before merging
    const { _method, ...serviceData } = data
    service.merge(serviceData)
    await service.save()

    session.flash('success', 'Service modifié avec succès')
    return response.redirect('/admin/services')
  }

  /**
   * Delete service
   */
  async destroy({ response, session, params }: HttpContext) {
    const service = await Service.findOrFail(params.id)
    await service.delete()

    session.flash('success', 'Service supprimé avec succès')
    return response.redirect('/admin/services')
  }
}
