import LogOutButton from "@/app/_Components/LogOutButton";
import { auth } from "@/util/auth";
import { getToken } from "next-auth/jwt";
import { signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";

async function ProfilePage() {
  const session = await auth();

  // console.log(session?.user?.id);
  if (!session) {
    return (
      <div className="flex items-center justify-center min-h-screen p-6">
        <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg text-center transform transition duration-500 hover:scale-105">
          <h1 className="text-3xl font-extrabold text-gray-800 mt-4">
            Please Login
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen  p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg text-center transform transition duration-500 hover:scale-105">
        <Image
          src={session?.user?.image || "/default-avatar.png"}
          alt="Profile Picture"
          width={120}
          height={120}
          className="mx-auto rounded-full border-4 border-blue-500 shadow-md"
        />

        <h1 className="text-3xl font-extrabold text-gray-800 mt-4">
          {session?.user?.name || "Guest User"}
        </h1>

        <p className="text-gray-600 text-lg mt-2">
          📧 {session?.user?.email || "No email provided"}
        </p>

        <div className="mt-6">
          <LogOutButton />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
