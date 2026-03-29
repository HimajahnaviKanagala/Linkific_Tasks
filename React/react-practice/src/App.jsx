import BlogList from "./components/BlogList";
import ProductList from "./components/ProductList";
import UserCard from "./components/UserCard";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Navbar />
      <h1>React Components Practice</h1>
      <Card>
        <h2>Hello</h2>
        <p>This is inside the Card Component</p>
      </Card>
      <UserCard name="Hima" age="22" role="Frontend developer" />
      <ProductList />
      <BlogList />
    </>
  );
}
export default App;
