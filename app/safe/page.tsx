'use client'

import Link from 'next/link'

export default function SafePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-black text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Workflo IT Support</h1>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Betrouwbare IT-oplossingen voor Amsterdamse Bedrijven</h2>
          <p className="text-lg text-gray-700 mb-6">
            Wij zijn uw lokale IT-partner die zorgt dat technologie voor u werkt, niet tegen u.
          </p>
          <div className="space-x-4">
            <Link href="/contact" className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500">
              Contact
            </Link>
            <Link href="/diensten" className="inline-block bg-gray-200 text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-300">
              Diensten
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Onze Diensten</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border p-4 rounded-lg">
              <h4 className="font-bold mb-2">Managed IT</h4>
              <p className="text-gray-600">Complete IT-ondersteuning voor uw bedrijf</p>
            </div>
            <div className="border p-4 rounded-lg">
              <h4 className="font-bold mb-2">Cloud Oplossingen</h4>
              <p className="text-gray-600">Microsoft 365 en cloud migraties</p>
            </div>
            <div className="border p-4 rounded-lg">
              <h4 className="font-bold mb-2">Cybersecurity</h4>
              <p className="text-gray-600">Bescherm uw bedrijf tegen digitale dreigingen</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Contact</h3>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="mb-2"><strong>Telefoon:</strong> 020-3080465</p>
            <p className="mb-2"><strong>Email:</strong> info@workflo.nl</p>
            <p className="mb-2"><strong>Adres:</strong> Koivistokade 3, 1013AC Amsterdam</p>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Debug Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="text-blue-600 hover:underline">Main Homepage (with all components)</Link></li>
            <li><Link href="/minimal" className="text-blue-600 hover:underline">Minimal Test Page</Link></li>
            <li><Link href="/debug" className="text-blue-600 hover:underline">Debug Page</Link></li>
            <li><Link href="/about" className="text-blue-600 hover:underline">About Page</Link></li>
            <li><Link href="/contact" className="text-blue-600 hover:underline">Contact Page</Link></li>
          </ul>
        </section>
      </main>
      
      <footer className="bg-gray-900 text-white p-4 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Workflo B.V. - Simple Safe Version</p>
        </div>
      </footer>
    </div>
  )
}