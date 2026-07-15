import type { Meta, StoryObj } from "@storybook/react";

import { Table } from "./Table";

const meta = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  args: {
    columns: [
      { label: "Date Created" },
      { label: "Reference" },
      { label: "Transaction ID" },
      { label: "Type" },
      { label: "Status" },
      { label: "Amount" },
    ],
    rows: [
      {
        id: "TXN8829102",
        cells: [
          { content: "2026-07-06" },
          { content: "REF-9921A" },
          { content: "TXN8829102" },
          { content: "Utility Bill" },
          {
            content: (
              <span className="px-10 py-1 rounded-full text-[10px] bg-status-positive/15 text-status-positive border border-status-positive/40">
                Approved
              </span>
            ),
            className: "flex items-center justify-center",
          },
          { content: "UGX 45,000" },
        ],
      },
      {
        id: "TXN0021983",
        cells: [
          { content: "2026-07-06" },
          { content: "REF-1092B" },
          { content: "TXN0021983" },
          { content: "Supplier Pay" },
          {
            content: (
              <span className="px-10 py-1 rounded-full text-[10px] bg-status-danger/15 text-status-danger border border-status-danger/40">
                Declined
              </span>
            ),
            className: "flex items-center justify-center",
          },
          { content: "UGX 1,200,000" },
        ],
      },
      {
        id: "BLK00291",
        cells: [
          { content: "2026-07-06" },
          { content: "BULK-JULY-A" },
          { content: "BLK00291" },
          { content: "Payroll (42 Recipients)" },
          {
            content: (
              <span className="px-10 py-1 rounded-full text-[10px] bg-momo-blue/15 text-momo-blue border border-momo-blue/40">
                Process
              </span>
            ),
            className: "flex items-center justify-center",
          },
          { content: "UGX 18,450,000" },
        ],
      },
    ],
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="min-h-screen bg-surface-secondary p-6 text-text-default">
      <div className="mx-auto max-w-[1368px] space-y-4">
        <div className="space-y-2">
          <h2 className="momo-typo-heading-sm text-momo-blue dark:text-white">Table / Transaction Approvals</h2>
          <p className="momo-typo-label-md text-text-secondary">
            Data table layout with fixed headers, card-like rows, and status badges for approval workflows.
          </p>
        </div>
        <Table {...args} bodyClassName="space-y-12 max-h-[320px] overflow-y-auto pr-1" />
      </div>
    </div>
  ),
};

export const EmptyState: Story = {
  args: {
    rows: [],
  },
  render: (args) => (
    <div className="min-h-screen bg-surface-secondary p-6 text-text-default">
      <div className="mx-auto max-w-[1368px] space-y-4">
        <div className="space-y-2">
          <h2 className="momo-typo-heading-sm text-momo-blue dark:text-white">Table / Empty State</h2>
          <p className="momo-typo-label-md text-text-secondary">
            Fallback content shown when no rows are available.
          </p>
        </div>
        <Table
          {...args}
          bodyClassName="space-y-12 max-h-[320px] overflow-y-auto pr-1"
          emptyState={<>No pending approvals.</>}
        />
      </div>
    </div>
  ),
};