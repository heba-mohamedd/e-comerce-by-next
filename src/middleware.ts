import { NextResponse } from "next/server";
import { auth } from "./util/auth";

export async function middleware(request: Request) {
  const session = await auth();

  if (!session?.user) {
    return Response.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/cart", "/profile"],
};
