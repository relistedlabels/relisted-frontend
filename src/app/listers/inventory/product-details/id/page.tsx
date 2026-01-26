import Breadcrumbs from "@/common/ui/BreadcrumbItem";
import DashboardLayout from "../../../components/DashboardLayout";
import ProductMediaGallery from "@/app/curators/components/ProductMediaGallery";
import InventoryItemDetailsHeader from "@/app/curators/components/InventoryItemDetailsHeader";
import ProductInfoTabs from "@/app/curators/components/ProductInfoTabs";
import RentalsHistory from "@/app/curators/components/RentalsHistory";
import ManageItemHeader from "@/app/curators/components/ManageItemHeader";

export default function Page() {
  const path = [
    { label: "Dashboard", href: "/curators/dashboard" },
    { label: "Inventory", href: "/curators/inventory" },
    { label: "Product", href: null }, // Current page, href is null
  ];
  return (
    <DashboardLayout>
      <div className=" mb-4 px-4 sm:px-0 ">
        <Breadcrumbs items={path} />{" "}
      </div>
      <div>
        <ManageItemHeader />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          {" "}
          <ProductMediaGallery />
        </div>

        <div>
          <InventoryItemDetailsHeader />
          <ProductInfoTabs />
        </div>
      </div>
      <div>
        <RentalsHistory />
      </div>
    </DashboardLayout>
  );
}
