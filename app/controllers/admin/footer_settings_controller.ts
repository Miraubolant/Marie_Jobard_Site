import type { HttpContext } from '@adonisjs/core/http'
import FooterSetting from '#models/footer_setting'
import vine from '@vinejs/vine'

const updateFooterSettingValidator = vine.compile(
  vine.object({
    phone: vine.string().trim(),
    email: vine.string().trim().email(),
    address: vine.string().trim(),
    facebookUrl: vine.string().trim().optional(),
    instagramUrl: vine.string().trim().optional(),
    linkedinUrl: vine.string().trim().optional(),
    openingHours: vine.string().trim().optional(),
  })
)

export default class FooterSettingsController {
  /**
   * Show edit form for footer settings
   */
  async index({ inertia }: HttpContext) {
    // Get the first (and only) footer settings record, or create a default one
    let footerSettings = await FooterSetting.first()

    if (!footerSettings) {
      footerSettings = await FooterSetting.create({
        phone: '06 58 75 69 09',
        email: 'marie.jobard@example.com',
        address: 'Bordeaux et agglomération',
        facebookUrl: null,
        instagramUrl: null,
        linkedinUrl: null,
        openingHours: null,
      })
    }

    return inertia.render('admin/footer/edit', {
      footerSettings,
    })
  }

  /**
   * Update footer settings
   */
  async update({ request, response, session }: HttpContext) {
    let footerSettings = await FooterSetting.first()

    if (!footerSettings) {
      footerSettings = new FooterSetting()
    }

    const data = await request.validateUsing(updateFooterSettingValidator)

    // Parse opening hours JSON if provided
    if (data.openingHours) {
      try {
        footerSettings.openingHours = JSON.parse(data.openingHours)
      } catch {
        footerSettings.openingHours = null
      }
    }

    footerSettings.phone = data.phone
    footerSettings.email = data.email
    footerSettings.address = data.address
    footerSettings.facebookUrl = data.facebookUrl || null
    footerSettings.instagramUrl = data.instagramUrl || null
    footerSettings.linkedinUrl = data.linkedinUrl || null

    await footerSettings.save()

    session.flash('success', 'Paramètres du footer modifiés avec succès')
    return response.redirect('/admin/footer')
  }
}
