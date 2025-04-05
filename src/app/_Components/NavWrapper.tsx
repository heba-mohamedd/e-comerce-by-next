"use client";
import { store } from "@/lib/store";
import { Provider } from "react-redux";
import InnerLayout from "./InnerLayout";

// Wrap with both Redux and React Query Providers
export default function NavWrapper({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <Provider store={store}>
      <InnerLayout session={session}>{children}</InnerLayout>
    </Provider>
  );
}
