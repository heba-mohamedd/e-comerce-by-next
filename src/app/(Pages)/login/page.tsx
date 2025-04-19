import React from "react";
import SignInButton from "./../../_Components/SignInButton";
import SignInWithFacebook from "@/app/_Components/SignInWithFacebook";

export const metadata = {
  title: "login page",
};
function page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <SignInButton />
      <p className="text-gray-500">or</p>
      <SignInWithFacebook />
    </div>
  );
}

export default page;
