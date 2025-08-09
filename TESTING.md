# Workflo IT Services Website Testing Infrastructure

## Overview
This testing suite covers multiple aspects of the Workflo IT Services website, ensuring comprehensive quality assurance across functional, performance, and user experience dimensions.

## Prerequisites
- Node.js 18+
- npm 9+

## Testing Tools
- Playwright: End-to-end and integration testing
- Jest: Unit and component testing
- Axe: Accessibility testing

## Available Test Scripts
- `npm run test:unit`: Run unit tests
- `npm run test:e2e`: Run end-to-end tests
- `npm run test:qa`: Run comprehensive QA tests
- `npm run test:ci`: Run all tests (unit, e2e, QA)

## Test Categories
1. **Comprehensive QA Tests**
   - Page load tests
   - Responsive design checks
   - Interactive element verification
   - SEO metadata validation
   - Performance metrics
   - Basic accessibility checks

2. **HubSpot Form Tests**
   - Contact form submission
   - Newsletter form submission
   - Form validation and integration

3. **RSS and Logos Tests**
   - RSS feed availability and structure
   - Company logos display and loading

## Running Tests
1. Development Environment:
   ```bash
   npm run dev  # Start development server
   npm run test:qa  # Run QA tests against dev server
   ```

2. Pre-deployment Checks:
   ```bash
   npm run typecheck  # TypeScript type checking
   npm run lint       # Code linting
   npm run test:ci    # Run comprehensive test suite
   ```

## Performance Benchmarks
- Page load time: < 5 seconds
- Interactive elements: Immediate response
- Accessibility: WCAG 2.1 AA compliance

## Troubleshooting
- Ensure all environment variables are set
- Check network connectivity
- Verify Playwright and browser dependencies

## Contributing
- Write tests for new features
- Update existing tests with new requirements
- Maintain high test coverage

## CI/CD Integration
Tests are automatically run on:
- Pull requests
- Merges to main branch
- Scheduled daily runs

## Known Limitations
- Some tests may require manual review
- Dynamic content might require periodic test updates