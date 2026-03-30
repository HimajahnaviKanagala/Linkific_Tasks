import { useState } from "react";
import Search from "./components/Search";
import UserList from "./components/UserList";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="app">
      <h1>Lodash Dashboard</h1>
      <Search setQuery={setQuery} />
      <UserList query={query} />
    </div>
  );
}
export default App;
