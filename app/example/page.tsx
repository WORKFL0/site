import { sanityClient } from '@/lib/sanity'

// Example of how to fetch data from Sanity
async function getExampleData() {
  try {
    // Example GROQ query - this will work once you have content in Sanity
    const data = await sanityClient.fetch(`
      *[_type == "page"] {
        _id,
        title,
        content
      }
    `)
    return data
  } catch (error) {
    console.error('Error fetching from Sanity:', error)
    return []
  }
}

export default async function ExamplePage() {
  const data = await getExampleData()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Sanity CMS Integration Example</h1>
      
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-3">Configuration Status</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          ✅ Sanity client configured<br/>
          ✅ Environment variables loaded<br/>
          📝 Add content in <a href="/studio" className="text-blue-500 hover:underline">/studio</a> to see it here
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">Example Content from Sanity</h2>
        {data.length > 0 ? (
          <div className="space-y-4">
            {data.map((item: any) => (
              <div key={item._id} className="border p-4 rounded">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">
            No content found. Create some content in the <a href="/studio" className="text-blue-500 hover:underline">Sanity Studio</a>.
          </p>
        )}
      </div>
    </div>
  )
}