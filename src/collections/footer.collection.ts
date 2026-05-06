import type { CollectionConfig } from '@sonicjs-cms/core'

export default {
  name: 'footer',
  displayName: 'Footer',
  description: 'Manage the homepage footer content',
  icon: '🦶',

  schema: {
    type: 'object',
    properties: {
      columns: {
        type: 'array',
        title: 'Footer Columns',
        itemTitle: 'Column',
        items: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
              title: 'Column Title',
              required: true,
              maxLength: 100,
            },
            description: {
              type: 'textarea',
              title: 'Description',
              maxLength: 400,
            },
            links: {
              type: 'array',
              title: 'Links',
              itemTitle: 'Link',
              items: {
                type: 'object',
                properties: {
                  label: {
                    type: 'string',
                    title: 'Label',
                    required: true,
                    maxLength: 100,
                  },
                  href: {
                    type: 'string',
                    title: 'Href',
                    required: true,
                    maxLength: 200,
                  },
                },
              },
            },
          },
        },
      },
      legalLinks: {
        type: 'array',
        title: 'Legal Links',
        itemTitle: 'Legal Link',
        items: {
          type: 'object',
          properties: {
            label: {
              type: 'string',
              title: 'Label',
              required: true,
              maxLength: 100,
            },
            href: {
              type: 'string',
              title: 'Href',
              required: true,
              maxLength: 200,
            },
          },
        },
      },
      copyright: {
        type: 'string',
        title: 'Copyright Text',
        required: true,
        maxLength: 200,
      },
    },
    required: ['columns', 'legalLinks', 'copyright'],
  },

  listFields: ['copyright'],
  searchFields: ['copyright'],
  defaultSort: 'createdAt',
  defaultSortOrder: 'desc',
} satisfies CollectionConfig
