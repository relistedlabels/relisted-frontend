"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import Breadcrumbs from "@/common/ui/BreadcrumbItem";

import { useGetProductById } from "@/lib/queries/product/useGetProductById";
import { useProductDraftStore } from "@/store/useProductDraftStore";
import DashboardLayout from "@/app/listers/components/DashboardLayout";
import EditProductHeader from "@/app/listers/components/EditProductHeader";
import { ItemImageUploader } from "@/app/listers/components/ItemImageUploader";
import { BasicInformationForm } from "@/app/listers/components/BasicInformationForm";
import { TagSelector } from "@/app/listers/components/TagSelector";
import { ItemDescription } from "@/app/listers/components/ItemDescription";

export default function Page() {
  const params = useParams();
  const router = useRouter();
  const productId = params.id as string;

  const { data: product, isPending, isError } = useGetProductById(productId);
  const populateFromProduct = useProductDraftStore(
    (state) => state.populateFromProduct,
  );
  const reset = useProductDraftStore((state) => state.reset);

  useEffect(() => {
    if (product) {
      populateFromProduct(product);
    }

    return () => {
      reset();
    };
  }, [product, populateFromProduct, reset]);

  if (isError) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <p className="text-red-500 mb-4">Failed to load product</p>
            <button
              onClick={() => router.back()}
              className="px-4 py-2 bg-[#33332D] text-white rounded-lg"
            >
              Go Back
            </button>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  const path = [
    { label: "Dashboard", href: "/listers/dashboard" },
    { label: "Inventory", href: "/listers/inventory" },
    { label: "Edit Item", href: null },
  ];

  return (
    <DashboardLayout>
      <div className="mb-4  ">
        <Breadcrumbs items={path} />
      </div>

      {isPending ? (
        <div className="flex items-center justify-center h-96">
          <p>Loading product details...</p>
        </div>
      ) : (
        <>
          <div>
            <EditProductHeader productName={product?.name} />
          </div>
          <div>
            <ItemImageUploader />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <BasicInformationForm />
            <div className="space-y-4">
              <TagSelector />
              <ItemDescription />
            </div>
          </div>
        </>
      )}
    </DashboardLayout>
  );
}
