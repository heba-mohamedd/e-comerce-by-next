"use client";

import React from "react";

interface Props {
  error: Error;
}

export default function ErrorPage({ error }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-semibold text-gray-700">
        Something went wrong
      </h1>
      <p className="text-md text-gray-500 mt-2">{error.message}</p>
    </div>
  );
}
