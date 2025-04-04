import NotFound from "@/app/not-found";
import Product from "@/types/ProductType";

interface Props {
  params: Promise<{ productid: string }>;
}

export async function GET(request: Request, { params }: Props) {
  const { productid } = await params;

  const response = await fetch(
    `https://fakestoreapi.com/products/${Number(productid)}`
  );

  const product: Product = await response.json();
  return Response.json(product, { status: 200 });
}
