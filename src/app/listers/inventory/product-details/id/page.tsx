import Breadcrumbs from "@/common/ui/BreadcrumbItem";
import DashboardLayout from "../../../components/DashboardLayout";
import ProductMediaGallery from "@/app/listers/components/ProductMediaGallery";
import InventoryItemDetailsHeader from "@/app/listers/components/InventoryItemDetailsHeader";
import ProductInfoTabs from "@/app/listers/components/ProductInfoTabs";
import RentalsHistory from "@/app/listers/components/RentalsHistory";
import ManageItemHeader from "@/app/listers/components/ManageItemHeader";

export default function Page() {
  const path = [
    { label: "Dashboard", href: "/listers/dashboard" },
    { label: "Inventory", href: "/listers/inventory" },
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
