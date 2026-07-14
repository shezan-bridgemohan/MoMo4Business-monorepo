import { useState, type MouseEvent } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ChevronDown,
  ChevronLeft,
  FileCheck2,
  FileText,
  HandCoins,
  Headset,
  Home,
  Landmark,
  LogOut,
  ShieldCheck,
  User,
} from "lucide-react";

interface MenuSection {
  key: string;
  label: string;
  icon: LucideIcon;
  items: string[];
}

export default function Sidebar() {
  const menuSections: MenuSection[] = [
    {
      key: "transfer",
      label: "Transfer",
      icon: Landmark,
      items: ["MoMo to Bank", "Wallet Transfer"],
    },
    {
      key: "transact",
      label: "Transact",
      icon: HandCoins,
      items: ["Recharge", "Get Paid", "Make Payment"],
    },
    {
      key: "approvals",
      label: "Approvals",
      icon: FileCheck2,
      items: ["Single Transactions", "Bulk Transactions"],
    },
  ];

  // 1. Core structural state for full-width collapse
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Track open state for each dropdown sub-menu
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>(
    Object.fromEntries(menuSections.map(({ key }) => [key, false])),
  );

  const toggleMenu = (menuKey: string, e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Auto-expand the sidebar if a user tries to open a menu while minimized
    if (isCollapsed) {
      setIsCollapsed(false);
    }
    setOpenMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };

  return (
    <aside
      /* Dynamic dynamic layout configurations width: w-64 vs w-20 */
      className={`bg-surface-default flex flex-col justify-between px-3 py-4 relative border-r border-border-default transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-[80px]" : "w-[270px]"
      }`}
    >
      {/* Flight Control Toggle button: added active onClick behavior and indicator rotation dynamics */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`absolute -right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-surface-default border border-border-default flex items-center justify-center shadow-momo-sm text-text-secondary hover:text-momo-blue text-xs z-50 transition-transform duration-300 ${
          isCollapsed ? "rotate-180" : ""
        }`}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <div className="space-y-6 overflow-x-hidden">
        <nav className="space-y-4">
          {/* Static Home Link */}
          <button
            type="button"
            className="flex items-center bg-momo-sidebarActive text-white px-4 py-3 rounded-xl momo-typo-label-lg h-12"
          >
            <div className="flex items-center gap-3 min-w-max">
              <Home className="w-5 h-5" />
              <span
                className={`transition-opacity duration-200 ${isCollapsed ? "opacity-0 pointer-events-none w-0" : "opacity-100"}`}
              >
                Home
              </span>
            </div>
          </button>

          {/* Collapsible Dropdown Sections */}
          {menuSections.map((section) => {
            const isOpen = !!openMenus[section.key];
            const Icon = section.icon;

            return (
              <div key={section.key} className="flex flex-col">
                <button
                  onClick={(e) => toggleMenu(section.key, e)}
                  className={`flex items-center justify-between w-full text-text-default px-4 py-3 hover:bg-surface-secondary rounded-xl momo-typo-body-md transition-colors text-left h-12 ${
                    isOpen && !isCollapsed ? "bg-surface-secondary" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-max">
                    <Icon className="w-5 h-5" />
                    <span
                      className={`transition-opacity duration-200 ${isCollapsed ? "opacity-0 pointer-events-none w-0" : "opacity-100"}`}
                    >
                      {section.label}
                    </span>
                  </div>
                  <span
                    className={`text-[10px] opacity-60 transition-all duration-200 ${
                      isCollapsed ? "scale-0 opacity-0" : ""
                    } ${isOpen ? "rotate-180 text-momo-blue" : ""}`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {/* Animated Dropdown Menu Panel Container: Hidden natively when side status is collapsed */}
                <div
                  className={`grid transition-all duration-200 ease-in-out pl-10 ${
                    isOpen && !isCollapsed
                      ? "grid-rows-[1fr] opacity-100 my-4"
                      : "grid-rows-[0fr] opacity-0 overflow-hidden"
                  }`}
                >
                  <div className="overflow-hidden space-y-4">
                    {section.items.map((subItem) => (
                      <button
                        key={`${section.key}-${subItem}`}
                        type="button"
                        className="block momo-typo-label-lg py-1 text-text-secondary hover:text-momo-blue transition-colors whitespace-nowrap"
                      >
                        {subItem}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Static Profile Link */}
          <button
            type="button"
            className="flex items-center text-text-default px-4 py-3 hover:bg-surface-secondary rounded-xl momo-typo-label-lg transition-colors h-12"
          >
            <div className="flex items-center gap-3 min-w-max">
              <User className="w-5 h-5" />
              <span
                className={`transition-opacity duration-200 ${isCollapsed ? "opacity-0 pointer-events-none w-0" : "opacity-100"}`}
              >
                Profile
              </span>
            </div>
          </button>
        </nav>
      </div>

      {/* Footer Block Utilities */}
      <div className="space-y-3 pt-10 border-t border-border-default momo-typo-label-xl text-momo-blue pl-2 overflow-hidden">
        {[
          {
            key: "contact-customer-care",
            label: "Contact Customer Care",
            icon: Headset,
          },
          {
            key: "terms-and-conditions",
            label: "Terms & Conditions",
            icon: FileText,
          },
          { key: "privacy-policy", label: "Privacy Policy", icon: ShieldCheck },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.key}
              type="button"
              className="flex items-center gap-3 hover:underline h-6 min-w-max"
            >
              <Icon className="w-4 h-4" />
              <span
                className={`transition-opacity duration-200 ${isCollapsed ? "opacity-0 pointer-events-none w-0" : "opacity-100"}`}
              >
                {item.label}
              </span>
            </button>
          );
        })}

        <button
          type="button"
          className="flex items-center gap-3 hover:underline text-status-danger pt-2 h-8 min-w-max"
        >
          <LogOut className="w-4 h-4" />
          <span
            className={`transition-opacity duration-200 ${isCollapsed ? "opacity-0 pointer-events-none w-0" : "opacity-100"}`}
          >
            Logout
          </span>
        </button>
      </div>
    </aside>
  );
}
