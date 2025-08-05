import { notionFetch } from '@/lib/notion.fetch'
import TestimonialsSection from './TestimonialsSection'

export default async function TestimonialsSectionServer() {
  const testimonials = await notionFetch('testimonials')
  
  // If no testimonials from Notion, use hardcoded data
  if (!testimonials || testimonials.length === 0) {
    return <TestimonialsSection />
  }
  
  // Format the data for the client component
  const formattedTestimonials = testimonials.map((testimonial: any) => ({
    name: testimonial.name,
    role: testimonial.role || '',
    company: testimonial.company,
    content: testimonial.content,
    rating: testimonial.rating || 5,
    image: testimonial.image || '/testimonials/default.jpg',
  }))
  
  return <TestimonialsSection testimonials={formattedTestimonials} />
}