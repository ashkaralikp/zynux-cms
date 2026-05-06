import type { CollectionConfig } from '@sonicjs-cms/core'

export default {
  name: 'programs',
  displayName: 'Programs Section',
  description: 'Manage the homepage programs section content',
  icon: '🧪',

  schema: {
    type: 'object',
    properties: {
      heading: {
        type: 'textarea',
        title: 'Heading',
        required: true,
        maxLength: 200,
      },
      descriptions: {
        type: 'array',
        title: 'Descriptions',
        itemTitle: 'Description',
        items: {
          type: 'textarea',
          title: 'Description',
          required: true,
          maxLength: 500,
        },
      },
      items: {
        type: 'array',
        title: 'Programs',
        itemTitle: 'Program',
        items: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
              title: 'Title',
              required: true,
              maxLength: 200,
            },
            img: {
              type: 'string',
              title: 'Image Key',
              maxLength: 100,
            },
            desc: {
              type: 'textarea',
              title: 'Short Description',
              required: true,
              maxLength: 300,
            },
            image: {
              type: 'media',
              title: 'Program Image',
              required: true,
            },
            details: {
              type: 'textarea',
              title: 'Detailed Description',
              required: true,
              maxLength: 1000,
            },
            features: {
              type: 'array',
              title: 'Features',
              itemTitle: 'Feature',
              items: {
                type: 'string',
                title: 'Feature',
                required: true,
                maxLength: 120,
              },
            },
          },
        },
      },
    },
    required: ['heading', 'descriptions', 'items'],
  },

  listFields: ['heading'],
  searchFields: ['heading'],
  defaultSort: 'createdAt',
  defaultSortOrder: 'desc',
} satisfies CollectionConfig
