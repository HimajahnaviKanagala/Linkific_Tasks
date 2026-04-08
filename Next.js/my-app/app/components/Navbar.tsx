"use client";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex bg-black text-white shadow-md px-6 py-4 gap-6">
      <Link href="/" className="font-semibold hover:text-blue-500">
        Home
      </Link>
      <Link href="/about" className="hover:text-blue-500">
        About
      </Link>
      <Link href="/blog" className="hover:text-blue-500">
        Blog
      </Link>
    </nav>
  );
}
export default Navbar;
