import type { CollectionConfig } from '@sonicjs-cms/core'

export default {
  name: 'trust',
  displayName: 'Trust Section',
  description: 'Manage the homepage trust section content',
  icon: '🤝',

  schema: {
    type: 'object',
    properties: {
      image: {
        type: 'object',
        title: 'Section Image',
        properties: {
          src: {
            type: 'media',
            title: 'Image',
            required: true,
          },
          alt: {
            type: 'string',
            title: 'Alt Text',
            required: true,
            maxLength: 200,
          },
        },
      },
      heading: {
        type: 'textarea',
        title: 'Heading',
        required: true,
        maxLength: 200,
      },
      description: {
        type: 'textarea',
        title: 'Description',
        required: true,
        maxLength: 700,
      },
      subheading: {
        type: 'string',
        title: 'Subheading',
        required: true,
        maxLength: 150,
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
    required: ['image', 'heading', 'description', 'subheading', 'features'],
  },

  listFields: ['heading', 'subheading'],
  searchFields: ['heading', 'description', 'subheading'],
  defaultSort: 'createdAt',
  defaultSortOrder: 'desc',
} satisfies CollectionConfig
