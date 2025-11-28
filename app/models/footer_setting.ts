import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class FooterSetting extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare phone: string

  @column()
  declare email: string

  @column()
  declare address: string

  @column()
  declare facebookUrl: string | null

  @column()
  declare instagramUrl: string | null

  @column()
  declare linkedinUrl: string | null

  @column()
  declare openingHours: Record<string, any> | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
