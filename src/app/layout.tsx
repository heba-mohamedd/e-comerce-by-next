import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_Components/NavBar/page";

import { Josefin_Sans } from "next/font/google";

import { auth } from "@/util/auth";
import NavWrapper from "./_Components/NavWrapper";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import Footer from "./_Components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const josefin = Josefin_Sans({ subsets: ["latin"] });
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth().catch((err) => {
    console.error("Auth Error:", err);
    return null;
  });
  return (
    // <ClerkProvider>
    <html lang="en">
      <body
        className={
          josefin.className +
          " min-h-screen flex flex-col relative bg-gray-800 "
        }
      >
        {/* <Navbar />
        {children} */}
        <SessionProvider session={session}>
          <NavWrapper session={session}>
            <ToastContainer />
            {children}
          </NavWrapper>
        </SessionProvider>
        <Footer />
      </body>
    </html>
    // </ClerkProvider>
  );
}
