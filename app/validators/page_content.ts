import vine from '@vinejs/vine'

export const pageContentSchema = vine.object({
  sectionKey: vine.string().trim().in(['hero', 'about']),
  title: vine.string().trim().minLength(3).maxLength(200),
  content: vine.string().trim().minLength(10),
  imagePath: vine.string().optional(),
  metadata: vine.record(vine.any()).optional(),
})

/**
 * Validator to validate page content updates
 */
export const updatePageContentValidator = vine.compile(
  vine.object({
    title: vine.string().trim().minLength(3).maxLength(200),
    content: vine.string().trim().minLength(10),
    imagePath: vine.string().optional(),
    metadata: vine.record(vine.any()).optional(),
  })
)
