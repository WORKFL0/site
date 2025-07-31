export default {
  name: 'client',
  title: 'Klanten',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Klant Naam',
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
      name: 'industry',
      title: 'Branche',
      type: 'string',
      options: {
        list: [
          { title: 'Marketing & Media', value: 'marketing' },
          { title: 'Non-Profit', value: 'nonprofit' },
          { title: 'Retail', value: 'retail' },
          { title: 'Zakelijke Dienstverlening', value: 'professional' },
          { title: 'Gezondheidszorg', value: 'healthcare' },
          { title: 'Onderwijs', value: 'education' },
          { title: 'Technologie', value: 'technology' },
          { title: 'Overig', value: 'other' },
        ],
      },
    },
    {
      name: 'description',
      title: 'Beschrijving',
      type: 'text',
      rows: 2,
      description: 'Korte beschrijving van de samenwerking',
    },
    {
      name: 'url',
      title: 'Website URL',
      type: 'url',
    },
    {
      name: 'featured',
      title: 'Uitgelicht',
      type: 'boolean',
      description: 'Toon deze klant op de homepage',
    },
    {
      name: 'order',
      title: 'Volgorde',
      type: 'number',
      description: 'Lagere nummers worden eerst getoond',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'industry',
      media: 'logo',
    },
  },
}