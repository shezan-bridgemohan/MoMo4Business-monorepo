import type { Meta, StoryObj } from "@storybook/react";

import { TransactionsQuickView } from "./TransactionsQuickView";

const meta = {
  title: "Components/TransactionsQuickView",
  component: TransactionsQuickView,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  args: {
    items: [
      {
        id: "1",
        reference: "0776220002",
        subtitle: "9:37 PM • Money In",
        amount: "+ ZMW 67",
        direction: "in",
      },
      {
        id: "2",
        reference: "0776220002",
        subtitle: "9:37 PM • Money Out",
        amount: "- ZMW 67",
        direction: "out",
      },
    ],
  },
} satisfies Meta<typeof TransactionsQuickView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="max-w-[420px] text-text-default">
      <h2 className="momo-typo-heading-sm text-momo-blue dark:text-white mb-3">Transactions Quick View</h2>
      <TransactionsQuickView {...args} />
    </div>
  ),
};

export const WithoutActions: Story = {
  args: {
    actions: [],
  },
  render: (args) => (
    <div className="max-w-[420px] text-text-default">
      <h2 className="momo-typo-heading-sm text-momo-blue dark:text-white mb-3">Transactions Only</h2>
      <TransactionsQuickView {...args} />
    </div>
  ),
};