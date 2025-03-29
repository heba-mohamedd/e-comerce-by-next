import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src="/vercel.svg"
        alt="logo"
        width={60}
        height={60}
        className="object-contain py-[20px]"
      />
    </Link>
  );
}
