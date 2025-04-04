// "use client";
// import Product from "@/types/ProductType";
// import { usePathname } from "next/navigation";
// import React, { useEffect, useState } from "react";

// function ProductPage() {
//   const pathname = usePathname();
//   const id = pathname.split("/").pop();
//   const [product, setProduct] = useState<Product | null>(null);

//   useEffect(() => {
//     async function fetchProduct() {
//       const res = await fetch(`https://fakestoreapi.com/products/${id}`);
//       const data = await res.json();
//       setProduct(data);
//     }

//     fetchProduct();
//   }, [id]);

//   return (
//     product && (
//       <div className="flex sm:flex-row flex-col mx-auto justify-between p-[30px]">
//         <div>
//           <img
//             src={product.image}
//             alt={product.title}
//             className="mx-auto object-contain mb-[15px]"
//           />
//         </div>

//         <div className="flex flex-col items-center justify-center">
//           <h3 className="text-lg font-semibold text-gray-700 py-[20px]">
//             {product.title}
//           </h3>

//           <p className="mt-1 text-sm text-gray-500 py-[10px]">
//             ⭐ {product.rating?.rate} / 5 ({product.rating?.count} reviews)
//           </p>

//           <p className="text-md font-medium text-gray-900 py-[10px]">
//             ${product.price}
//           </p>

//           <p className="text-sm text-gray-700">{product.description}</p>
//         </div>
//       </div>
//     )
//   );
// }

// export default ProductPage;
/********************************************************************************* */
import TsxtExpander from "@/app/_Components/TsxtExpander";
import Product from "@/types/ProductType";
import { notFound } from "next/navigation";
import React from "react";
interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  if (!id || isNaN(Number(id))) {
    notFound();
  }
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      notFound();
    }
    const product: Product = await res.json();
    return (
      <div className="flex sm:flex-row flex-col mx-auto justify-between p-6">
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-64 h-64 object-contain mx-auto mb-4"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold text-gray-700 py-2">
            {product.title}
          </h3>

          <p className="text-gray-500 py-2">
            ⭐ {product.rating?.rate} / 5 ({product.rating?.count} reviews)
          </p>

          <p className="text-lg font-medium text-gray-900 py-2">
            ${product.price}
          </p>

          <p className="text-sm text-gray-700 text-center px-4 md:w-[700px] w-full">
            <TsxtExpander>{product.description}</TsxtExpander>
          </p>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="text-center text-red-500">Error loading product</div>
    );
  }
}
