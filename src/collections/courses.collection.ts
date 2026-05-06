import type { CollectionConfig } from '@sonicjs-cms/core'

export default {
  name: 'courses',
  displayName: 'Courses Section',
  description: 'Manage the homepage courses section content',
  icon: '📚',

  schema: {
    type: 'object',
    properties: {
      heading: {
        type: 'string',
        title: 'Heading',
        required: true,
        maxLength: 200,
      },
      items: {
        type: 'array',
        title: 'Courses',
        itemTitle: 'Course',
        items: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
              title: 'Title',
              required: true,
              maxLength: 200,
            },
            description: {
              type: 'textarea',
              title: 'Description',
              required: true,
              maxLength: 500,
            },
            schedule: {
              type: 'array',
              title: 'Schedule',
              itemTitle: 'Session',
              items: {
                type: 'object',
                properties: {
                  type: {
                    type: 'string',
                    title: 'Batch Type',
                    required: true,
                    maxLength: 100,
                  },
                  time: {
                    type: 'string',
                    title: 'Time',
                    required: true,
                    maxLength: 100,
                  },
                  start: {
                    type: 'string',
                    title: 'Start Date',
                    required: true,
                    maxLength: 100,
                  },
                  end: {
                    type: 'string',
                    title: 'End Date',
                    required: true,
                    maxLength: 100,
                  },
                },
              },
            },
            features: {
              type: 'array',
              title: 'Features',
              itemTitle: 'Feature',
              items: {
                type: 'object',
                properties: {
                  icon: {
                    type: 'string',
                    title: 'Lucide Icon Name',
                    required: true,
                    maxLength: 100,
                  },
                  title: {
                    type: 'string',
                    title: 'Title',
                    required: true,
                    maxLength: 100,
                  },
                  desc: {
                    type: 'textarea',
                    title: 'Description',
                    required: true,
                    maxLength: 300,
                  },
                },
              },
            },
          },
        },
      },
    },
    required: ['heading', 'items'],
  },

  listFields: ['heading'],
  searchFields: ['heading'],
  defaultSort: 'createdAt',
  defaultSortOrder: 'desc',
} satisfies CollectionConfig
