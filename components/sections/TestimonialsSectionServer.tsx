import { client, projectId } from '@/lib/sanity.client'
import { testimonialsQuery } from '@/lib/sanity.queries'
import TestimonialsSection from './TestimonialsSection'

async function getTestimonials() {
  try {
    // Skip Sanity fetch if no valid project ID
    if (!projectId || projectId === 'dummy-project-id' || projectId === 'your-project-id') {
      return []
    }
    const testimonials = await client.fetch(testimonialsQuery)
    return testimonials
  } catch (error) {
    console.warn('Failed to fetch testimonials from Sanity:', error)
    return []
  }
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