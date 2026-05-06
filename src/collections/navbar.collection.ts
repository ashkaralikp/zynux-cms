import type { CollectionConfig } from '@sonicjs-cms/core'

export default {
  name: 'navbar',
  displayName: 'Navbar',
  description: 'Manage the homepage navigation bar content',
  icon: '🧭',

  schema: {
    type: 'object',
    properties: {
      logo: {
        type: 'object',
        title: 'Logo',
        properties: {
          src: {
            type: 'media',
            title: 'Logo Image',
            required: true,
          },
          alt: {
            type: 'string',
            title: 'Logo Alt Text',
            required: true,
            maxLength: 200,
          },
        },
      },
      links: {
        type: 'array',
        title: 'Navigation Links',
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
      contactBtn: {
        type: 'object',
        title: 'Contact Button',
        properties: {
          label: {
            type: 'string',
            title: 'Button Label',
            required: true,
            maxLength: 100,
          },
          href: {
            type: 'string',
            title: 'Button Href',
            required: true,
            maxLength: 200,
          },
        },
      },
    },
    required: ['logo', 'links', 'contactBtn'],
  },

  listFields: ['links'],
  searchFields: ['links'],
  defaultSort: 'createdAt',
  defaultSortOrder: 'desc',
} satisfies CollectionConfig
