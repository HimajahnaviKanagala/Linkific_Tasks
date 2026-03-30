import debounce from "lodash/debounce";
import { useMemo } from "react";

function Search({ setQuery }) {
  const handleSearch = useMemo(
    () =>
      debounce((value) => {
        setQuery(value);
      }, 500),
    [],
  );

  return (
    <input
      className="search"
      placeholder="Search users..."
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
}
export default Search;
