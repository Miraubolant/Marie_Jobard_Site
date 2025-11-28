import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'
import PageContent from '#models/page_content'

export default class extends BaseSeeder {
  async run() {
    // Create admin user (Marie Jobard)
    await User.updateOrCreate(
      { email: 'marie.jobard@example.com' },
      {
        name: 'Marie Jobard',
        email: 'marie.jobard@example.com',
        password: 'admin123',
        isAdmin: true,
      }
    )

    // Create Hero section content
    await PageContent.updateOrCreate(
      { sectionKey: 'hero' },
      {
        sectionKey: 'hero',
        title: 'Marie Jobard - Infirmière Puéricultrice à Bordeaux',
        content:
          "Bienvenue ! Je suis Marie Jobard, infirmière puéricultrice diplômée d'État. Passionnée par l'accompagnement à la parentalité, je vous aide à vivre sereinement les premiers mois avec votre bébé.",
        metadata: {
          subtitle: 'Accompagnement personnalisé et bienveillant pour les jeunes parents',
          ctaText: 'Découvrir mes services',
          ctaSecondary: 'Me contacter',
        },
      }
    )

    // Create About section content
    await PageContent.updateOrCreate(
      { sectionKey: 'about' },
      {
        sectionKey: 'about',
        title: 'Mon approche',
        content:
          "Forte de plusieurs années d'expérience en service de maternité et de néonatologie, j'ai à cœur d'accompagner les jeunes parents avec bienveillance et professionnalisme. Mon approche se veut rassurante, à l'écoute de vos besoins et respectueuse de votre rythme familial.\n\nJe propose des consultations à domicile pour vous apporter conseils et soutien dans un environnement familier et sécurisant.",
        metadata: {
          values: [
            'Bienveillance et écoute active',
            'Respect du rythme de chaque famille',
            'Approche personnalisée et humaine',
            'Disponibilité et réactivité',
          ],
        },
      }
    )
  }
}