import type { CollectionConfig } from '@sonicjs-cms/core'

export default {
  name: 'blog',
  displayName: 'Blog',
  description: 'Manage blog posts and the blog section heading',
  icon: '✍️',

  schema: {
    type: 'object',
    properties: {
      eyebrow: {
        type: 'string',
        title: 'Eyebrow Label',
        required: true,
        maxLength: 60,
      },
      heading: {
        type: 'string',
        title: 'Page Heading',
        required: true,
        maxLength: 100,
      },
      description: {
        type: 'textarea',
        title: 'Description',
        required: true,
        maxLength: 300,
      },
      posts: {
        type: 'array',
        title: 'Blog Posts',
        itemTitle: 'Post',
        items: {
          type: 'object',
          properties: {
            slug: {
              type: 'string',
              title: 'Slug (URL path)',
              required: true,
              maxLength: 100,
            },
            title: {
              type: 'string',
              title: 'Title',
              required: true,
              maxLength: 200,
            },
            excerpt: {
              type: 'textarea',
              title: 'Excerpt',
              required: true,
              maxLength: 400,
            },
            coverImage: {
              type: 'media',
              title: 'Cover Image',
              required: true,
            },
            category: {
              type: 'string',
              title: 'Category',
              required: true,
              maxLength: 60,
            },
            author: {
              type: 'string',
              title: 'Author',
              required: true,
              maxLength: 100,
            },
            date: {
              type: 'string',
              title: 'Date (YYYY-MM-DD)',
              required: true,
              maxLength: 20,
            },
            readTime: {
              type: 'string',
              title: 'Read Time',
              required: true,
              maxLength: 30,
            },
            content: {
              type: 'textarea',
              title: 'Content',
              required: true,
              maxLength: 10000,
            },
          },
        },
      },
    },
    required: ['eyebrow', 'heading', 'description', 'posts'],
  },

  listFields: ['heading'],
  searchFields: ['heading', 'description'],
  defaultSort: 'createdAt',
  defaultSortOrder: 'desc',
} satisfies CollectionConfig
