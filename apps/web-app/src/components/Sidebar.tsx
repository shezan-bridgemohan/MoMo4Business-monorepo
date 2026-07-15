import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ChevronLeft,
  FileCheck2,
  FileText,
  HandCoins,
  Headset,
  Landmark,
  LogOut,
  ShieldCheck,
  User,
} from "lucide-react";
import { WebNavigationItem } from "@shared/ui-components";

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

  return (
    <aside
      /* Dynamic dynamic layout configurations width: w-64 vs w-20 */
      className={`fixed left-0 top-(--layout-shell-header-height) h-[calc(100vh-var(--layout-shell-header-height))] z-40 bg-surface-default flex flex-col justify-between p-20 border-r border-border-default transition-all duration-300 ease-in-out overflow-visible ${
        isCollapsed
          ? "w-(--layout-shell-nav-compact-width)"
          : "w-(--layout-shell-nav-open-width)"
      }`}
    >
      {/* Flight Control Toggle button: added active onClick behavior and indicator rotation dynamics */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`absolute -right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-surface-default border border-border-default flex items-center justify-center shadow-momo-sm text-text-secondary hover:text-momo-blue dark:hover:text-white text-xs z-50 transition-transform duration-300 ${
          isCollapsed ? "rotate-180" : ""
        }`}
      >
        <ChevronLeft className="w-20 h-20" />
      </button>

      <div className="flex-1 min-h-0 space-y-(--spacing-momo-element-spacing) overflow-visible">
        <nav className="space-y-10">
          {/* Collapsible Dropdown Sections */}
          {menuSections.map((section) => {
            const isOpen = !!openMenus[section.key];
            const Icon = section.icon;

            return (
              <div key={section.key} className="flex flex-col my-24">
                <WebNavigationItem
                  label={section.label}
                  icon={<Icon className="w-20 h-20" />}
                  hasChevron
                  isChevronOpen={isOpen}
                  isCollapsed={isCollapsed}
                  isActive={isOpen && !isCollapsed}
                  onClick={() => {
                    if (isCollapsed) {
                      setIsCollapsed(false);
                    }
                    setOpenMenus((prev) => ({
                      ...prev,
                      [section.key]: !prev[section.key],
                    }));
                  }}
                />

                {/* Animated Dropdown Menu Panel Container: Hidden natively when side status is collapsed */}
                <div
                  className={`grid transition-all duration-200 ease-in-out pl-10 ${
                    isOpen && !isCollapsed
                      ? "grid-rows-[1fr] opacity-100 my-10"
                      : "grid-rows-[0fr] opacity-0 overflow-hidden"
                  }`}
                >
                  <div className="overflow-hidden space-y-10 pb-2">
                    {section.items.map((subItem) => (
                      <button
                        key={`${section.key}-${subItem}`}
                        type="button"
                        className="block momo-typo-label-lg py-1 text-text-secondary hover:text-momo-blue dark:hover:text-white transition-colors whitespace-nowrap"
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
          <WebNavigationItem
            label="Profile"
            icon={<User className="w-20 h-20" />}
            isCollapsed={isCollapsed}
          />
        </nav>
      </div>

      {/* Footer Block Utilities */}
      <div className="space-y-3 pt-10 border-t border-border-default momo-typo-label-xl text-momo-blue dark:text-white pl-2 overflow-hidden">
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
            <WebNavigationItem
              key={item.key}
              label={item.label}
              icon={<Icon className="w-20 h-20" />}
              isCollapsed={isCollapsed}
            />
          );
        })}

        <WebNavigationItem
          label="Logout"
          icon={<LogOut className="w-20 h-20" />}
          isCollapsed={isCollapsed}
          className="text-status-danger hover:text-status-danger"
        />
      </div>
    </aside>
  );
}
