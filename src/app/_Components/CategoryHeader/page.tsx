"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const categoryPages = [
  { path: "/category/men", pageName: "Men" },
  { path: "/category/women", pageName: "Women" },
  { path: "/category/jewelery", pageName: "Jewelery" },
  { path: "/category/electronics", pageName: "Electronics" },
];

function Category() {
  let pathname = usePathname();

  return (
    <div className="container mx-auto bg-blue-900 font-medium rounded-3xl py-[20px]">
      <header>
        <ul className=" flex justify-around text-amber-50 text-3xl">
          {categoryPages.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={
                  pathname.startsWith(item.path)
                    ? "text-teal-400"
                    : "hover:text-teal-400 transition-colors text-white"
                }
              >
                {item.pageName}
              </Link>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default Category;
