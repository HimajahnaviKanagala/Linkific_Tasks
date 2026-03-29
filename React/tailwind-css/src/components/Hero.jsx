function Hero() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 text-center py-20 transition-colors">
      {/* Heading */}
      <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
        Build Faster With Tailwind
      </h2>

      {/* Subtext */}
      <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto">
        Utility-first CSS for rapid UI development
      </p>

      {/* Button */}
      <button
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg 
                         hover:bg-indigo-700 
                         dark:bg-indigo-500 dark:hover:bg-indigo-400 
                         transition"
      >
        Get Started
      </button>
    </section>
  );
}

export default Hero;
