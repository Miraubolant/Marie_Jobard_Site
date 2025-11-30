export interface Service {
  id: number
  title: string
  description: string
  shortDescription: string | null
  price: number | null
  priceLabel: string | null
  imagePath: string | null
  displayOrder: number
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface RsaiMission {
  icon: string
  title: string
  description: string
}

export interface PageContent {
  id: number
  sectionKey: 'hero' | 'about' | 'rsai'
  title: string
  content: string
  imagePath: string | null
  metadata: Record<string, any> | null
  createdAt: string
  updatedAt: string
}

export interface ContactMessage {
  id: number
  name: string
  email: string
  phone: string | null
  subject: string | null
  message: string
  isRead: boolean
  createdAt: string
}

export interface Testimonial {
  id: number
  authorName: string
  authorPhoto: string | null
  comment: string
  rating: number
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface FooterSetting {
  id: number
  phone: string
  email: string
  address: string
  facebookUrl: string | null
  instagramUrl: string | null
  linkedinUrl: string | null
  openingHours: Record<string, any> | null
  createdAt: string
  updatedAt: string
}
