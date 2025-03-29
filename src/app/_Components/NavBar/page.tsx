"use client";
import Link from "next/link";
// import { Image } from 'next/image';
import Logo from "./Logo";
import { usePathname } from "next/navigation";

const items = [
  { path: "/", pageName: "Home" },
  { path: "/products", pageName: "Products" },
  { path: "/category", pageName: "Category" },
];
function Navbar() {
  let pathname = usePathname();
  return (
    <header className="w-full bg-blue-950 z-20">
      <div className="container flex mx-auto justify-between items-center text-white">
        <Logo />
        <ul className="flex items-center gap-[30px] font-medium">
          {items.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={
                  pathname === item.path
                    ? "text-teal-400"
                    : "hover:text-teal-400 transition-colors text-white"
                }
              >
                {item.pageName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
