import Product from "@/types/ProductType";
import Link from "next/link";
import React from "react";
import CardProduct from "./CardProduct/page";
import AddToCartButton from "./AddToCartButton";

interface Props {
  filtereValue: string;
}
async function ProductsList({ filtereValue }: Props) {
  const response = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await response.json();

  let filterProducts: Product[] = products;
  if (filtereValue === "all") filterProducts = products;
  else if (filtereValue === "electronics")
    filterProducts = products?.filter(
      (product) => product.category === "electronics"
    );
  else if (filtereValue === "jewelery")
    filterProducts = products?.filter(
      (product) => product.category === "jewelery"
    );
  else if (filtereValue === "men's clothing")
    filterProducts = products?.filter(
      (product) => product.category === "men's clothing"
    );
  else if (filtereValue === "women's clothing")
    filterProducts = products?.filter(
      (product) => product.category === "women's clothing"
    );

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {filterProducts?.map((product: Product) => (
        <div key={product.id} className=" relative">
          <CardProduct product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductsList;
