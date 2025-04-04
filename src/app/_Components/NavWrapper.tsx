"use client";

import Link from "next/link";
import Image from "next/image";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider, useSelector } from "react-redux";
import { RootState, store } from "@/lib/store";

const queryClient = new QueryClient();

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
];

// Inner component to use hooks like useSelector
function InnerLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  const nav = [...navLinks];
  if (session?.user) nav.push({ name: "Logout", path: "/api/auth/signout" });

  // Get number of items in cart from Redux
  const cartItemsCount = useSelector((state: RootState) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  //   const wishlistCount = useSelector(
  //     (state: RootState) => state.wishlist.items.length
  //   );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="flex items-center justify-between p-4 max-w-6xl mx-auto">
          <div className="text-2xl font-bold text-gray-800 tracking-wider">
            <Link href="/">Ecommerce</Link>
          </div>

          <nav className="flex space-x-6">
            {nav.map(({ name, path }) => (
              <Link
                key={path}
                href={path}
                className="text-gray-800 hover:text-gray-600 font-medium"
              >
                {name}
              </Link>
            ))}
          </nav>

          {/* User & Cart */}
          <div className="flex items-center space-x-4">
            {session?.user?.image && (
              <Image
                src={session.user.image}
                alt="User Profile"
                width={30}
                height={30}
                className="rounded-full border-2 border-gray-300 hover:opacity-80 cursor-pointer"
                priority
              />
            )}

            <Link
              href="/cart"
              className="text-gray-800 hover:text-gray-600 relative"
            >
              <FaShoppingCart size={24} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            <Link href="/profile" className="text-gray-800 hover:text-gray-600">
              <FaUser size={24} />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 shadow-lg">
        <div className="container mx-auto">
          <div className="text-center">
            <span className="text-lg font-semibold">
              &copy; {new Date().getFullYear()} Ecommerce. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Wrap with both Redux and React Query Providers
export default function NavWrapper({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <InnerLayout session={session}>{children}</InnerLayout>
      </QueryClientProvider>
    </Provider>
  );
}
