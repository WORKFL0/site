import { HomeIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <div className="text-6xl font-bold text-yellow-600 mb-4">404</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h1>
            <p className="text-sm text-gray-600 mb-6">
              Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or you might have entered the wrong URL.
            </p>
            
            <div className="space-y-3">
              <Link
                href="/"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
              >
                <HomeIcon className="w-4 h-4 mr-2" />
                Go Home
              </Link>
              
              <Link
                href="/services"
                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
              >
                <MagnifyingGlassIcon className="w-4 h-4 mr-2" />
                Browse Services
              </Link>
              
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-2">Popular Pages:</p>
                <div className="space-y-2">
                  <Link href="/contact" className="block text-yellow-600 hover:text-yellow-700 text-sm">
                    Contact Us
                  </Link>
                  <Link href="/about" className="block text-yellow-600 hover:text-yellow-700 text-sm">
                    About Workflo
                  </Link>
                  <Link href="/faq" className="block text-yellow-600 hover:text-yellow-700 text-sm">
                    FAQ
                  </Link>
                  <Link href="/calculator" className="block text-yellow-600 hover:text-yellow-700 text-sm">
                    Price Calculator
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}