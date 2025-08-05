export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Workflo</h1>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Your IT Should <span className="text-yellow-400">Drive Growth</span>, Not Hold You Back
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Amsterdam's SMEs trust Workflo to transform their IT from a cost center into a growth engine. 
            Reduce IT costs by 35% while increasing productivity.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Cloud Services</h3>
            <p className="text-gray-600">Reduce IT costs by 35% with smart cloud solutions.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Cybersecurity</h3>
            <p className="text-gray-600">24/7 monitoring and response to protect your business.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Managed IT</h3>
            <p className="text-gray-600">Focus on growth while we handle your IT.</p>
          </div>
        </section>

        <section className="text-center bg-yellow-400 text-black p-16 rounded-lg">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your IT?</h2>
          <p className="text-xl mb-8">Start with our free IT assessment</p>
          <a href="/tevredenheidscheck" className="inline-block bg-black text-yellow-400 px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition">
            Start Assessment
          </a>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Workflo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}