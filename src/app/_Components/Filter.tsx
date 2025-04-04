"use client";
import { useSearchParams, useRouter } from "next/navigation";
import React from "react";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams);

    if (filter === "all") {
      params.delete("category");
    } else {
      params.set("category", filter);
    }

    router.push(`?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex space-x-2 p-4 bg-gray-100 rounded-md">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => handleFilter("all")}
      >
        All
      </button>
      <button
        className="px-4 py-2 bg-gray-200 rounded"
        onClick={() => handleFilter("electronics")}
      >
        Electronics
      </button>
      <button
        className="px-4 py-2 bg-gray-200 rounded"
        onClick={() => handleFilter("jewelery")}
      >
        Jewelery
      </button>
      <button
        className="px-4 py-2 bg-gray-200 rounded"
        onClick={() => handleFilter("men's clothing")}
      >
        Men
      </button>
      <button
        className="px-4 py-2 bg-gray-200 rounded"
        onClick={() => handleFilter("women's clothing")}
      >
        Women
      </button>
    </div>
  );
}

export default Filter;
