import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import BalanceCard from "./components/BalanceCard";
import AccountDashboard from "./components/AccountDashboard";
import PendingApprovals from "./components/PendingApprovals";
import ActionButton from "./components/ActionButton";
import { CreditCard, FileText, HandCoins, Store } from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("single");

  // Synchronize state with HTML element class list
  useEffect(() => {
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
    <div className="min-h-screen bg-momo-bgLight dark:bg-slate-950 flex flex-col font-sans text-slate-800 dark:text-slate-200 transition-colors duration-200">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Layout Container - Sidebar pinned left, content panel takes the rest */}
      <div className="flex flex-1 w-full">
        <Sidebar />

        {/* Right side content wrapper:
          - flex-1: pushes this panel to fill the entire remaining right-hand viewport space.
          - items-center: horizontally centers the child components inside this panel.
        */}
        <main className="flex-1 flex flex-col items-center p-32 animate-momo-fade-in">
          {/* Centered bounding box enforcing consistency across layout segments */}
          <div className="w-full max-w-6xl space-y-24">
            <BalanceCard title="Total Balance" />

            <AccountDashboard />

            <PendingApprovals
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            <div className="flex justify-center gap-16 pt-24">
              {shortcuts.map((btn, idx) => (
                <ActionButton key={idx} label={btn.label} icon={btn.icon} />
              ))}
            </div>
          </div>
        </main>
      </div>

      <footer className="text-[10px] text-slate-400 self-end p-10 pr-16 bg-transparent select-none">
        MoMo-Business-Web-v4.0.0
      </footer>
    </div>
  );
}
