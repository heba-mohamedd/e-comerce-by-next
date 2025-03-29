"use client";
import { useParams } from "next/navigation";
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
function page() {
  let { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data: Product = await res.json();
      setProduct(data);
    }
    fetchProduct();
  }, [id]);

  return (
    product && (
      <div className="flex flex-col mx-auto">
        <img
          src={product.image}
          alt={product.title}
          className="w-[400px] h-[500px] mx-auto object-contain mb-[15px]"
        />
        <div className="text-center ">
          <p>{product.description}</p>

          <h3 className="text-sm text-gray-700 py-[20px]">
            <span aria-hidden="true" className="absolute inset-0"></span>
            {product.title}
          </h3>
          <p className="mt-1 text-sm text-gray-500 py-[10]">
            ⭐ {product.rating?.rate}
          </p>

          <p className="text-sm font-medium text-gray-900 py-[10]">
            ${product.price}
          </p>
        </div>
      </div>
    )
  );
}

export default page;
