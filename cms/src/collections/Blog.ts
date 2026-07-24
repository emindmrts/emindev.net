import type { CollectionConfig } from 'payload'

export const Blog: CollectionConfig = {
  slug: 'blog',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'yyyy-MM-dd',
        },
      },
    },
    {
      name: 'tag',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'Reference', value: 'reference' },
        { label: 'Tutorial', value: 'tutorial' },
        { label: 'Opinion', value: 'opinion' },
        // ... more tags can be added later or we can use a separate Tags collection, but for now we match the frontmatter
      ],
    },
    {
      name: 'draft',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'content',
      type: 'richText',
    }
  ],
}
