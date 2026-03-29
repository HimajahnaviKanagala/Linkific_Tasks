function Card() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          key={item}
          className="p-6 bg-white dark:bg-gray-800 
                     border border-gray-200 dark:border-gray-700
                     shadow-sm hover:shadow-md 
                     rounded-lg transition"
        >
          {/* Title */}
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
            Card {item}
          </h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300">
            This is a sample card using Tailwind CSS.
          </p>
        </div>
      ))}
    </div>
  );
}

export default Card;
