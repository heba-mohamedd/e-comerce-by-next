import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "@/lib/slice/cartSlice";
import { RootState } from "@/lib/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function CartItem({
  item,
}: {
  item: {
    id: number;
    imageUrl: string;
    name: string;
    quantity: number;
    price: number;
  };
}) {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

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
    <div className="flex items-center justify-between space-x-10 py-4 border-b border-gray-200">
      {/* Image Section */}
      <div className="w-1/4">
        <img
          className="w-full h-auto object-cover rounded-lg shadow-sm"
          src={item.imageUrl}
          alt={item.name}
        />
      </div>

      {/* Item Details Section */}
      <div className="flex-1 px-4">
        <h4 className="text-xl font-medium text-gray-700">{item.name}</h4>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{item.price} EGP</span>
          <span className="flex items-center text-gray-600">
            <i className="fas fa-star text-gray-600 mr-1"></i>
            {/* Placeholder rating */}
            4.5
          </span>
        </div>
        <p className="font-semibold text-gray-800 mt-2">
          Total Price: {Number((item.price * item.quantity).toFixed(2))} EGP
        </p>
      </div>

      {/* Quantity & Remove Section */}
      <div className="flex flex-col items-center w-1/4">
        <button
          onClick={() => handleRemove(item.id)}
          className="text-gray-600 hover:text-gray-800 text-sm font-medium mb-2"
        >
          <i className="fas fa-trash-alt"></i> Remove
        </button>
        <div className="flex items-center mt-2 space-x-2">
          <button
            onClick={() => handleIncrease(item.id)}
            className="bg-gray-200 text-gray-700 rounded-full p-2 hover:bg-gray-300"
          >
            +
          </button>
          <span className="text-lg font-medium text-gray-700">
            {item.quantity}
          </span>
          <button
            onClick={() => handleDecrease(item.id)}
            className="bg-gray-200 text-gray-700 rounded-full p-2 hover:bg-gray-300"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
