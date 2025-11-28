import vine from '@vinejs/vine'

export const contactSchema = vine.object({
  name: vine.string().trim().minLength(2).maxLength(100),
  email: vine.string().trim().email(),
  phone: vine
    .string()
    .trim()
    .regex(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/)
    .optional(),
  subject: vine.string().trim().maxLength(200).optional(),
  message: vine.string().trim().minLength(10).maxLength(2000),
})

/**
 * Validator to validate contact form submissions
 */
export const createContactValidator = vine.compile(contactSchema)
