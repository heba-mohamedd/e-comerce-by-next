"use client";
import CartItem from "@/app/_Components/CartItem";
import { RootState } from "@/lib/store";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const getTotalPrice = () => {
    let total = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return Number(total.toFixed(2));
  };

  return (
    <div className="rounded-lg shadow-lg md:w-3/4 mx-auto my-8 mt-24 min-h-96">
      {cartItems.length > 0 ? (
        <>
          <div className="flex md:flex-col flex-wrap p-4">
            {cartItems.map((item, index) => (
              <div className="flex  mb-4 pb-4" key={`${item.id}-${index}`}>
                <CartItem item={item} />
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center p-4 bg-gray-50">
            <h5 className="text-lg font-medium text-gray-700 text-center py-2">
              Total Price: {getTotalPrice()} EGP
            </h5>
          </div>
        </>
      ) : (
        <h2 className="text-red-600 text-center text-2xl font-semibold">
          Cart Is Empty
        </h2>
      )}
    </div>
  );
};

export default page;
