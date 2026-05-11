import type { CollectionConfig } from '@sonicjs-cms/core'

export default {
  name: 'testimonials',
  displayName: 'Testimonials',
  description: 'Manage the homepage student testimonials section',
  icon: '⭐',

  schema: {
    type: 'object',
    properties: {
      eyebrow: {
        type: 'string',
        title: 'Eyebrow Label',
        required: true,
        maxLength: 60,
      },
      headingStart: {
        type: 'string',
        title: 'Heading (Start)',
        required: true,
        maxLength: 80,
      },
      headingHighlight: {
        type: 'string',
        title: 'Heading (Highlighted)',
        required: true,
        maxLength: 80,
      },
      headingEnd: {
        type: 'string',
        title: 'Heading (End)',
        required: true,
        maxLength: 80,
      },
      description: {
        type: 'textarea',
        title: 'Description',
        required: true,
        maxLength: 300,
      },
      items: {
        type: 'array',
        title: 'Testimonials',
        itemTitle: 'Testimonial',
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              title: 'Student Name',
              required: true,
              maxLength: 100,
            },
            course: {
              type: 'string',
              title: 'Course',
              required: true,
              maxLength: 100,
            },
            screenshot: {
              type: 'media',
              title: 'Google Review Screenshot',
              required: true,
            },
          },
        },
      },
    },
    required: ['eyebrow', 'headingStart', 'headingHighlight', 'headingEnd', 'description', 'items'],
  },

  listFields: ['headingStart', 'headingHighlight'],
  searchFields: ['headingStart', 'description'],
  defaultSort: 'createdAt',
  defaultSortOrder: 'desc',
} satisfies CollectionConfig
