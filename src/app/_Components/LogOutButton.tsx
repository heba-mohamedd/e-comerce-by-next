// "use client"; // This is a client component
import { signOutAction } from "@/util/actions";
// import { signOut } from "next-auth/react";
import React, { use } from "react";

function LogOutButton() {
  return (
    <form action={signOutAction}>
      <button
        type="submit"
        className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
      >
        Sign Out
      </button>
    </form>
  );
}

export default LogOutButton;
