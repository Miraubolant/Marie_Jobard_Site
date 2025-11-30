import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'
import Service from '#models/service'
import PageContent from '#models/page_content'
import Testimonial from '#models/testimonial'
import FooterSetting from '#models/footer_setting'

/**
 * Production Backup Seeder
 *
 * Ce seeder contient une sauvegarde complète des données de production
 * incluant tous les chemins vers les images uploadées.
 *
 * Créé le: 2025-11-29
 *
 * Usage:
 *   node ace db:seed --files=database/seeders/production_backup_seeder.ts
 *
 * Ou après migration:fresh:
 *   node ace migration:fresh && node ace db:seed --files=database/seeders/production_backup_seeder.ts
 */
export default class ProductionBackupSeeder extends BaseSeeder {
  async run() {
    // ==========================================
    // 0. ADMIN USER
    // ==========================================
    await User.updateOrCreate(
      { email: 'mariejobard33@gmail.com' },
      {
        name: 'Marie Jobard',
        email: 'mariejobard33@gmail.com',
        password: 'Aqsze188665!',
        isAdmin: true,
      }
    )

    // ==========================================
    // 1. SERVICES (Production data - 2025-11-29)
    // ==========================================
    await Service.createMany([
      {
        title: 'Référent Santé et Accueil Inclusif (RSAI)',
        description:
          "Accompagnement réglementaire obligatoire pour tous les établissements d'accueil non permanent.\n\nÉlaboration des protocoles sanitaires\nFormation des équipes\nSuivi réglementaire\nAccompagnement inclusion",
        shortDescription: "Accompagnement réglementaire obligatoire pour tous les établissements d'accueil non permanent",
        price: null,
        priceLabel: null,
        imagePath: '/uploads/services/hncnm3oz8noilea8jj13tls7.png',
        displayOrder: 1,
        isActive: true,
      },
      {
        title: 'Formation des professionnels',
        description:
          "Formations adaptées aux besoins de votre équipe et de votre structure.\n\nSanté de l'enfant\nDéveloppement de l'enfant\nGestes d'urgence\nProtocoles d'hygiène",
        shortDescription: 'Formations adaptées aux besoins de votre équipe et de votre structure',
        price: null,
        priceLabel: null,
        imagePath: '/uploads/services/mc040q62f3owo92wcwp1oqbq.png',
        displayOrder: 2,
        isActive: true,
      },
      {
        title: 'Accompagnement à la parentalité en crèche',
        description:
          "Soutien aux parents au sein de votre établissement pour renforcer le lien famille-crèche.\n\nEntretiens individuels avec les parents\nAnimation de cafés des parents\nGuidance parentale\nAteliers thématiques en crèche",
        shortDescription: 'Soutien aux parents au sein de votre établissement pour renforcer le lien famille-crèche',
        price: null,
        priceLabel: null,
        imagePath: '/uploads/services/peyjrvnuy59vh45por3jo4w7.png',
        displayOrder: 3,
        isActive: true,
      },
      {
        title: 'Soutien personnalisé pour les parents',
        description:
          "Soutien personnalisé pour les parents dans leur quotidien avec leur enfant.\n\nConseil en développement\nGestion du sommeil\nAlimentation\nÉveil et stimulation",
        shortDescription: 'Soutien personnalisé pour les parents dans leur quotidien avec leur enfant',
        price: null,
        priceLabel: null,
        imagePath: '/uploads/services/jbzqoxjp3dhybcsrkijiibev.png',
        displayOrder: 4,
        isActive: true,
      },
      {
        title: 'Temps de rencontre parents',
        description:
          "Ateliers collectifs pour échanger et apprendre ensemble.\n\nAteliers thématiques\nÉchanges entre parents\nConseils pratiques\nSuivi personnalisé",
        shortDescription: 'Ateliers collectifs pour échanger et apprendre ensemble',
        price: null,
        priceLabel: null,
        imagePath: '/uploads/services/a8x2whjc016yey4w2mf3tx9n.png',
        displayOrder: 5,
        isActive: true,
      },
    ])

    // ==========================================
    // 2. PAGE CONTENTS (Hero & About)
    // ==========================================

    // Hero Section
    await PageContent.updateOrCreate(
      { sectionKey: 'hero' },
      {
        sectionKey: 'hero',
        title: 'Marie Jobard - Infirmière Puéricultrice à Bordeaux',
        content: 'Accompagnement professionnel en crèche et soutien personnalisé à la parentalité',
        imagePath: '/uploads/pages/offofe5qtaoy9z4luw7ab8w0.png',
        metadata: {
          location: 'Bordeaux et agglomération',
          badges: [
            { text: "Diplômée d'État" },
            { text: "+5 ans d'expérience" },
            { text: "RSAI Certifiée" },
          ],
          ctaText: 'Découvrir mes services',
          ctaSecondary: 'Me contacter',
        },
      }
    )

    // About Section
    await PageContent.updateOrCreate(
      { sectionKey: 'about' },
      {
        sectionKey: 'about',
        title: 'Mon approche',
        content: "Forte de plusieurs années d'expérience en service de maternité et de néonatologie, j'ai à cœur d'accompagner les jeunes parents avec bienveillance et professionnalisme. Mon approche se veut rassurante, à l'écoute de vos besoins et respectueuse de votre rythme familial.\n\nJe propose des consultations à domicile pour vous apporter conseils et soutien dans un environnement familier et sécurisant.",
        imagePath: '/uploads/pages/db76ur8nq9ijqmmaftm8vuvt.png',
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

    // RSAI Section
    await PageContent.updateOrCreate(
      { sectionKey: 'rsai' },
      {
        sectionKey: 'rsai',
        title: "Qu'est-ce que le RSAI ?",
        content: "Je réponds aux missions spécifiées par le décret, mais également aux besoins des structures. Ensemble, nous déterminerons des interventions sur mesure.",
        imagePath: null,
        metadata: {
          missions: [
            {
              icon: 'Users',
              title: 'Informer, sensibiliser et conseiller',
              description: "Accompagner les équipes et les familles dans la compréhension des enjeux de santé et de bien-être des enfants accueillis.",
            },
            {
              icon: 'Heart',
              title: 'Apporter son concours',
              description: "Apporter son concours pour la mise en œuvre des mesures nécessaires à la bonne adaptation, au bien-être, au bon développement des enfants et au respect de leurs besoins dans l'établissement ou le service.",
            },
            {
              icon: 'FileCheck',
              title: 'Aider et accompagner',
              description: "Pour un enfant dont l'état de santé le nécessite, aider et accompagner l'équipe de l'établissement ou du service dans la compréhension et la mise en œuvre d'un projet d'accueil individualisé élaboré par le médecin traitant de l'enfant en accord avec sa famille.",
            },
            {
              icon: 'AlertTriangle',
              title: 'Contribuer au repérage des enfants en danger',
              description: "Contribuer, dans le cadre du dispositif départemental de traitement des informations préoccupantes, en coordination avec le référent technique ou le directeur de l'établissement, au repérage des enfants en danger ou en risque de l'être et à l'information sur les conduites à tenir.",
            },
            {
              icon: 'Stethoscope',
              title: 'Procéder à un examen',
              description: "Procéder, lorsqu'il l'estime nécessaire pour l'exercice de ses missions et avec l'accord des titulaires de l'autorité parentale, à un examen de l'enfant afin d'envisager si nécessaire une orientation médicale.",
            },
            {
              icon: 'BookOpen',
              title: 'Présenter et expliquer',
              description: "Présenter et expliquer aux professionnels chargés de l'encadrement des enfants les protocoles prévus par la réglementation.",
            },
            {
              icon: 'Shield',
              title: "Veiller à l'accueil inclusif",
              description: "Veiller à la mise en place de toutes mesures nécessaires à l'accueil inclusif des enfants en situation de handicap, vivant avec une affection chronique, ou présentant tout problème de santé nécessitant un traitement ou une attention particulière.",
            },
            {
              icon: 'Heart',
              title: "Assurer des actions d'éducation",
              description: "Assurer des actions d'éducation et de promotion de la santé auprès des professionnels, notamment en matière de recommandations nutritionnelles, d'activités physiques, de sommeil, d'exposition aux écrans et de santé environnementale.",
            },
            {
              icon: 'ClipboardList',
              title: "Contribuer à l'établissement de protocoles",
              description: "Contribuer, en concertation avec le référent technique ou le directeur de l'établissement, à l'établissement des protocoles annexés au règlement de fonctionnement, et veiller à leur bonne compréhension par l'équipe.",
            },
          ],
        },
      }
    )

    // ==========================================
    // 3. TESTIMONIALS
    // ==========================================
    const testimonials = [
      {
        authorName: 'Sophie M.',
        comment: "Marie a été d'une aide précieuse lors des premiers mois avec notre bébé. Son écoute, sa bienveillance et ses conseils professionnels nous ont vraiment rassurés. Je la recommande vivement !",
        rating: 5,
        authorPhoto: '/uploads/testimonials/iom9x8awbmw5w82ps3jjb1l7.png',
        isActive: true,
      },
      {
        authorName: 'Julie et Thomas',
        comment: "Merci Marie pour ton accompagnement durant cette période si spéciale. Tes visites à domicile nous ont permis de gagner en confiance et de profiter pleinement de notre petit miracle.",
        rating: 5,
        authorPhoto: '/uploads/testimonials/gxtcejqa3kgd3z496yqujnuj.png',
        isActive: true,
      },
      {
        authorName: 'Camille L.',
        comment: "Un grand merci pour ta disponibilité et ta patience. Les conseils sur l'allaitement et le sommeil ont été salvateurs. Marie est une professionnelle exceptionnelle et une personne adorable.",
        rating: 5,
        authorPhoto: '/uploads/testimonials/rwxh573boqywu7oh06rk0ocz.png',
        isActive: true,
      },
      {
        authorName: 'Émilie',
        comment: "Marie nous a accompagnés avec beaucoup de douceur et de professionnalisme. Elle a su répondre à toutes nos questions et nous rassurer dans les moments de doute. Une vraie perle !",
        rating: 5,
        authorPhoto: '/uploads/testimonials/usimzhxr0j2asgmtbg0mutsp.png',
        isActive: true,
      },
      {
        authorName: 'Laura et Maxime',
        comment: "Nous recommandons Marie les yeux fermés ! Son approche bienveillante et ses compétences nous ont permis de vivre sereinement l'arrivée de notre premier enfant.",
        rating: 5,
        authorPhoto: '/uploads/testimonials/vbaeld17ir8kjogdjgp6256r.png',
        isActive: true,
      },
      {
        authorName: 'Anaïs P.',
        comment: "Un accompagnement personnalisé et chaleureux. Marie prend vraiment le temps d'écouter et de comprendre les besoins de chaque famille. Merci pour tout !",
        rating: 5,
        authorPhoto: '/uploads/testimonials/guqc6tnggrvsozhs5m9uhgy9.png',
        isActive: true,
      },
    ]

    for (const testimonial of testimonials) {
      await Testimonial.updateOrCreate(
        { authorName: testimonial.authorName },
        testimonial
      )
    }

    // ==========================================
    // 4. FOOTER SETTINGS
    // ==========================================
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

    console.log('Production backup seeder completed successfully!')
  }
}
