import type { CollectionConfig } from '@sonicjs-cms/core'

export default {
  name: 'contact',
  displayName: 'Contact Section',
  description: 'Manage the homepage contact section content',
  icon: '📬',

  schema: {
    type: 'object',
    properties: {
      heading: {
        type: 'textarea',
        title: 'Heading',
        required: true,
        maxLength: 250,
      },
      description: {
        type: 'textarea',
        title: 'Description',
        required: true,
        maxLength: 600,
      },
      whatsappLink: {
        type: 'string',
        title: 'WhatsApp Link',
        required: true,
        maxLength: 300,
      },
    },
    required: ['heading', 'description', 'whatsappLink'],
  },

  listFields: ['heading'],
  searchFields: ['heading', 'description'],
  defaultSort: 'createdAt',
  defaultSortOrder: 'desc',
} satisfies CollectionConfig
