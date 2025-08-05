export default {
  name: 'siteSettings',
  title: 'Website Instellingen',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Website Titel',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Website Beschrijving',
      type: 'text',
      rows: 3,
    },
    {
      name: 'footerText',
      title: 'Footer Tekst',
      type: 'text',
      description: 'De hoofdtekst in de footer',
      rows: 3,
    },
    {
      name: 'contactInfo',
      title: 'Contact Informatie',
      type: 'object',
      fields: [
        {
          name: 'email',
          title: 'E-mail',
          type: 'string',
        },
        {
          name: 'phone',
          title: 'Telefoon',
          type: 'string',
        },
        {
          name: 'address',
          title: 'Adres',
          type: 'string',
        },
      ],
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'Twitter', value: 'twitter' },
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Instagram', value: 'instagram' },
                ],
              },
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
            },
          ],
        },
      ],
    },
    {
      name: 'stats',
      title: 'Statistieken',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'value',
              title: 'Waarde',
              type: 'number',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'suffix',
              title: 'Achtervoegsel',
              type: 'string',
              description: 'Bijvoorbeeld: %, +, /5',
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Beschrijving',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'numberOfClients',
      title: 'Aantal Klanten',
      type: 'string',
      description: 'Bijvoorbeeld: 100+',
    },
    {
      name: 'numberOfReviews',
      title: 'Aantal Reviews',
      type: 'string',
      description: 'Bijvoorbeeld: 10+',
    },
    {
      name: 'ctaSection',
      title: 'Call-to-Action Sectie',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Koptekst',
          type: 'string',
        },
        {
          name: 'subheading',
          title: 'Subtekst',
          type: 'text',
          rows: 3,
        },
        {
          name: 'benefits',
          title: 'Voordelen',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'useVideo',
          title: 'Gebruik Video Achtergrond',
          type: 'boolean',
          description: 'Schakel tussen video achtergrond of kleur achtergrond',
        },
        {
          name: 'videoUrl',
          title: 'Video URL',
          type: 'string',
          description: 'Pad naar de video file',
          hidden: ({ parent }: any) => !parent?.useVideo,
        },
      ],
    },
    {
      name: 'partners',
      title: 'Partners',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Partner Naam',
              type: 'string',
            },
            {
              name: 'logo',
              title: 'Logo',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],
}