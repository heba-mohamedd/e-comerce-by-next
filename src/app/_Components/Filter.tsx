"use client";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useState } from "react";

const categories = [
  "men's clothing",
  "women's clothing",
  "electronics",
  "jewelery",
];

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  // console.log(searchParams);

  const [searchText, setSearchText] = useState(
    searchParams.get("search") || ""
  );

  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams);
    // console.log(params);

    if (filter === "all") {
      params.delete("category");
    } else {
      params.set("category", filter);
    }

    router.push(`?${params.toString()}`, { scroll: false });
  }

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);

    const params = new URLSearchParams(searchParams.toString());

    if (e.target.value.trim() === "") {
      params.delete("search");
    } else {
      params.set("search", e.target.value.trim());
    }

    router.push(`?${params.toString()}`);
  }

  return (
    <div className="flex justify-between bg-gray-100 rounded-md">
      <div className="flex space-x-2 p-4 ">
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

      <div className="flex space-x-2 p-4">
        <input
          type="text"
          placeholder="Search product name..."
          value={searchText}
          onChange={handleSearchChange}
          className="border p-2 rounded w-full max-w-sm"
        />
      </div>
    </div>
  );
}

export default Filter;
