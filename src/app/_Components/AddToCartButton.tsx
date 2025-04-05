"use client";

import { addToCart } from "@/lib/slice/cartSlice";
import Product from "@/types/ProductType";
import { auth } from "@/util/auth";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

interface Props {
  product: Product;
}

const AddToCartButton: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        imageUrl: product.image,
        name: product.title,
        price: product.price,
      })
    );
    // Optional: toast notification
    toast.success("Product added to Cart!", {
      position: "bottom-center",
      autoClose: 2000,
    });
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-blue-950 hover:bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-200 ease-in-out"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
