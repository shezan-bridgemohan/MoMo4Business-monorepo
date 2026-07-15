import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import BalanceCard from "./components/BalanceCard";
import AccountDashboard from "./components/AccountDashboard";
import PendingApprovals from "./components/PendingApprovals";
import ActionButton from "./components/ActionButton";
import { CreditCard, FileText, HandCoins, Store } from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const root = document.documentElement;
    const explicitTheme = root.dataset.theme;

    if (explicitTheme === "dark") {
      return true;
    }
    if (explicitTheme === "light") {
      return false;
    }

    if (root.classList.contains("dark")) {
      return true;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [activeTab, setActiveTab] = useState("single");

  // Synchronize state with HTML element class list
  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const shortcuts = [
    { label: "Create Invoice", icon: FileText },
    { label: "Seller Hub", icon: Store },
    { label: "Get Paid", icon: HandCoins },
    { label: "Recharge", icon: CreditCard },
  ];

  return (
    <div className="min-h-screen bg-surface-default flex flex-col font-sans text-text-default transition-colors duration-200">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Layout Container - Sidebar pinned left, content panel takes the rest */}
      <div className="flex flex-1 w-full">
        <Sidebar />

        {/* Right side content wrapper:
          - flex-1: pushes this panel to fill the entire remaining right-hand viewport space.
          - items-center: horizontally centers the child components inside this panel.
        */}
        <main className="flex-1 ml-[var(--layout-shell-nav-open-width)] flex flex-col items-center p-8 md:p-10 animate-momo-fade-in dark:bg-zinc-800 transition-colors duration-200">
          {/* Centered bounding box enforcing consistency across layout segments */}
          <div className="w-full max-w-310 space-y-8">
            <h1 className="momo-typo-heading-sm text-momo-blue dark:text-white">Accounts</h1>

            <BalanceCard title="Total Balance" />

            <AccountDashboard />

            <PendingApprovals
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            <div className="flex justify-center gap-4 pt-4">
              {shortcuts.map((btn) => (
                <ActionButton
                  key={btn.label}
                  label={btn.label}
                  icon={btn.icon}
                />
              ))}
            </div>
          </div>
        </main>
      </div>

      <footer className="momo-typo-label-sm-medium text-text-secondary self-end px-6 py-4 bg-transparent select-none">
        MoMo-Business-Web-v4.0.0
      </footer>
    </div>
  );
}
