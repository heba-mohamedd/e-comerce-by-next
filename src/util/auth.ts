import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account }: { token: any; account: any }) {
      // When the user signs in, the account object contains provider-specific data
      if (account) {
        token.provider = account.provider; // e.g., "google" or "facebook"
        token.providerId =
          account.provider === "google" ? account.sub : account.id; // Google uses sub, Facebook uses id
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      // Pass the provider ID to the session object
      session.provider = token.provider;
      session.providerId = token.providerId;
      return session;
    },
    authorized({ auth, request }: { auth: any; request: any }) {
      return !!auth?.user;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
