function Contact() {
  return (
    <form
      className="max-w-lg mx-auto p-6 space-y-4 
                     bg-white dark:bg-gray-800 
                     border border-gray-200 dark:border-gray-700 
                     rounded-lg shadow-sm transition"
    >
      {/* Title */}
      <h2 className="text-2xl text-center font-bold text-gray-900 dark:text-white">
        Contact Form
      </h2>

      {/* Name */}
      <input
        type="text"
        placeholder="Name"
        className="w-full p-3 rounded border 
                   border-gray-300 dark:border-gray-600
                   bg-white dark:bg-gray-700
                   text-gray-900 dark:text-white
                   focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 rounded border 
                   border-gray-300 dark:border-gray-600
                   bg-white dark:bg-gray-700
                   text-gray-900 dark:text-white
                   focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
      />

      {/* Message */}
      <textarea
        placeholder="Message"
        rows="4"
        className="w-full p-3 rounded border 
                   border-gray-300 dark:border-gray-600
                   bg-white dark:bg-gray-700
                   text-gray-900 dark:text-white
                   focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
      />

      {/* Button */}
      <button
        className="w-full bg-indigo-600 text-white py-3 rounded-lg 
                   hover:bg-indigo-700 
                   dark:bg-indigo-500 dark:hover:bg-indigo-400 
                   transition"
      >
        Send Message
      </button>
    </form>
  );
}

export default Contact;
