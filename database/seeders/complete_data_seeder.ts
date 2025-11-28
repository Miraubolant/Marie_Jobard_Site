import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Service from '#models/service'
import PageContent from '#models/page_content'

export default class extends BaseSeeder {
  async run() {
    // Create services for Marie Jobard
    await Service.createMany([
      {
        title: 'Référent Santé et Accueil Inclusif (RSAI)',
        description:
          'Accompagnement réglementaire obligatoire pour tous les établissements d\'accueil non permanent.\n\nÉlaboration des protocoles sanitaires\nFormation des équipes\nSuivi réglementaire\nAccompagnement inclusion',
        shortDescription: 'Accompagnement réglementaire obligatoire pour tous les établissements d\'accueil non permanent',
        price: null,
        priceLabel: null,
        imagePath: '/images/preview.png',
        displayOrder: 1,
        isActive: true,
      },
      {
        title: 'Formation des professionnels',
        description:
          'Formations adaptées aux besoins de votre équipe et de votre structure.\n\nSanté de l\'enfant\nDéveloppement de l\'enfant\nGestes d\'urgence\nProtocoles d\'hygiène',
        shortDescription: 'Formations adaptées aux besoins de votre équipe et de votre structure',
        price: null,
        priceLabel: null,
        imagePath: '/images/preview.png',
        displayOrder: 2,
        isActive: true,
      },
      {
        title: 'Accompagnement à la parentalité en crèche',
        description:
          'Soutien aux parents au sein de votre établissement pour renforcer le lien famille-crèche.\n\nEntretiens individuels avec les parents\nAnimation de cafés des parents\nGuidance parentale\nAteliers thématiques en crèche',
        shortDescription: 'Soutien aux parents au sein de votre établissement pour renforcer le lien famille-crèche',
        price: null,
        priceLabel: null,
        imagePath: '/images/preview.png',
        displayOrder: 3,
        isActive: true,
      },
      {
        title: 'Accompagnement à la parentalité',
        description:
          'Soutien personnalisé pour les parents dans leur quotidien avec leur enfant.\n\nConseil en développement\nGestion du sommeil\nAlimentation\nÉveil et stimulation',
        shortDescription: 'Soutien personnalisé pour les parents dans leur quotidien avec leur enfant',
        price: null,
        priceLabel: null,
        imagePath: '/images/preview.png',
        displayOrder: 4,
        isActive: true,
      },
      {
        title: 'Temps de rencontre parents',
        description:
          'Ateliers collectifs pour échanger et apprendre ensemble.\n\nAteliers thématiques\nÉchanges entre parents\nConseils pratiques\nSuivi personnalisé',
        shortDescription: 'Ateliers collectifs pour échanger et apprendre ensemble',
        price: null,
        priceLabel: null,
        imagePath: '/images/preview.png',
        displayOrder: 5,
        isActive: true,
      },
    ])

    // Update Hero section content
    await PageContent.updateOrCreate(
      { sectionKey: 'hero' },
      {
        sectionKey: 'hero',
        title: 'Marie Jobard - Infirmière Puéricultrice à Bordeaux',
        content:
          'Bienvenue ! Je suis Marie Jobard, infirmière puéricultrice diplômée d\'État passionnée par l\'accompagnement à la parentalité. Je vous aide à vivre sereinement les premiers mois avec votre bébé grâce à un accompagnement personnalisé et bienveillant.',
        metadata: {
          subtitle: 'Accompagnement personnalisé et bienveillant pour les jeunes parents',
          ctaText: 'Découvrir mes services',
          ctaSecondary: 'Me contacter',
        },
      }
    )

    // Update About section content
    await PageContent.updateOrCreate(
      { sectionKey: 'about' },
      {
        sectionKey: 'about',
        title: 'Une approche bienveillante et professionnelle',
        content:
          'Forte de plusieurs années d\'expérience en service de maternité et de néonatologie à Bordeaux, j\'ai à cœur d\'accompagner les jeunes parents avec bienveillance et professionnalisme.\n\nMon approche se veut rassurante, à l\'écoute de vos besoins et respectueuse de votre rythme familial. Je crois profondément que chaque famille est unique et mérite un accompagnement personnalisé.\n\nJe propose des consultations à domicile pour vous apporter conseils et soutien dans un environnement familier et sécurisant, que ce soit pour l\'allaitement, le sommeil, les soins ou simplement pour vous rassurer dans votre nouveau rôle de parent.',
        metadata: {
          values: [
            'Bienveillance et écoute active',
            'Respect du rythme de chaque famille',
            'Approche personnalisée et humaine',
            'Disponibilité et réactivité',
          ],
          certifications: [
            'Diplôme d\'État d\'Infirmière',
            'Diplôme d\'État de Puéricultrice',
            'Formation en lactation IBCLC',
            'Formation portage physiologique',
          ],
        },
      }
    )
  }
}
