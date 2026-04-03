/**
 * @deprecated Replaced by src/pages/marketing/AboutPage.tsx (routed at "/about").
 * Kept for reference. Do not route to this component.
 */
function About() {
  return (
    <div className="px-4 py-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">About Page</h1>
      <p className="text-lg text-gray-600 mb-6">
        This is the about page demonstrating routing with React Router.
      </p>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Tech Stack
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-700">Frontend Framework</h3>
            <p className="text-gray-600">
              React 18 with TypeScript for type safety
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Routing</h3>
            <p className="text-gray-600">
              React Router v6 for client-side routing
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Styling</h3>
            <p className="text-gray-600">
              Tailwind CSS for utility-first styling
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Build Tool</h3>
            <p className="text-gray-600">Vite for lightning-fast development</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
