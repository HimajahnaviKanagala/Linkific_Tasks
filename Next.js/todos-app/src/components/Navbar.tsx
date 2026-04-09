"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 p-6 flex flex-col justify-between">
      {/* Top Section */}
      <div>
        <h1 className="text-xl font-bold mb-6">My Todos App </h1>

        <nav className="flex flex-col gap-3">
          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>

          <Link href="/dashboard" className="hover:text-blue-400">
            Dashboard
          </Link>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="mt-6">
        {status === "loading" && <p className="text-gray-400">Loading...</p>}

        {status === "unauthenticated" && (
          <Link
            href="/login"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-center block"
          >
            Login
          </Link>
        )}

        {status === "authenticated" && (
          <div className="flex flex-col gap-3">
            <p className="text-sm text-gray-400">{session.user?.name}</p>

            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
