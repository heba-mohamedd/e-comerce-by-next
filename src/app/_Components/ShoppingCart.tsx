"use client";
import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

function ShoppingCart({ session }: any) {
  // Get number of items in cart from Redux
  const cartItemsCount = useSelector((state: RootState) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );
  return (
    <div>
      {session?.user && (
        <Link
          href="/cart"
          className="text-white hover:text-gray-300 relative transition duration-300 ease-in-out"
        >
          <FaShoppingCart size={24} />
          {cartItemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md">
              {cartItemsCount}
            </span>
          )}
        </Link>
      )}
    </div>
  );
}

export default ShoppingCart;
