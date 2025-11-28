import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Testimonial from '#models/testimonial'

export default class extends BaseSeeder {
  async run() {
    // Create sample testimonials
    const testimonials = [
      {
        authorName: 'Sophie M.',
        comment: 'Marie a été d\'une aide précieuse lors des premiers mois avec notre bébé. Son écoute, sa bienveillance et ses conseils professionnels nous ont vraiment rassurés. Je la recommande vivement !',
        rating: 5,
        isActive: true,
      },
      {
        authorName: 'Julie et Thomas',
        comment: 'Merci Marie pour ton accompagnement durant cette période si spéciale. Tes visites à domicile nous ont permis de gagner en confiance et de profiter pleinement de notre petit miracle.',
        rating: 5,
        isActive: true,
      },
      {
        authorName: 'Camille L.',
        comment: 'Un grand merci pour ta disponibilité et ta patience. Les conseils sur l\'allaitement et le sommeil ont été salvateurs. Marie est une professionnelle exceptionnelle et une personne adorable.',
        rating: 5,
        isActive: true,
      },
      {
        authorName: 'Émilie',
        comment: 'Marie nous a accompagnés avec beaucoup de douceur et de professionnalisme. Elle a su répondre à toutes nos questions et nous rassurer dans les moments de doute. Une vraie perle !',
        rating: 5,
        isActive: true,
      },
      {
        authorName: 'Laura et Maxime',
        comment: 'Nous recommandons Marie les yeux fermés ! Son approche bienveillante et ses compétences nous ont permis de vivre sereinement l\'arrivée de notre premier enfant.',
        rating: 5,
        isActive: true,
      },
      {
        authorName: 'Anaïs P.',
        comment: 'Un accompagnement personnalisé et chaleureux. Marie prend vraiment le temps d\'écouter et de comprendre les besoins de chaque famille. Merci pour tout !',
        rating: 5,
        isActive: true,
      },
    ]

    for (const testimonial of testimonials) {
      await Testimonial.updateOrCreate(
        { authorName: testimonial.authorName },
        testimonial
      )
    }
  }
}