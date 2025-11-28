import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'footer_settings'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('phone').notNullable()
      table.string('email').notNullable()
      table.string('address').notNullable()
      table.string('facebook_url').nullable()
      table.string('instagram_url').nullable()
      table.string('linkedin_url').nullable()
      table.json('opening_hours').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}