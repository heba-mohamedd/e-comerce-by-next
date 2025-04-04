"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Link from "next/link";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "@/lib/slice/cartSlice";
import { RootState } from "@/lib/store";

const page = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    let total = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return Number(total.toFixed(2));
  };

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrease = (id: number) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrease = (id: number) => {
    dispatch(decrementQuantity(id));
  };

  return (
    <div className="rounded-lg shadow-lg md:w-3/4 mx-auto my-8 mt-24 min-h-96">
      {cartItems.length > 0 ? (
        <>
          <div className="flex md:flex-col flex-wrap p-4">
            {cartItems.map((item, index) => (
              <div
                className="flex border-b mb-4 pb-4"
                key={`${item.id}-${index}`}
              >
                <div className="w-1/4">
                  <img
                    className="w-full h-auto object-cover"
                    src={item.imageUrl}
                    alt={item.name}
                  />
                </div>
                <div className="flex-1 px-4 mt-2">
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                  <div className="flex justify-between">
                    <span>{item.price} EGP</span>
                    <span className="flex items-center text-yellow-500">
                      <i className="fas fa-star text-yellow-500 mr-1"></i>
                      {/* Placeholder rating */}
                      4.5
                    </span>
                  </div>
                  <p className="font-bold text-purple-700">
                    Total Price:{" "}
                    {Number((item.price * item.quantity).toFixed(2))} EGP
                  </p>
                </div>
                <div className="flex flex-col justify-between items-center w-1/4">
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <i className="fas fa-trash-alt"></i> Remove
                  </button>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleIncrease(item.id)}
                      className="bg-gray-300 rounded px-2"
                    >
                      +
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => handleDecrease(item.id)}
                      className="bg-gray-300 rounded px-2"
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center p-4 bg-gray-100">
            <h5 className="text-lg font-bold text-purple-700 text-center py-2">
              Total Price: {getTotalPrice()} EGP
            </h5>
          </div>
        </>
      ) : (
        <h2 className="text-center text-2xl font-semibold">
          No items exist in this cart
        </h2>
      )}
    </div>
  );
};

export default page;
