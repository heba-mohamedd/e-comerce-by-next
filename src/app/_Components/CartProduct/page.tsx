import React from "react";
interface CartProductProps {
  image: string;
  title: string;
  rating: number;
  price: number;
}

function CartProduct({ image, title, rating, price }: CartProductProps) {
  return (
    <div>
      <img
        src={image}
        alt={title}
        className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
      />
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <span aria-hidden="true" className="absolute inset-0"></span>
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-500">⭐ {rating}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${price}</p>
      </div>
    </div>
  );
}

export default CartProduct;
