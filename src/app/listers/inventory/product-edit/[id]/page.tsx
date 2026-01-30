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

  // ✅ Query product by ID
  const { data: product, isPending, isError } = useGetProductById(productId);

  // ✅ Draft store actions
  const populateFromProduct = useProductDraftStore(
    (state) => state.populateFromProduct,
  );
  const reset = useProductDraftStore((state) => state.reset);

  // ✅ Clear store on mount, populate when product loads
  useEffect(() => {
    reset(); // Clear old draft data
  }, [reset, productId]); // Reset when product ID changes

  // ✅ Populate store when product data arrives
  useEffect(() => {
    if (product) {
      console.log("📦 Loading product into draft store:", product);
      populateFromProduct(product);
    }
  }, [product, populateFromProduct]);

  // ✅ Cleanup: Clear store on unmount
  useEffect(() => {
    return () => {
      console.log("🧹 Cleaning up draft store");
      reset();
    };
  }, [reset]);

  if (isError) {
    return (
      <DashboardLayout>
        <div className="flex flex-col items-center justify-center h-96 gap-4">
          <div className="text-center">
            <p className="text-red-500 font-semibold mb-2">
              Failed to load product
            </p>
            <p className="text-gray-600 text-sm mb-4">
              The product may have been deleted or you don't have access to it.
            </p>
            <button
              onClick={() => router.back()}
              className="px-4 py-2 bg-[#33332D] text-white rounded-lg hover:bg-black transition"
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
      <div className="mb-4">
        <Breadcrumbs items={path} />
      </div>

      {isPending ? (
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-black mb-4"></div>
            <p className="text-gray-600">Loading product details...</p>
          </div>
        </div>
      ) : product ? (
        <>
          {/* Product Header with Save Button */}
          <div>
            <EditProductHeader productName={product?.name} />
          </div>

          {/* Image Upload Section */}
          <div className="mt-6">
            <ItemImageUploader />
          </div>

          {/* Form Sections - Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2">
              <BasicInformationForm />
            </div>

            {/* Right Column - Tags & Description */}
            <div className="space-y-4">
              <TagSelector />
              <ItemDescription />
            </div>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-96">
          <p className="text-gray-500">No product data available</p>
        </div>
      )}
    </DashboardLayout>
  );
}
