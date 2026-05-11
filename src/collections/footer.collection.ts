import type { CollectionConfig } from '@sonicjs-cms/core'

export default {
  name: 'footer',
  displayName: 'Footer',
  description: 'Manage the homepage footer brand description and social links',
  icon: '🦶',

  schema: {
    type: 'object',
    properties: {
      description: {
        type: 'textarea',
        title: 'Brand Description',
        required: true,
        maxLength: 300,
      },
      socialLinks: {
        type: 'array',
        title: 'Social Links',
        itemTitle: 'Social Link',
        items: {
          type: 'object',
          properties: {
            label: {
              type: 'string',
              title: 'Platform Name',
              required: true,
              maxLength: 50,
            },
            href: {
              type: 'string',
              title: 'URL',
              required: true,
              maxLength: 300,
            },
          },
        },
      },
    },
    required: ['description', 'socialLinks'],
  },

  listFields: ['description'],
  searchFields: ['description'],
  defaultSort: 'createdAt',
  defaultSortOrder: 'desc',
} satisfies CollectionConfig
