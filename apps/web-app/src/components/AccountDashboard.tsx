import { useState } from "react";
import {
  ArrowDownLeft,
  ArrowUpRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Eye,
} from "lucide-react";
import { Button } from "@shared/ui-components";

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
    <div className="bg-surface-default px-[var(--layout-content-padding-mobile)] md:px-[var(--layout-content-padding-tablet)] xl:px-[var(--layout-content-padding-desktop)] py-[var(--spacing-momo-card-padding)] rounded-[14px] border border-border-default shadow-momo-sm grid grid-cols-1 xl:grid-cols-3 gap-[var(--spacing-momo-container-gap)] relative transition-colors overflow-hidden">
      {/* LEFT SIDE DATA REGION */}
      <div
        key={`left-panel-${currentIndex}`}
        className={`xl:col-span-2 space-y-[var(--spacing-momo-element-spacing)] will-change-transform ${animationClass}`}
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="momo-typo-label-md text-text-secondary">
              {activeAccount.accountName}
            </p>
            <h2 className="momo-typo-heading-md text-text-default mt-1 flex items-center gap-2">
              UGX{" "}
              <span className="tracking-tight">{activeAccount.balance}</span>
              <Eye className="w-4 h-4 cursor-pointer select-none opacity-60 hover:opacity-100" />
            </h2>
          </div>

          <div className="flex items-center gap-2 momo-typo-label-sm-medium text-text-secondary bg-surface-secondary px-3 py-2 rounded-full border border-border-default">
            <span
              className={`w-10 h-10 rounded-full ${activeAccount.moneyFlowDirection === "Settled" ? "bg-status-positive" : "bg-status-warning"}`}
            />
            {activeAccount.moneyFlowDirection}{" "}
            <ChevronDown className="w-3 h-3" />
          </div>
        </div>

        {/* CHART SECTION */}
        <div className="h-56 pt-[var(--spacing-momo-element-spacing)] relative flex items-end">
          <div className="absolute left-0 bottom-0 top-0 w-12 momo-typo-label-sm-medium text-text-secondary flex flex-col justify-between pr-2 text-right">
            <span>50.0M</span>
            <span>25.0M</span>
            <span>0</span>
          </div>
          <div className="flex-1 h-full ml-14 relative flex items-end">
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
            <div className="absolute left-0 right-0 -bottom-8 flex justify-between momo-typo-label-sm-medium text-text-secondary px-2">
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
      <div className="xl:pl-[var(--spacing-momo-card-padding)] flex flex-col justify-between xl:border-l border-border-default/70">
        <div className="flex items-center justify-between momo-typo-label-md mb-3">
          <span className="text-text-default">Recent Activity</span>
          <Button
            label="View All"
            platform="desktop-web"
            size="xsmall"
            variant="primary"
            className="text-momo-blue dark:text-white"
          />
        </div>

        {/* The feed slides using the same axis behavior but introduces a slightly staggered sub-reveal class */}
        <div
          key={`right-panel-${currentIndex}`}
          className={`space-y-3 max-h-56 overflow-y-auto pr-2 will-change-transform ${animationClass} animate-reveal-delayed`}
        >
          {activeAccount.transactions.map((tx) => (
            <div
              key={`${tx.party}-${tx.time}-${tx.amount}`}
              className="flex items-center justify-between momo-typo-label-sm-medium border-b border-border-default pb-2"
            >
              <div className="flex items-center gap-10">
                <span
                  className={`font-bold p-4 rounded-full text-xs ${tx.direction === "out" ? "text-status-danger bg-momo-badgePendingBg" : "text-status-positive bg-surface-secondary"}`}
                >
                  {tx.direction === "out" ? (
                    <ArrowUpRight className="w-3 h-3" />
                  ) : (
                    <ArrowDownLeft className="w-3 h-3" />
                  )}
                </span>
                <div>
                  <p className="tracking-tight text-text-default">{tx.party}</p>
                  <p className="text-[10px] text-text-secondary">{tx.time}</p>
                </div>
              </div>
              <span
                className={`font-bold ${tx.direction === "out" ? "text-status-danger" : "text-status-positive"}`}
              >
                {tx.amount}
              </span>
            </div>
          ))}
        </div>

        {/* Action Tray */}
        <div className="flex gap-[var(--spacing-12)] pt-[var(--spacing-momo-element-spacing)]">
          <Button
            label="Buy"
            platform="desktop-web"
            size="xsmall"
            variant="primary"
            fullWidth
            className="normal-case"
          />
          <Button
            label="Pay"
            platform="desktop-web"
            size="xsmall"
            variant="primary"
            fullWidth
            className="normal-case"
          />
          <Button
            label="Transfer"
            platform="desktop-web"
            size="xsmall"
            variant="primary"
            fullWidth
            className="normal-case"
          />
        </div>
      </div>

      {/* TOP CAROUSEL CONTROLS */}
      <div className="absolute top-4 right-4 flex items-center gap-2 bg-surface-default/85 px-3 py-1 rounded-full shadow-momo-sm backdrop-blur-xs z-10 border border-border-default">
        <span className="momo-typo-label-sm-medium text-text-secondary px-2">
          {currentIndex + 1}/{accounts.length}
        </span>
        <button
          onClick={handlePrev}
          className="w-7 h-7 bg-surface-secondary hover:bg-momo-blue hover:text-white rounded-full flex items-center justify-center text-text-secondary transition-all active:scale-90"
        >
          <ChevronLeft className="w-3 h-3" />
        </button>
        <button
          onClick={handleNext}
          className="w-7 h-7 bg-surface-secondary hover:bg-momo-blue hover:text-white rounded-full flex items-center justify-center text-text-secondary transition-all active:scale-90"
        >
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
