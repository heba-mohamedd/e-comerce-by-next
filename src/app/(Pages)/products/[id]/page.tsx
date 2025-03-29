"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

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

function ProductPage() {
  const pathname = usePathname();
  const id = pathname.split("/").pop();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    }

    fetchProduct();
  }, [id]);

  return (
    product && (
      <div className="flex sm:flex-row flex-col mx-auto justify-between p-[30px]">
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="mx-auto object-contain mb-[15px]"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold text-gray-700 py-[20px]">
            {product.title}
          </h3>

          <p className="mt-1 text-sm text-gray-500 py-[10px]">
            ⭐ {product.rating?.rate} / 5 ({product.rating?.count} reviews)
          </p>

          <p className="text-md font-medium text-gray-900 py-[10px]">
            ${product.price}
          </p>

          <p className="text-sm text-gray-700">{product.description}</p>
        </div>
      </div>
    )
  );
}

export default ProductPage;
