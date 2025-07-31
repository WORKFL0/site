import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'ctaSection',
  title: 'CTA Section',
  type: 'document',
  fields: [
    defineField({
      name: 'banner',
      title: 'Banner Text',
      type: 'string',
    }),
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
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'primaryCtaText',
      title: 'Primary CTA Text',
      type: 'string',
    }),
    defineField({
      name: 'primaryCtaHref',
      title: 'Primary CTA Link',
      type: 'string',
    }),
    defineField({
      name: 'secondaryCtaText',
      title: 'Secondary CTA Text',
      type: 'string',
    }),
    defineField({
      name: 'secondaryCtaHref',
      title: 'Secondary CTA Link',
      type: 'string',
    }),
    defineField({
      name: 'trust',
      title: 'Trust Indicator',
      type: 'string',
    }),
  ],
})
