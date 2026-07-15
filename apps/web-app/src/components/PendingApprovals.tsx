import { Button, Table, Tabs } from "@shared/ui-components";
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

  const tableColumns = [
    { label: "Date Created", className: "w-[14%]" },
    { label: "Reference", className: "w-[17%]" },
    { label: "Transaction ID", className: "w-[18%]" },
    { label: "Type", className: "w-[25%]" },
    { label: "Status", className: "w-[13%]" },
    { label: "Amount", className: "w-[13%]" },
  ];

  const tableRows = currentRows.map((row) => ({
    id: row.txId,
    cells: [
      { content: row.date, className: "text-text-secondary" },
      { content: row.reference, className: "tracking-tight text-text-default" },
      { content: row.txId, className: "text-text-secondary text-[11px] truncate" },
      { content: row.type, className: "truncate" },
      {
        content: (
          <span
            className={`px-10 py-1 rounded-full text-[10px] border ${getStatusBadgeClass(row.status)}`}
          >
            {row.status}
          </span>
        ),
        className: "flex items-center justify-center",
      },
      { content: row.amount, className: "text-text-default tracking-tight" },
    ],
  }));

  const tabItems = [
    { value: "single", label: "Single Transactions", count: singleData.length },
    { value: "bulk", label: "Bulk Transactions", count: bulkData.length },
  ];

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
      <div className="flex items-center justify-between gap-(--spacing-momo-card-padding)  px-(--spacing-momo-card-padding) pl-0 rounded-full">
        <Tabs
          items={tabItems}
          activeValue={activeTab}
          onChange={setActiveTab}
          className="max-w-[640px]"
        />
        <Button
          label="View All"
          platform="desktop-web"
          size="xsmall"
          variant="primary"
          className="normal-case"
        />
      </div>

      <Table
        columns={tableColumns}
        rows={tableRows}
        emptyState={
          <>
            <Info className="w-4 h-4" /> No pending approvals.
          </>
        }
        bodyClassName="space-y-12 pr-1"
      />
    </div>
  );
}
