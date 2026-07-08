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
      className={`bg-white dark:bg-slate-900 flex flex-col justify-between p-16 relative pt-40 border-r border-momo-light transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-80" : "w-[calc(var(--spacing-64)*4)]"
      }`}
    >
      {/* Flight Control Toggle button: added active onClick behavior and indicator rotation dynamics */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`absolute -right-12 top-1/2 transform -translate-y-1/2 w-24 h-24 rounded-full bg-white dark:bg-slate-800 border border-momo-light flex items-center justify-center shadow-momo-sm text-slate-400 hover:text-momo-blue dark:hover:text-momo-yellow text-xs z-50 transition-transform duration-300 ${
          isCollapsed ? "rotate-180" : ""
        }`}
      >
        <ChevronLeft className="w-20 h-20" />
      </button>

      <div className="space-y-24 overflow-x-hidden">
        <nav className="space-y-4">
          {/* Static Home Link */}
          <a
            href="#"
            className="flex items-center bg-momo-sidebarActive text-white px-16 py-10 rounded-md font-bold text-sm h-40"
          >
            <div className="flex items-center gap-12 min-w-[max-content]">
              <Home className="w-24 h-24" />
              <span
                className={`transition-opacity duration-200 ${isCollapsed ? "opacity-0 pointer-events-none w-0" : "opacity-100"}`}
              >
                Home
              </span>
            </div>
          </a>

          {/* Collapsible Dropdown Sections */}
          {menuSections.map((section) => {
            const isOpen = !!openMenus[section.key];
            const Icon = section.icon;

            return (
              <div key={section.key} className="flex flex-col">
                <button
                  onClick={(e) => toggleMenu(section.key, e)}
                  className={`flex items-center justify-between w-full text-momo-darkText dark:text-slate-300 px-16 py-10 hover:bg-momo-bgLight/50 dark:hover:bg-slate-800/50 rounded-md font-medium text-sm transition-colors text-left h-40 ${
                    isOpen && !isCollapsed
                      ? "bg-momo-bgLight/30 dark:bg-slate-800/30"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-12 min-w-[max-content]">
                    <Icon className="w-24 h-24" />
                    <span
                      className={`transition-opacity duration-200 ${isCollapsed ? "opacity-0 pointer-events-none w-0" : "opacity-100"}`}
                    >
                      {section.label}
                    </span>
                  </div>
                  <span
                    className={`text-[10px] opacity-60 transition-all duration-200 ${
                      isCollapsed ? "scale-0 opacity-0" : ""
                    } ${isOpen ? "rotate-180 text-momo-blue dark:text-momo-yellow" : ""}`}
                  >
                    <ChevronDown className="w-20 h-20" />
                  </span>
                </button>

                {/* Animated Dropdown Menu Panel Container: Hidden natively when side status is collapsed */}
                <div
                  className={`grid transition-all duration-200 ease-in-out pl-40 ${
                    isOpen && !isCollapsed
                      ? "grid-rows-[1fr] opacity-100 my-4"
                      : "grid-rows-[0fr] opacity-0 overflow-hidden"
                  }`}
                >
                  <div className="overflow-hidden space-y-4">
                    {section.items.map((subItem, sIdx) => (
                      <a
                        key={sIdx}
                        href="#"
                        className="block text-xs font-medium py-6 text-slate-500 hover:text-momo-blue dark:text-slate-400 dark:hover:text-momo-yellow transition-colors whitespace-nowrap"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Static Profile Link */}
          <a
            href="#"
            className="flex items-center text-momo-darkText dark:text-slate-300 px-16 py-10 hover:bg-momo-bgLight/50 dark:hover:bg-slate-800/50 rounded-md font-medium text-sm transition-colors h-40"
          >
            <div className="flex items-center gap-12 min-w-[max-content]">
              <User className="w-24 h-24" />
              <span
                className={`transition-opacity duration-200 ${isCollapsed ? "opacity-0 pointer-events-none w-0" : "opacity-100"}`}
              >
                Profile
              </span>
            </div>
          </a>
        </nav>
      </div>

      {/* Footer Block Utilities */}
      <div className="space-y-16 pt-16 border-t border-momo-light text-xs font-semibold text-momo-blue dark:text-slate-400 pl-10 overflow-hidden">
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
            <a
              key={item.key}
              href="#"
              className="flex items-center gap-12 hover:underline h-20 min-w-[max-content]"
            >
              <Icon className="w-24 h-24" />
              <span
                className={`transition-opacity duration-200 ${isCollapsed ? "opacity-0 pointer-events-none w-0" : "opacity-100"}`}
              >
                {item.label}
              </span>
            </a>
          );
        })}

        <a
          href="#"
          className="flex items-center gap-12 hover:underline text-red-600 dark:text-red-400 pt-10 h-32 min-w-[max-content]"
        >
          <LogOut className="w-24 h-24" />
          <span
            className={`transition-opacity duration-200 ${isCollapsed ? "opacity-0 pointer-events-none w-0" : "opacity-100"}`}
          >
            Logout
          </span>
        </a>
      </div>
    </aside>
  );
}
