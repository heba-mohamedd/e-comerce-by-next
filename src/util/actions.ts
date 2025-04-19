"use server";
import { signIn, signOut } from "./auth";

export async function signInAction() {
  await signIn("google", {
    redirectTo: "/profile",
  });
}
export async function signInFacebookAction() {
  await signIn("facebook", {
    redirectTo: "/profile",
  });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
