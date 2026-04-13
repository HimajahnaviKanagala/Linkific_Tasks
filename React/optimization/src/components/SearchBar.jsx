import React from "react";

const SearchBar = React.memo(({ value, onChange }) => {
  return (
    <div className="relative w-full">
      
      {/* Search Icon */}
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        🔍
      </span>

      {/* Input */}
      <input
        value={value}
        onChange={onChange}
        placeholder="Search products..."
        className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 shadow-sm 
        focus:ring-2 focus:ring-blue-400 focus:border-blue-400 
        outline-none transition duration-200"
      />

      {/* Clear Button */}
      {value && (
        <button
          onClick={() => onChange({ target: { value: "" } })}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          ✖
        </button>
      )}
    </div>
  );
});

export default SearchBar;