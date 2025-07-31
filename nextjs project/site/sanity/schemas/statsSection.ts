import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'statsSection',
  title: 'Stats Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        defineField({
          name: 'stat',
          title: 'Stat',
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'number' },
            { name: 'suffix', title: 'Suffix', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'description', title: 'Description', type: 'string' },
          ],
        }),
      ],
    }),
    defineField({
      name: 'partners',
      title: 'Partners',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})
