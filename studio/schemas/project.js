export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'client',
      title: 'Client',
      type: 'reference',
      to: [{ type: 'client' }],
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
    },
    {
      name: 'urlLabel',
      title: 'URL Label',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'collaborators',
      title: 'Collaborators',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'collaborator' }],
        },
      ],
    },
    {
      name: 'credits',
      title: 'Credits',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true
      },
    },
    {
      name: 'featuredFile',
      title: 'Featured File',
      type: 'file',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true
      },
    },
    {
      name: 'coverFile',
      title: 'Cover File',
      type: 'file',
    },
    {
      name: 'innerCoverImage',
      title: 'Inner Cover Image',
      type: 'image',
      options: {
        hotspot: true
      },
    },
    {
      name: 'innerCoverFile',
      title: 'Inner Cover File',
      type: 'file',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'media',
      title: 'Media',
      type: 'array',
      options: {
        layout: 'grid',
      },
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'caption',
              title: 'Caption',
              type: 'string'
            },
            {
              name: 'display',
              type: 'string',
              title: 'Display',
              options: {
                list: [
                  { title: 'Full Bleed', value: 'fullBleed' },
                  { title: 'Half Width', value: 'halfWidth' },
                ],
              },
            },
          ],
        },
        {
          type: 'file',
          fields: [
            {
              name: 'caption',
              title: 'Caption',
              type: 'string'
            },
            {
              name: 'display',
              type: 'string',
              title: 'Display',
              options: {
                list: [
                  { title: 'Full Bleed', value: 'fullBleed' },
                  { title: 'Half Width', value: 'halfWidth' },
                ],
              },
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      client: 'client.name',
      media: 'featuredImage',
    },
    prepare(selection) {
      const { client } = selection
      return { ...selection, subtitle: client && `${client}` }
    },
  },
}
