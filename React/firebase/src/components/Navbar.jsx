import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-md">
      <h1 className="text-xl font-bold">Productivity Hub</h1>
      <div className="flex gap-6">
        <Link className="hover:text-blue-400" to="/">
          Dashboard
        </Link>
        <Link className="hover:text-blue-400" to="/chat">
          Chat
        </Link>
        <Link className="hover:text-blue-400" to="/todo">
          Todo
        </Link>
        <Link className="hover:text-blue-400" to="/blog">
          Blog
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
