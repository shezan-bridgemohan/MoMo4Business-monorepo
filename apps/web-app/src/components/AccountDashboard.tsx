import { useState } from "react";
import {
  ArrowDownLeft,
  ArrowUpRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Eye,
} from "lucide-react";

interface Transaction {
  direction: "in" | "out";
  party: string;
  time: string;
  amount: string;
}

interface AccountData {
  accountName: string;
  balance: string;
  moneyFlowDirection: string;
  chartPath: string;
  chartFillPath: string;
  transactions: Transaction[];
}

export default function AccountDashboard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Track directional flow state to append the right keyframe set dynamically
  const [slideDirection, setSlideDirection] = useState<"next" | "prev">("next");

  const accounts: AccountData[] = [
    {
      accountName: "Bulk Payment Account",
      balance: "100.00",
      moneyFlowDirection: "Money In",
      chartPath: "M 0 85 L 40 85 L 120 40 L 200 65 L 280 20 L 360 10 L 400 15",
      chartFillPath:
        "M 0 85 L 40 85 L 120 40 L 200 65 L 280 20 L 360 10 L 400 15 L 400 100 L 0 100 Z",
      transactions: [
        {
          direction: "out",
          party: "0779999410",
          time: "11:45 AM • Money Out",
          amount: "- UGX 10,000",
        },
        {
          direction: "in",
          party: "Collection Hub B",
          time: "09:12 AM • Money In",
          amount: "+ UGX 450,000",
        },
      ],
    },
    {
      accountName: "Operational Escrow Ledger",
      balance: "14,820,500",
      moneyFlowDirection: "Settled",
      chartPath: "M 0 50 L 80 60 L 160 30 L 240 45 L 320 15 L 400 10",
      chartFillPath:
        "M 0 50 L 80 60 L 160 30 L 240 45 L 320 15 L 400 10 L 400 100 L 0 100 Z",
      transactions: [
        {
          direction: "in",
          party: "Bank Settlement",
          time: "04:30 PM • Incoming",
          amount: "+ UGX 8,500,000",
        },
        {
          direction: "out",
          party: "URA Tax Remit",
          time: "02:15 PM • Statutory",
          amount: "- UGX 2,100,000",
        },
      ],
    },
    {
      accountName: "Merchant Collection Wallet",
      balance: "3,150,000",
      moneyFlowDirection: "Money In",
      chartPath: "M 0 90 L 100 70 L 200 80 L 300 40 L 400 20",
      chartFillPath:
        "M 0 90 L 100 70 L 200 80 L 300 40 L 400 20 L 400 100 L 0 100 Z",
      transactions: [
        {
          direction: "in",
          party: "Pos Terminal 04",
          time: "01:05 PM • QuickPay",
          amount: "+ UGX 85,000",
        },
        {
          direction: "in",
          party: "Web Checkout API",
          time: "12:54 PM • Online",
          amount: "+ UGX 120,000",
        },
      ],
    },
  ];

  const handlePrev = () => {
    setSlideDirection("prev");
    setCurrentIndex((prev) => (prev === 0 ? accounts.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSlideDirection("next");
    setCurrentIndex((prev) => (prev === accounts.length - 1 ? 0 : prev + 1));
  };

  const activeAccount = accounts[currentIndex];
  const animationClass =
    slideDirection === "next" ? "animate-slide-next" : "animate-slide-prev";

  return (
    <div className="bg-white dark:bg-slate-900 p-24 rounded-momo-card border border-slate-100 dark:border-slate-800 shadow-sm grid grid-cols-3 gap-24 relative transition-colors overflow-hidden">
      {/* LEFT SIDE DATA REGION */}
      <div
        key={`left-panel-${currentIndex}`}
        className={`col-span-2 space-y-16 will-change-transform ${animationClass}`}
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">
              {activeAccount.accountName}
            </p>
            <h2 className="text-2xl font-black text-momo-darkText dark:text-white mt-4 flex items-center gap-10">
              UGX{" "}
              <span className="tracking-tight font-mono">
                {activeAccount.balance}
              </span>{" "}
              <Eye className="w-16 h-16 cursor-pointer select-none opacity-60 hover:opacity-100" />
            </h2>
          </div>

          <div className="flex items-center gap-10 text-xs font-bold text-slate-600 dark:text-slate-300 bg-momo-bgLight dark:bg-slate-800 px-12 py-6 rounded-momo-input border border-slate-100 dark:border-slate-700">
            <span
              className={`w-10 h-10 rounded-full ${activeAccount.moneyFlowDirection === "Settled" ? "bg-emerald-500" : "bg-amber-500"}`}
            />
            {activeAccount.moneyFlowDirection} <ChevronDown className="w-12 h-12" />
          </div>
        </div>

        {/* CHART SECTION */}
        <div className="h-80 pt-16 relative flex items-end">
          <div className="absolute left-0 bottom-0 top-0 w-48 text-[10px] font-bold text-slate-400 flex flex-col justify-between pr-10 text-right">
            <span>50.0M</span>
            <span>25.0M</span>
            <span>0</span>
          </div>
          <div className="flex-1 h-full ml-56 relative flex items-end">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 400 100"
              preserveAspectRatio="none"
            >
              {/* Path layout dynamically updates along with the core key animation frame */}
              <path
                d={activeAccount.chartPath}
                fill="none"
                className="stroke-momo-chartLine transition-all duration-500 ease-in-out"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d={activeAccount.chartFillPath}
                className="fill-momo-chartFill transition-all duration-500 ease-in-out opacity-80"
              />
            </svg>
            <div className="absolute left-0 right-0 -bottom-24 flex justify-between text-[10px] font-bold text-slate-400 px-4">
              <div className="text-center">
                90
                <br />
                <span className="text-[8px] font-normal">Days Ago</span>
              </div>
              <span>75</span>
              <span>60</span>
              <span>45</span>
              <span>30</span>
              <span>15</span>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE TRANSACTION FEED */}
      <div className="pl-16 flex flex-col justify-between border-l border-momo-light/60">
        <div className="flex items-center justify-between text-xs mb-10">
          <span className="font-bold text-momo-darkText dark:text-slate-300">
            Recent Activity
          </span>
          <a
            href="#"
            className="text-momo-blue dark:text-sky-400 underline font-semibold text-[11px]"
          >
            View All
          </a>
        </div>

        {/* The feed slides using the same axis behavior but introduces a slightly staggered sub-reveal class */}
        <div
          key={`right-panel-${currentIndex}`}
          className={`space-y-10 max-h-80 overflow-y-auto pr-4 will-change-transform ${animationClass} animate-reveal-delayed`}
        >
          {activeAccount.transactions.map((tx, i) => (
            <div
              key={i}
              className="flex items-center justify-between text-[11px] border-b border-momo-bgLight dark:border-slate-800/50 pb-6"
            >
              <div className="flex items-center gap-10">
                <span
                  className={`font-bold p-4 rounded-full text-xs ${tx.direction === "out" ? "text-red-500 bg-red-50 dark:bg-red-950/30" : "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/30"}`}
                >
                  {tx.direction === "out" ? (
                    <ArrowUpRight className="w-12 h-12" />
                  ) : (
                    <ArrowDownLeft className="w-12 h-12" />
                  )}
                </span>
                <div>
                  <p className="font-bold tracking-tight text-slate-700 dark:text-slate-300">
                    {tx.party}
                  </p>
                  <p className="text-[9px] text-slate-400">{tx.time}</p>
                </div>
              </div>
              <span
                className={`font-bold ${tx.direction === "out" ? "text-red-600 dark:text-red-400" : "text-emerald-600 dark:text-emerald-400"}`}
              >
                {tx.amount}
              </span>
            </div>
          ))}
        </div>

        {/* Action Tray */}
        <div className="flex gap-6 pt-12">
          <button className="flex-1 py-4 px-10 rounded-momo-btn border border-momo-blue text-momo-blue dark:text-sky-400 font-bold text-xs hover:bg-momo-bgLight dark:hover:bg-slate-800 transition-colors">
            Buy
          </button>
          <button className="flex-1 py-4 px-10 rounded-momo-btn border border-momo-blue text-momo-blue dark:text-sky-400 font-bold text-xs hover:bg-momo-bgLight dark:hover:bg-slate-800 transition-colors">
            Pay
          </button>
          <button className="flex-1 py-4 px-10 rounded-momo-btn bg-momo-blue text-white font-bold text-xs hover:opacity-90 transition-opacity">
            Transfer
          </button>
        </div>
      </div>

      {/* TOP CAROUSEL CONTROLS */}
      <div className="absolute top-16 right-16 flex items-center gap-10 bg-white/80 dark:bg-slate-900/80 px-4 py-2 rounded-full shadow-sm backdrop-blur-xs z-10">
        <span className="text-[10px] font-bold text-slate-400 px-4 font-mono">
          {currentIndex + 1}/{accounts.length}
        </span>
        <button
          onClick={handlePrev}
          className="w-20 h-20 bg-momo-bgLight dark:bg-slate-800 hover:bg-momo-blue hover:text-white dark:hover:bg-momo-yellow dark:hover:text-slate-900 rounded-full flex items-center justify-center text-xs font-bold text-slate-400 transition-all active:scale-90"
        >
          <ChevronLeft className="w-12 h-12" />
        </button>
        <button
          onClick={handleNext}
          className="w-20 h-20 bg-momo-bgLight dark:bg-slate-800 hover:bg-momo-blue hover:text-white dark:hover:bg-momo-yellow dark:hover:text-slate-900 rounded-full flex items-center justify-center text-xs font-bold text-slate-400 transition-all active:scale-90"
        >
          <ChevronRight className="w-12 h-12" />
        </button>
      </div>
    </div>
  );
}
