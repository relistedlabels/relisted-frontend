import React, { useState } from "react";
import { Paragraph1 } from "@/common/ui/Text"; // Using your custom text component
import {
  HiOutlineHome,
  HiOutlineUsers,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineCreditCard,
  HiOutlineFolder,
  HiOutlineCog6Tooth,
  HiOutlineArrowRightOnRectangle,
} from "react-icons/hi2";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Kept framer-motion if you want smoother transitions later

// Define the structure of a navigation item
interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

// The list of menu items based on the image
const navItems: NavItem[] = [
  { id: "overview", label: "Overview", icon: HiOutlineHome },
  { id: "users", label: "Users", icon: HiOutlineUsers },
  { id: "listings", label: "Listings", icon: HiOutlineCube },
  { id: "orders", label: "Orders", icon: HiOutlineShoppingCart },
  { id: "wallet", label: "Wallet & Escrow", icon: HiOutlineCreditCard },
  { id: "dispute", label: "Dispute", icon: HiOutlineFolder },
  { id: "settings", label: "Settings", icon: HiOutlineCog6Tooth },
];

interface AdminSidebarProps {
  userAvatarUrl: string;
  userName: string;
  userRole: string;
  activePageId: string; // To highlight the currently selected item
  onNavigate: (id: string) => void; // Handler for menu clicks
  onLogout: () => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({
  userAvatarUrl,
  userName,
  userRole,
  activePageId,
  onNavigate,
  onLogout,
}) => {
  // State to control mobile menu expansion.
  // Default is false (collapsed/icons-only on mobile).
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  const toggleMobileMenu = () => setIsMobileExpanded(!isMobileExpanded);

  // Base styling for links
  const linkBaseClasses =
    "flex items-center w-full p-3 mb-2 rounded-xl transition-colors duration-200 cursor-pointer group";

  // Styling for active vs inactive states
  const activeLinkClasses = "bg-black -900 text-white shadow-sm";
  const inactiveLinkClasses =
    "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900";

  return (
    <div
      // Container: Fixed height, transition width.
      // Mobile: w-20 if collapsed, w-64 if expanded. Desktop: always w-72.
      className={`h-screen bg-white sm:py-[100px] border-r border-gray-200 flex flex-col py-6 transition-all duration-300 ease-in-out z-20
        ${
          isMobileExpanded
            ? "w-64 absolute lg:relative shadow-2xl lg:shadow-none"
            : "w-20 lg:w-62 relative"
        }`}
    >
      {/* --- Mobile Toggle Button (Hidden on Desktop) --- */}
      <div className="px-4 mb-4 lg:hidden flex justify-center lg:justify-start">
        <button
          onClick={toggleMobileMenu}
          className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle Menu"
        >
          {isMobileExpanded ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* --- User Profile Section --- */}
      <div
        className={`px-4 mb-6 transition-all duration-300 ${
          isMobileExpanded ? "opacity-100" : "opacity-100 lg:opacity-100"
        }`}
      >
        <div
          className={`flex items-center gap-4 ${
            !isMobileExpanded ? "justify-center lg:justify-start" : ""
          }`}
        >
          {/* Avatar */}
          <img
            src={userAvatarUrl}
            alt={userName}
            className="w-12 h-12 rounded-full object-cover shrink-0 border border-gray-200"
          />

          {/* User Details - Hidden on mobile unless expanded */}
          <div
            className={`${
              !isMobileExpanded ? "hidden lg:block" : "block"
            } overflow-hidden transition-all duration-300`}
          >
            <Paragraph1 className="text-sm font-bold text-black -900 truncate leading-tight">
              {userName}
            </Paragraph1>
            <Paragraph1 className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
              -{userRole}-
            </Paragraph1>
          </div>
        </div>
        {/* Divider */}
        <div
          className={`mt-6 h-px bg-gray-200 w-full ${
            !isMobileExpanded ? "hidden lg:block" : "block"
          }`}
        />
      </div>

      {/* --- Navigation Links --- */}
      <nav className="flex-1 px-4 overflow-y-auto hide-scrollbar scrollbar-hide">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = activePageId === item.id;
            return (
              <li key={item.id}>
                <div
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileExpanded(false); // Close menu on selection on mobile
                  }}
                  className={`${linkBaseClasses} ${
                    isActive ? activeLinkClasses : inactiveLinkClasses
                  } ${
                    !isMobileExpanded ? "justify-center lg:justify-start" : ""
                  }`}
                >
                  <item.icon
                    className={`w-6 h-6 shrink-0 ${
                      isActive
                        ? "text-white"
                        : "text-gray-500 group-hover:text-gray-900"
                    }`}
                  />

                  {/* Label - Hidden on mobile unless expanded */}
                  <Paragraph1
                    className={`ml-4 text-sm font-medium whitespace-nowrap transition-opacity duration-200
                      ${
                        !isMobileExpanded
                          ? "hidden lg:block opacity-0 lg:opacity-100"
                          : "block opacity-100"
                      }`}
                  >
                    {item.label}
                  </Paragraph1>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* --- Bottom Action (Log Out) --- */}
      <div className="px-4 absolute bottom-4 w-full  mt-auto">
        <div
          onClick={onLogout}
          // Using inactive classes by default for logout, but with red hover/icon
          className={`${linkBaseClasses} ${inactiveLinkClasses} hover:bg-red-50 hover:text-red-600 ${
            !isMobileExpanded ? "justify-center lg:justify-start" : ""
          }`}
        >
          <HiOutlineArrowRightOnRectangle
            className={`w-6 h-6 shrink-0 text-gray-500 group-hover:text-red-600`}
          />
          {/* Label - Hidden on mobile unless expanded */}
          <Paragraph1
            className={`ml-4 text-sm font-medium whitespace-nowrap transition-opacity duration-200
                  ${
                    !isMobileExpanded
                      ? "hidden lg:block opacity-0 lg:opacity-100"
                      : "block opacity-100"
                  }`}
          >
            Log Out
          </Paragraph1>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
