"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function NavLink({ name, path }: { name: string; path: string }) {
  let pathname = usePathname();
  return (
    <Link
      href={path}
      className={
        pathname === path
          ? "text-teal-400 py-2 underline"
          : "hover:text-teal-400 transition-colors text-white"
      }
    >
      {name}
    </Link>
  );
}

export default NavLink;
