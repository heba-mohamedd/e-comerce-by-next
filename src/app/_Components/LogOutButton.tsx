"use client"; // This is a client component
import { signOut } from "next-auth/react";
import React, { use } from "react";

function LogOutButton() {
  return (
    <button
      className="px-6 py-2 ml-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      Logout
    </button>
  );
}

export default LogOutButton;
