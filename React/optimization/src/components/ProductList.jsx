import { useCallback, useEffect, useMemo, useState } from "react";
import useDebounce from "../hook/useDebounce";
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { FixedSizeList as List } from "react-window";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((p) =>
      p.title.toLowerCase().includes(debouncedSearch.toLowerCase()),
    );
  }, [products, debouncedSearch]);

  const Row = ({ index, style }) => {
    const product = filteredProducts[index];

    return (
      <div style={style} className="px-2 py-2">
        <ProductItem product={product} />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      {/* Container */}
      <div className="max-w-3xl mx-auto">
        {/* Search Card */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <SearchBar value={search} onChange={handleSearch} />

          {/* Result Count */}
          <p className="text-sm text-gray-400 mt-2">
            Showing {filteredProducts.length} results
          </p>
        </div>

        {/* List Container */}
        <div className="mt-6 bg-white rounded-2xl shadow-lg p-4">
          <List
            height={500}
            itemCount={filteredProducts.length}
            itemSize={110}
            width="100%"
          >
            {Row}
          </List>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-400 mt-6">
          ⚡ Performance optimized with virtualization
        </p>
      </div>
    </div>
  );
}

export default ProductList;
