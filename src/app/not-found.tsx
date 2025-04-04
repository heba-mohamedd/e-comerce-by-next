import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-7xl font-bold text-red-500 animate-bounce">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Oops! Page Not Found</h2>
      <p className="text-gray-400 mt-2 text-center max-w-md">
        The page you are looking for does not exist. It might have been moved or
        deleted.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}
