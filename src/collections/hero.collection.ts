import type { CollectionConfig } from '@sonicjs-cms/core'

export default {
  name: 'hero',
  displayName: 'Hero Section',
  description: 'Manage the homepage hero section content',
  icon: '🏠',

  schema: {
    type: 'object',
    properties: {
      title: {
        type: 'string',
        title: 'Heading',
        required: true,
        maxLength: 200
      },
      description: {
        type: 'textarea',
        title: 'Description',
        required: true,
        maxLength: 500
      },
      backgroundImageSrc: {
        type: 'media',
        title: 'Background Image',
        required: true
      },
      backgroundImageAlt: {
        type: 'string',
        title: 'Background Image Alt Text',
        required: true
      }
    },
    required: ['title', 'description', 'backgroundImageSrc', 'backgroundImageAlt']
  },

  listFields: ['title', 'description'],
  searchFields: ['title', 'description'],
  defaultSort: 'createdAt',
  defaultSortOrder: 'desc'
} satisfies CollectionConfig
