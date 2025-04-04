import Product from "@/types/ProductType";
import Image from "next/image";
import React from "react";
import AddToCartButton from "./../AddToCartButton";
import Link from "next/link";
interface Props {
  product: Product;
}

function CartProduct({ product }: Props) {
  return (
    product && (
      <div className="relative group">
        <div className="absolute top-2 right-2 z-10">
          <AddToCartButton product={product} />
        </div>

        <Link href={`products/${product.id}`}>
          <div>
            <img
              src={product.image}
              alt={product.title}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <span aria-hidden="true" className="absolute inset-0"></span>
                  {product.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  ⭐ {product.rating.rate}
                </p>
              </div>
              <p className="text-sm font-medium text-gray-900">
                ${product.price}
              </p>
            </div>
          </div>
        </Link>
      </div>
    )
  );
}

export default CartProduct;
