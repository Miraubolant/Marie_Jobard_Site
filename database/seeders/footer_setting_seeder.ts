import { BaseSeeder } from '@adonisjs/lucid/seeders'
import FooterSetting from '#models/footer_setting'

export default class extends BaseSeeder {
  async run() {
    // Create initial footer settings
    await FooterSetting.updateOrCreate(
      { id: 1 },
      {
        phone: '06 58 75 69 09',
        email: 'marie.jobard@example.com',
        address: 'Bordeaux et agglomération',
        facebookUrl: null,
        instagramUrl: null,
        linkedinUrl: null,
        openingHours: null,
      }
    )
  }
}