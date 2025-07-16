import { client } from '@/lib/sanity.client'
import { testimonialsQuery } from '@/lib/sanity.queries'
import TestimonialsSection from './TestimonialsSection'

async function getTestimonials() {
  const testimonials = await client.fetch(testimonialsQuery)
  return testimonials
}

export default async function TestimonialsSectionServer() {
  const testimonials = await getTestimonials()
  
  // Als er geen testimonials in Sanity zijn, gebruik de hardcoded data
  if (!testimonials || testimonials.length === 0) {
    return <TestimonialsSection />
  }
  
  // Format de data voor de client component
  const formattedTestimonials = testimonials.map((testimonial: any) => ({
    name: testimonial.name,
    role: testimonial.role || '',
    company: testimonial.company,
    content: testimonial.content,
    rating: testimonial.rating || 5,
    image: testimonial.imageUrl || '/testimonials/default.jpg',
  }))
  
  return <TestimonialsSection testimonials={formattedTestimonials} />
}