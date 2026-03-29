function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-colors">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
          MyApp
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300">
          <a
            href="#"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 dark:text-gray-300">
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
