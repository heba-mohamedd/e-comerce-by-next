"use client";
import { signInAction } from "@/util/actions";

function SignInWithFacebook() {
  return (
    <form action={signInAction}>
      <button
        className="flex items-center gap-6 text-lg w-full sm:[300px] md:[400px] lg:[500px] xl:[600px] 2xl:[700px]
    border border-primary-300 rounded-lg px-4 py-2  hover:bg-gray-100 transition duration-300 ease-in-out"
      >
        <img
          src="/facebook-icon.png"
          alt="Google Icon"
          width={20}
          height={20}
        />
        <span>Sign in with FaceBook</span>
      </button>
    </form>
  );
}

export default SignInWithFacebook;
