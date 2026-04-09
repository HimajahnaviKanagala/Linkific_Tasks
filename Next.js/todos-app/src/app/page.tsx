export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
      <h1 className="text-5xl font-bold">Build Faster with Next.js</h1>
      <p className="text-gray-400 max-w-lg">
        A modern SaaS-style application with authentication, database, and
        real-time UI.
      </p>
      <a
        href="/dashboard"
        className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Go to Dashbaord
      </a>
    </div>
  );
}
