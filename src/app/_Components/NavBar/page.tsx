// import { Image } from 'next/image';
import Logo from "./Logo";
import NavLink from "../NavLink";
import { auth } from "@/util/auth";
import Image from "next/image";
import { console } from "inspector";

const items = [
  { path: "/", pageName: "Home" },
  { path: "/products", pageName: "Products" },
];
async function Navbar() {
  const session = await auth();
  const nav = [...items];
  if (session?.user) {
    console.log(session.user);
    nav.push({ path: "/profile", pageName: "Profile" });
    nav.push({ path: "/cart", pageName: "Cart" });
    nav.push({ path: "/api/auth/signout", pageName: "Logout" });
  }
  if (!session?.user) {
    nav.push({ path: "/login", pageName: "Login" });
  }

  console.log(session);
  return (
    <header className="w-full bg-blue-950 z-20">
      <div className="container flex mx-auto justify-between items-center text-white">
        <Logo />
        <ul className="flex items-center gap-[30px] font-medium">
          {nav.map((item) => (
            <li key={item.path}>
              <NavLink name={item.pageName} path={item.path} />
            </li>
          ))}

          {session?.user ? (
            <li>
              <Image
                src={`${session?.user?.image}`}
                alt="icon"
                width={50}
                height={50}
                className=" rounded-full"
              />
            </li>
          ) : (
            " "
          )}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
