import { Metadata } from "next";
import Product from "@/types/ProductType";
import ProductsList from "@/app/_Components/ProductsList";
import { Suspense } from "react";
import Filter from "@/app/_Components/Filter";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse our collection of amazing products.",
};

export const revalidate = 15;
interface Props {
  searchParams: Promise<{ category?: string; search?: string }>;
}
export default async function Products({ searchParams }: Props) {
  const { category } = await searchParams;
  const filtereValue = category ?? "all";
  const { search } = await searchParams;
  const searchValue = search ?? "";

  console.log(filtereValue);
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Products</h1>
        <p className="text-lg font-light">
          Discover our wide range of products tailored to meet your needs.
        </p>
      </div>

      {/* Products Section */}
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
          Customers also purchased
        </h2>
        <Filter />

        {/* Suspense with Skeleton Loader */}
        <Suspense
          fallback={
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="h-48 bg-gray-200 animate-pulse rounded-lg"
                ></div>
              ))}
            </div>
          }
        >
          <ProductsList filtereValue={filtereValue} searchValue={searchValue} />
        </Suspense>
      </div>
    </div>
  );
}
