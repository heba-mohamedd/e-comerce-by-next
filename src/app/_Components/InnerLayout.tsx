"use client";

import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { QueryClient } from "@tanstack/react-query";
import { Provider, useSelector } from "react-redux";
import { RootState, store } from "@/lib/store";
import ShoppingCart from "./ShoppingCart";
import SearchDropdown from "./SearchDropDown";

const queryClient = new QueryClient();

const items = [
  { path: "/", pageName: "Home" },
  { path: "/products", pageName: "Products" },
];
// Inner component to use hooks like useSelector

export default function InnerLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  const nav = [...items];
  // if (session?.user)
  //   nav.push({ pageName: "Logout", path: "/api/auth/signout" });

  if (!session?.user) nav.push({ pageName: "Login", path: "/login" });

  return (
    <div className="flex flex-col min-h-screen ">
      <header className="bg-blue-950 shadow-lg sticky top-0 z-50">
        <div className="flex items-center justify-between p-4 max-w-6xl mx-auto">
          <div className="text-3xl font-extrabold tracking-wide">
            <Link
              href="/"
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text hover:brightness-110 transition duration-300 ease-in-out"
            >
              H<span className="text-white drop-shadow-md">-</span>Shop
            </Link>
          </div>

          <nav className="flex space-x-6">
            {nav.map(({ pageName, path }) => (
              <Link
                key={path}
                href={path}
                className="relative font-medium text-white hover:text-indigo-300 transition duration-300 ease-in-out group"
              >
                {pageName}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <SearchDropdown />
            {session?.user?.image && (
              <Link href="/profile">
                <Image
                  src={session.user.image as string}
                  alt="User Profile"
                  width={50}
                  height={50}
                  className="rounded-full border-2 border-gray-300 hover:opacity-80 cursor-pointer"
                  priority
                />
              </Link>
            )}

            <ShoppingCart session={session} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>
    </div>
  );
}
