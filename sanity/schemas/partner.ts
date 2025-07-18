export default {
  name: 'partner',
  title: 'Partners',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Partner Naam',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'url',
      title: 'Website URL',
      type: 'url',
    },
    {
      name: 'order',
      title: 'Volgorde',
      type: 'number',
      description: 'Lagere nummers worden eerst getoond',
    },
    {
      name: 'featured',
      title: 'Uitgelicht',
      type: 'boolean',
      description: 'Toon deze partner prominent',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
  },
}