export default {
  name: 'client',
  title: 'Client',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      location: 'location',
    },
    prepare(selection) {
      const { location } = selection
      return { ...selection, subtitle: location }
    },
  },
}
