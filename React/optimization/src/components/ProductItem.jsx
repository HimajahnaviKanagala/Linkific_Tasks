import React from "react";

const ProductItem = React.memo(({ product }) => {
  return (
    <div className="flex items-center mb-2 gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-lg hover:scale-[1.02] transition duration-300 border border-gray-100">
      <div className="flex-shrink-0">
        <img
          src="/images/sample.webp"
          alt="product"
          loading="lazy"
          className="w-16 h-16 object-cover rounded-xl"
        />
      </div>

      <div className="flex flex-col">
        <p className="text-gray-800 font-semibold leading-snug line-clamp-2">
          {product.title}
        </p>
        <span className="text-sm text-gray-400 mt-1">
          Product ID: #{product.id}
        </span>
      </div>
    </div>
  );
});

export default ProductItem;
