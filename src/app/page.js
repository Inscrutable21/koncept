export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Koncept Global Books
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your trusted partner in educational excellence
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pre-K Learning</h3>
              <p className="text-gray-600">Foundation building for early learners</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Primary Education</h3>
              <p className="text-gray-600">Comprehensive curriculum for ages 6-12</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secondary Learning</h3>
              <p className="text-gray-600">Advanced concepts for teens</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}