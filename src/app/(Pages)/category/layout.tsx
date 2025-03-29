import ProductContextProvider from "@/app/_Components/Context/productContext";
import Category from "../../_Components/CategoryHeader/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProductContextProvider>
      <Category />
      {children}
    </ProductContextProvider>
  );
}
