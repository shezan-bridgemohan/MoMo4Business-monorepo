import { Info } from "lucide-react";

interface PendingApprovalsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

interface ApprovalRow {
  date: string;
  reference: string;
  txId: string;
  type: string;
  status: string;
  amount: string;
}

export default function PendingApprovals({
  activeTab,
  setActiveTab,
}: PendingApprovalsProps) {
  // Dummy data arrays for Single Transactions
  const singleData: ApprovalRow[] = [
    {
      date: "2026-07-06",
      reference: "REF-9921A",
      txId: "TXN8829102",
      type: "Utility Bill",
      status: "Awaiting Sign",
      amount: "UGX 45,000",
    },
    {
      date: "2026-07-06",
      reference: "REF-1092B",
      txId: "TXN0021983",
      type: "Supplier Pay",
      status: "Pending Otp",
      amount: "UGX 1,200,000",
    },
    {
      date: "2026-07-05",
      reference: "REF-7726X",
      txId: "TXN9921045",
      type: "Wallet Transfer",
      status: "Awaiting Sign",
      amount: "UGX 15,000",
    },
    {
      date: "2026-07-04",
      reference: "REF-3112M",
      txId: "TXN4456129",
      type: "Airtime Purchase",
      status: "Awaiting Sign",
      amount: "UGX 5,000",
    },
    {
      date: "2026-07-04",
      reference: "REF-8812K",
      txId: "TXN1109438",
      type: "Salary Advance",
      status: "Verification",
      amount: "UGX 350,000",
    },
  ];

  // Dummy data arrays for Bulk Transactions
  const bulkData: ApprovalRow[] = [
    {
      date: "2026-07-06",
      reference: "BULK-JULY-A",
      txId: "BLK00291",
      type: "Payroll (42 Recipients)",
      status: "Processing Match",
      amount: "UGX 18,450,000",
    },
    {
      date: "2026-07-05",
      reference: "BULK-VENDOR-X",
      txId: "BLK00292",
      type: "Vendor Clearance (5 files)",
      status: "Awaiting Approval",
      amount: "UGX 9,100,000",
    },
    {
      date: "2026-07-05",
      reference: "BULK-METER-B",
      txId: "BLK00293",
      type: "Umeme Bulk Power",
      status: "Awaiting Approval",
      amount: "UGX 4,500,000",
    },
    {
      date: "2026-07-03",
      reference: "BULK-TAX-Q2",
      txId: "BLK00294",
      type: "URA Statutory Remit",
      status: "Compliance Review",
      amount: "UGX 32,150,000",
    },
    {
      date: "2026-07-02",
      reference: "BULK-COMM-07",
      txId: "BLK00295",
      type: "Agent Commissions",
      status: "Awaiting Approval",
      amount: "UGX 7,800,000",
    },
  ];

  // Dynamically switch active rows depending on selection state
  const currentRows = activeTab === "single" ? singleData : bulkData;
  const totalPending = singleData.length + bulkData.length;

  return (
    <div className="space-y-16 pt-10">
      {/* Top Heading with dynamic global count */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-black text-momo-darkText dark:text-white">
          Pending Approvals
        </h3>
        <span className="text-[10px] font-bold text-momo-badgePendingText border border-momo-badgePendingBorder px-10 py-2 rounded-full bg-momo-bgLight dark:bg-slate-900">
          {totalPending} Total Pending Approvals
        </span>
      </div>

      {/* Tab Switcher */}
      <div className="flex items-center justify-between bg-momo-bgLight dark:bg-slate-900 p-4 rounded-momo-input">
        <div className="flex gap-10 flex-1 max-w-md">
          {["single", "bulk"].map((tab) => {
            const count =
              tab === "single" ? singleData.length : bulkData.length;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 flex items-center justify-center gap-10 py-10 rounded-momo-input text-xs font-bold transition-all duration-300 ease-in-out ${
                  activeTab === tab
                    ? "bg-white dark:bg-slate-800 text-momo-blue dark:text-white shadow-momo-sm scale-[1.01]"
                    : "text-slate-400 hover:text-momo-blue/70 dark:hover:text-slate-200"
                }`}
              >
                {tab === "single" ? "Single Transactions" : "Bulk Transactions"}{" "}
                <span
                  className={`w-16 h-16 rounded-full text-white text-[9px] flex items-center justify-center transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-amber-500 scale-110 animate-pulse"
                      : "bg-slate-300 dark:bg-slate-700"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
        <button className="bg-momo-blue text-white text-xs font-bold px-20 py-6 rounded-momo-input mx-4 hover:opacity-95 shadow-momo-sm transition-all">
          View All
        </button>
      </div>

      {/* Table Header Structure Grid */}
      <div className="bg-momo-tableHeaderBg dark:bg-slate-900/50 rounded-momo-input p-16 grid grid-cols-6 gap-10 text-center text-xs font-bold text-momo-blue dark:text-slate-300 border border-momo-light">
        <div>Date Created</div>
        <div>Reference</div>
        <div>Transaction ID</div>
        <div>Type</div>
        <div>Status</div>
        <div>Amount</div>
      </div>

      {/* Dynamic Rows Container Wrapper */}
      <div className="space-y-6 max-h-[320px] overflow-y-auto pr-2">
        {currentRows.length > 0 ? (
          currentRows.map((row, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 p-16 grid grid-cols-6 gap-10 text-center text-xs font-medium text-slate-600 dark:text-slate-300 rounded-momo-input border-momo-light shadow-momo-sm hover:border-momo-blue/30 transition-all duration-200"
            >
              <div className="text-slate-400 font-mono">{row.date}</div>
              <div className="font-bold tracking-tight text-momo-darkText dark:text-white">
                {row.reference}
              </div>
              <div className="text-slate-400 font-mono text-[11px] truncate">
                {row.txId}
              </div>
              <div className="truncate">{row.type}</div>
              <div>
                <span className="px-10 py-2 rounded-full text-[10px] font-bold bg-amber-50 dark:bg-amber-950/40 text-amber-600 border border-amber-200/50">
                  {row.status}
                </span>
              </div>
              <div className="font-black text-momo-darkText dark:text-white tracking-tight">
                {row.amount}
              </div>
            </div>
          ))
        ) : (
          <div className="bg-momo-bgLight/20 dark:bg-slate-900/20 border border-dashed border-slate-200 dark:border-slate-800 rounded-momo-card p-24 text-center text-xs text-slate-400 font-medium flex items-center justify-center gap-10">
            <Info className="w-14 h-14" /> No pending approvals.
          </div>
        )}
      </div>
    </div>
  );
}
