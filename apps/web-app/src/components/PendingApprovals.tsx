import { Button } from "@shared/ui-components";
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
}: Readonly<PendingApprovalsProps>) {
  // Dummy data arrays for Single Transactions
  const singleData: ApprovalRow[] = [
    {
      date: "2026-07-06",
      reference: "REF-9921A",
      txId: "TXN8829102",
      type: "Utility Bill",
      status: "Approved",
      amount: "UGX 45,000",
    },
    {
      date: "2026-07-06",
      reference: "REF-1092B",
      txId: "TXN0021983",
      type: "Supplier Pay",
      status: "Declined",
      amount: "UGX 1,200,000",
    },
    {
      date: "2026-07-05",
      reference: "REF-7726X",
      txId: "TXN9921045",
      type: "Wallet Transfer",
      status: "Process",
      amount: "UGX 15,000",
    },
    {
      date: "2026-07-04",
      reference: "REF-8812K",
      txId: "TXN1109438",
      type: "Salary Advance",
      status: "Approved",
      amount: "UGX 350,000",
    },
    {
      date: "2026-07-04",
      reference: "REF-3112M",
      txId: "TXN4456129",
      type: "Airtime Purchase",
      status: "Process",
      amount: "UGX 5,000",
    },
  ];

  // Dummy data arrays for Bulk Transactions
  const bulkData: ApprovalRow[] = [
    {
      date: "2026-07-06",
      reference: "BULK-JULY-A",
      txId: "BLK00291",
      type: "Payroll (42 Recipients)",
      status: "Process",
      amount: "UGX 18,450,000",
    },
    {
      date: "2026-07-05",
      reference: "BULK-VENDOR-X",
      txId: "BLK00292",
      type: "Vendor Clearance (5 files)",
      status: "Declined",
      amount: "UGX 9,100,000",
    },
    {
      date: "2026-07-05",
      reference: "BULK-METER-B",
      txId: "BLK00293",
      type: "Umeme Bulk Power",
      status: "Approved",
      amount: "UGX 4,500,000",
    },
    {
      date: "2026-07-03",
      reference: "BULK-TAX-Q2",
      txId: "BLK00294",
      type: "URA Statutory Remit",
      status: "Process",
      amount: "UGX 32,150,000",
    },
    {
      date: "2026-07-02",
      reference: "BULK-COMM-07",
      txId: "BLK00295",
      type: "Agent Commissions",
      status: "Approved",
      amount: "UGX 7,800,000",
    },
  ];

  // Dynamically switch active rows depending on selection state
  const currentRows = activeTab === "single" ? singleData : bulkData;
  const totalPending = singleData.length + bulkData.length;

  const getStatusBadgeClass = (status: string) => {
    const normalized = status.trim().toLowerCase();

    if (normalized === "approved") {
      return "bg-status-positive/15 text-status-positive border-status-positive/40";
    }

    if (normalized === "declined") {
      return "bg-status-danger/15 text-status-danger border-status-danger/40";
    }

    if (normalized.startsWith("process")) {
      return "bg-momo-blue/15 text-momo-blue dark:text-white border-momo-blue/40";
    }

    return "bg-momo-badgePendingBg text-momo-badgePendingText border-momo-badgePendingBorder";
  };

  return (
    <div className="space-y-(--spacing-momo-container-gap) pt-(--spacing-momo-element-spacing)">
      {/* Top Heading with dynamic global count */}
      <div className="flex items-center justify-between">
        <h3 className="momo-typo-heading-sm text-momo-blue dark:text-white">
          Pending Approvals
        </h3>
        <span className="momo-typo-label-lg text-momo-blue dark:text-white border border-border-default px-3 py-1 rounded-full bg-surface-default">
          {totalPending} Pending approvals
        </span>
      </div>

      {/* Tab Switcher */}
      <div className="flex items-center justify-between bg-surface-default border border-border-default px-(--spacing-momo-card-padding) py-(--spacing-momo-element-spacing) rounded-full">
        <div className="flex gap-2 flex-1 max-w-md">
          {["single", "bulk"].map((tab) => {
            const count =
              tab === "single" ? singleData.length : bulkData.length;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-full momo-typo-label-lg transition-all duration-300 ease-in-out ${
                  activeTab === tab
                    ? "bg-surface-secondary text-momo-blue dark:text-white shadow-momo-sm"
                    : "text-text-secondary hover:text-momo-blue/70 dark:hover:text-white"
                }`}
              >
                {tab === "single" ? "Single Transactions" : "Bulk Transactions"}{" "}
                <span
                  className={`w-20 h-20 rounded-full momo-typo-label-md flex items-center justify-center transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-momo-yellow text-momo-blue"
                      : "bg-surface-secondary text-text-secondary"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
          <Button
                    label="View all"
                    platform="desktop-web"
                    size="xsmall"
                    variant="primary"
                    className="normal-case"
                  />
      </div>

      {/* Table Header Structure Grid */}
      <div className="bg-surface-default rounded-xl px-(--spacing-momo-card-padding) py-(--spacing-momo-element-spacing) grid grid-cols-6 gap-(--spacing-momo-element-spacing) text-center momo-typo-label-lg text-momo-blue dark:text-white border border-border-default">
        <div>Date Created</div>
        <div>Reference</div>
        <div>Transaction ID</div>
        <div>Type</div>
        <div>Status</div>
        <div>Amount</div>
      </div>

      {/* Dynamic Rows Container Wrapper */}
      <div className="space-y-12 max-h-[320px] overflow-y-auto pr-1">
        {currentRows.length > 0 ? (
          currentRows.map((row) => (
            <div
              key={row.txId}
              className="bg-surface-default px-(--spacing-momo-card-padding) py-(--spacing-momo-element-spacing) grid grid-cols-6 gap-(--spacing-momo-element-spacing) text-center momo-typo-label-lg text-text-secondary rounded-xl border border-border-default shadow-momo-sm hover:border-momo-blue/30 transition-all duration-200"
            >
              <div className="text-text-secondary">{row.date}</div>
              <div className="tracking-tight text-text-default">
                {row.reference}
              </div>
              <div className="text-text-secondary text-[11px] truncate">
                {row.txId}
              </div>
              <div className="truncate">{row.type}</div>
              <div className="flex items-center justify-center" >
                <span
                  className={`px-10 py-1 rounded-full text-[10px] border ${getStatusBadgeClass(row.status)}`}
                >
                  {row.status}
                </span>
              </div>
              <div className="text-text-default tracking-tight">
                {row.amount}
              </div>
            </div>
          ))
        ) : (
          <div className="bg-surface-secondary border border-dashed border-border-default rounded-momo-card p-6 text-center momo-typo-label-md text-text-secondary flex items-center justify-center gap-2">
            <Info className="w-4 h-4" /> No pending approvals.
          </div>
        )}
      </div>
    </div>
  );
}
