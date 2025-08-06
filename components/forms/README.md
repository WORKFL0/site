# Newsletter Signup Component

A reusable newsletter signup component that integrates with HubSpot forms and supports multiple design variants and bilingual content.

## Features

- **HubSpot Integration**: Direct integration with HubSpot forms using portal ID 26510736
- **Bilingual Support**: Full Dutch/English translation support
- **Multiple Variants**: Default, footer, and inline variants
- **Responsive Design**: Mobile-first responsive design
- **Success States**: Animated success message after subscription
- **Accessibility**: WCAG compliant with proper ARIA labels

## Usage

### Basic Usage

```tsx
import NewsletterSignup from '@/components/forms/NewsletterSignup'

export default function MyPage() {
  return (
    <NewsletterSignup 
      formId="your-hubspot-form-id"
    />
  )
}
```

### Footer Integration

```tsx
import NewsletterSignup from '@/components/forms/NewsletterSignup'

export default function Footer() {
  return (
    <NewsletterSignup 
      variant="footer"
      formId="newsletter-signup-form-id"
    />
  )
}
```

### Compact Version

```tsx
import NewsletterSignup from '@/components/forms/NewsletterSignup'

export default function Sidebar() {
  return (
    <NewsletterSignup 
      variant="inline"
      showTitle={false}
      showDescription={false}
      formId="sidebar-newsletter-form-id"
    />
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'footer' \| 'inline'` | `'default'` | Visual variant of the component |
| `className` | `string` | `''` | Additional CSS classes |
| `showTitle` | `boolean` | `true` | Whether to show the component title |
| `showDescription` | `boolean` | `true` | Whether to show the description text |
| `formId` | `string` | `'newsletter-form'` | HubSpot form ID to use |

## Variants

### Default
- Gray background with rounded corners
- Full feature set with title, description, and benefits
- Suitable for standalone sections

### Footer
- Dark theme with semi-transparent background
- Designed for footer integration
- White text on dark background

### Inline
- White background with subtle border
- Compact design for sidebars or inline content
- Light shadow for visual separation

## HubSpot Setup

1. Create a newsletter subscription form in your HubSpot portal (26510736)
2. Copy the form ID from the HubSpot form embed code
3. Replace the `formId` prop with your actual form ID
4. The component will automatically use the correct portal ID

## Translation Keys

The component uses the following translation keys that should be defined in your `LanguageContext`:

```
newsletter.title
newsletter.description
newsletter.frequency
newsletter.privacy_note
newsletter.benefit1
newsletter.benefit2
newsletter.benefit3
newsletter.success.title
newsletter.success.description
```

## Styling

The component includes built-in responsive styling and automatically adapts to the chosen variant. Custom styling can be applied through the `className` prop.

## Test Page

A test page is available at `/test-newsletter` to preview all variants and test functionality.