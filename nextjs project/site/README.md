# Workflo Website

Modern Next.js website for Workflo - Amsterdam's Most Trusted IT Growth Partner.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom animations
- **Language**: TypeScript
- **CMS**: Sanity
- **Animations**: Framer Motion
- **Deployment**: Docker + Cloudflare Tunnel

## Features

- ✨ Modern, responsive design
- 🚀 Optimized performance with lazy loading
- 📱 Mobile-first approach
- 🔍 SEO optimized
- 📊 Sanity CMS integration
- 🎨 Tailwind CSS with custom utilities
- 🐳 Docker containerization

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Docker (for deployment)

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/WORKFL0/site.git
cd site
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp .env.local.example .env.local
```

4. Update `.env.local` with your Sanity credentials:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=prj_Y1mKm3jHw7E3YolW8R9RXhJe5Shx
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=sk8mbkL2iDtkS0rlPpf47CtkJfEf5vUAmKhSE0Ih8vIKOEObEjuaZ6rCvD10ThHoeBwuU9kIP80mO40YLAR11cTA0b6BJcFu7644HRv4Y5HDnUlx0Aye0hrq4eYUrLLSzxOPKRvfnMmymXCSRm8e6RXTGmmxMJpqezq5QGygm6ZHUAH8VCyF
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

```bash
npm run build
npm start
```

## Docker Deployment

### Build the Docker image:
```bash
docker build -t workflo-website .
```

### Run with docker-compose:
```bash
docker-compose up -d
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── sections/         # Page sections
│   └── ui/               # Reusable UI components
├── lib/                   # Utility functions
├── sanity/               # Sanity CMS configuration
│   └── schemas/          # Content schemas
├── public/               # Static assets
├── scripts/              # Build scripts
└── types/                # TypeScript types
```

## Key Components

- **HeroSection**: Animated hero with gradient backgrounds
- **ServicesSection**: Interactive service cards with hover effects
- **StatsSection**: Animated counters with blur effects
- **TestimonialsSection**: Client testimonials with ratings
- **CTASection**: Call-to-action with urgency indicators

## Styling

The project uses Tailwind CSS with custom configurations:

- Custom color palette based on brand colors
- Animation utilities (`blob`, `float`)
- Gradient utilities
- Grid background patterns

## Performance Optimizations

- Image optimization with Next.js Image component
- Lazy loading with custom shimmer effect
- Font optimization with Next.js font loading
- Standalone output for smaller Docker images

## CI/CD

GitHub Actions workflow handles:
- Linting and type checking
- Building and testing
- Docker image creation
- Automated deployment

## Contributing

1. Create a feature branch
2. Make your changes
3. Run `npm run lint` and fix any issues
4. Submit a pull request

## License

© 2024 Workflo. All rights reserved. 
