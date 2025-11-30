import type { HttpContext } from '@adonisjs/core/http'
import PageContent from '#models/page_content'
import Service from '#models/service'
import Testimonial from '#models/testimonial'
import FooterSetting from '#models/footer_setting'

export default class HomeController {
  /**
   * Display the landing page with hero, about sections and active services
   */
  async index({ inertia }: HttpContext) {
    const hero = await PageContent.findBy('sectionKey', 'hero')
    const about = await PageContent.findBy('sectionKey', 'about')
    const rsai = await PageContent.findBy('sectionKey', 'rsai')
    const services = await Service.query().where('isActive', true).orderBy('displayOrder', 'asc')
    const testimonials = await Testimonial.query().where('isActive', true).orderBy('createdAt', 'desc')
    const footerSettings = await FooterSetting.first()

    return inertia.render('home', {
      hero,
      about,
      rsai,
      services,
      testimonials,
      footerSettings,
    })
  }
}