"use client";

import Product from "@/types/ProductType";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function SearchDropdown() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredResults([]);
    } else {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredResults(filtered);
    }
  }, [searchTerm, products]);

  //   useEffect(() => {
  //     if (searchTerm.trim().length < 2) {
  //       setFilteredResults([]);
  //       return;
  //     }

  //     const filtered = products.filter((product) =>
  //       product.title.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //     setFilteredResults(filtered);
  //   }, [searchTerm, products]);

  return (
    <div className="relative w-full max-w-xs ml-auto">
      <input
        type="text"
        placeholder="Search product name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-3 py-2 border bg-gray-300 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {filteredResults.length > 0 && (
        <ul className="absolute z-20 w-full bg-white border border-gray-300 rounded-lg mt-2 max-h-64 overflow-y-auto shadow-md">
          {filteredResults.map((item) => (
            <li key={item.id}>
              <Link
                href={`/products/${item.id}`}
                onClick={() => setSearchTerm("")}
                className="flex items-center gap-4 p-2 hover:bg-blue-100 transition-colors duration-150"
              >
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain rounded"
                  />
                </div>
                <div className="text-sm">
                  <p className="font-medium text-gray-800 line-clamp-1">
                    {item.title}
                  </p>
                  <p className="text-gray-500">${item.price}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
