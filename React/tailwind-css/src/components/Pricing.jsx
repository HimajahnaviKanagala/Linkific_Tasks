function Pricing() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {["Basic", "Pro", "Premium"].map((plan, index) => (
        <div
          key={plan}
          className={`p-6 rounded-lg text-center transition
            bg-white dark:bg-gray-800
            border border-gray-200 dark:border-gray-700
            shadow-sm hover:shadow-md
            ${index === 1 ? "scale-105 border-indigo-500" : ""}
          `}
        >
          {/* Plan Name */}
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {plan}
          </h3>

          {/* Price */}
          <p className="my-4 text-3xl font-semibold text-gray-800 dark:text-gray-200">
            $10
          </p>

          {/* Features */}
          <ul className="text-gray-600 dark:text-gray-300 mb-6 space-y-2">
            <li>✔ Feature One</li>
            <li>✔ Feature Two</li>
            <li>✔ Feature Three</li>
          </ul>

          {/* Button */}
          <button
            className={`px-6 py-3 rounded-lg text-white transition
              ${
                index === 1
                  ? "bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400"
                  : "bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600"
              }
            `}
          >
            Choose Plan
          </button>
        </div>
      ))}
    </div>
  );
}

export default Pricing;
