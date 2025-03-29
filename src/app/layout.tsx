import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_Components/NavBar/page";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          josefin.className +
          " min-h-screen flex flex-col relative bg-gray-800 "
        }
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
