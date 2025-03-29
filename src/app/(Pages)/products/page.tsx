import CartProduct from "@/app/_Components/CartProduct/page";
import { ProductContext } from "@/app/_Components/Context/productContext";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default async function Products() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await response.json();
  console.log(products);

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Customers also purchased
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products?.map((product) => (
          <div key={product.id} className=" relative">
            <Link href={`products/${product.id}`}>
              <CartProduct
                image={product.image}
                title={product.title}
                rating={product.rating.rate}
                price={product.price}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
