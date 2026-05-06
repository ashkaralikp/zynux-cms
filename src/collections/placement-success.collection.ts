import type { CollectionConfig } from '@sonicjs-cms/core'

export default {
  name: 'placement-success',
  displayName: 'Placement Success Section',
  description: 'Manage the homepage placement success section content',
  icon: '🚀',

  schema: {
    type: 'object',
    properties: {
      eyebrow: {
        type: 'string',
        title: 'Eyebrow Label',
        required: true,
        maxLength: 100,
      },
      headingStart: {
        type: 'string',
        title: 'Heading Line 1',
        required: true,
        maxLength: 120,
      },
      headingHighlight: {
        type: 'string',
        title: 'Highlighted Heading Line',
        required: true,
        maxLength: 120,
      },
      headingEnd: {
        type: 'string',
        title: 'Heading Line 3',
        required: true,
        maxLength: 120,
      },
      description: {
        type: 'textarea',
        title: 'Description',
        required: true,
        maxLength: 500,
      },
      items: {
        type: 'array',
        title: 'Placement Cards',
        itemTitle: 'Placement',
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              title: 'Student Name',
              required: true,
              maxLength: 200,
            },
            photo: {
              type: 'media',
              title: 'Photo',
              required: false,
            },
            course: {
              type: 'string',
              title: 'Course Name',
              required: true,
              maxLength: 150,
            },
            company: {
              type: 'string',
              title: 'Company',
              required: true,
              maxLength: 150,
            },
            role: {
              type: 'string',
              title: 'Role',
              required: true,
              maxLength: 150,
            },
          },
        },
      },
    },
    required: [
      'eyebrow',
      'headingStart',
      'headingHighlight',
      'headingEnd',
      'description',
      'cta',
      'items',
    ],
  },

  listFields: ['eyebrow', 'headingStart'],
  searchFields: ['eyebrow', 'headingStart', 'description'],
  defaultSort: 'createdAt',
  defaultSortOrder: 'desc',
} satisfies CollectionConfig
