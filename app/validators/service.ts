import vine from '@vinejs/vine'

/**
 * Validator to validate the payload when creating a new service
 */
export const createServiceValidator = vine.compile(
  vine.object({
    title: vine.string().trim().minLength(3).maxLength(200),
    description: vine.string().trim().minLength(10),
    shortDescription: vine.string().trim().minLength(10).maxLength(500).optional(),
    price: vine.number().min(0).optional(),
    priceLabel: vine.string().trim().maxLength(100).optional(),
    imagePath: vine.string().optional(),
    displayOrder: vine.number().min(0).optional(),
    isActive: vine.boolean().optional(),
  })
)

/**
 * Validator to validate the payload when updating an existing service
 */
export const updateServiceValidator = vine.compile(
  vine.object({
    id: vine.number(),
    title: vine.string().trim().minLength(3).maxLength(200),
    description: vine.string().trim().minLength(10),
    shortDescription: vine.string().trim().minLength(10).maxLength(500).optional(),
    price: vine.number().min(0).optional(),
    priceLabel: vine.string().trim().maxLength(100).optional(),
    imagePath: vine.string().optional(),
    displayOrder: vine.number().min(0).optional(),
    isActive: vine.boolean().optional(),
    _method: vine.string().optional(),
  })
)
