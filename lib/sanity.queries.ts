import { groq } from 'next-sanity'

// Site Settings Query
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    title,
    description,
    footerText,
    contactInfo,
    socialLinks,
    stats,
    numberOfClients,
    numberOfReviews,
    ctaSection
  }
`

// Hero Section Query
export const heroSectionQuery = groq`
  *[_type == "heroSection"][0]{
    title,
    subtitle,
    "videoUrl": video.asset->url,
    "mobileVideoUrl": mobileVideo.asset->url
  }
`

// Testimonials Query
export const testimonialsQuery = groq`
  *[_type == "testimonial" && featured == true] | order(order asc, _createdAt desc)[0...6]{
    _id,
    name,
    role,
    company,
    content,
    rating,
    "imageUrl": image.asset->url
  }
`

// Partners Query
export const partnersQuery = groq`
  *[_type == "partner"] | order(order asc, _createdAt desc){
    _id,
    name,
    "logoUrl": logo.asset->url,
    url,
    featured
  }
`

// Clients Query
export const clientsQuery = groq`
  *[_type == "client" && featured == true] | order(order asc, _createdAt desc){
    _id,
    name,
    "logoUrl": logo.asset->url,
    industry,
    description,
    url
  }
`

// Services Query
export const servicesQuery = groq`
  *[_type == "service"] | order(order asc, _createdAt desc){
    _id,
    title,
    description,
    icon,
    features,
    slug
  }
`