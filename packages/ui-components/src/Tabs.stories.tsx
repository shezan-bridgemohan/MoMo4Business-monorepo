import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "./Tabs";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  args: {
    items: [
      { value: "single", label: "Single Transactions", count: 5 },
      { value: "bulk", label: "Bulk Transactions", count: 5 },
    ],
    activeValue: "single",
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [active, setActive] = useState(args.activeValue);

    return (
      <div className="max-w-[760px] space-y-4 text-text-default">
        <div className="space-y-2">
          <h2 className="momo-typo-heading-sm text-momo-blue dark:text-white">Tabs / Transaction Mode Switcher</h2>
          <p className="momo-typo-label-md text-text-secondary">
            Rounded segmented tab control with inline count badges.
          </p>
        </div>
        <div className="h-[36px] rounded-full bg-surface-secondary p-2">
          <Tabs {...args} activeValue={active} onChange={setActive} />
        </div>
      </div>
    );
  },
};

export const ThreeTabs: Story = {
  args: {
    items: [
      { value: "single", label: "Single", count: 4 },
      { value: "bulk", label: "Bulk", count: 3 },
      { value: "scheduled", label: "Scheduled", count: 2 },
    ],
    activeValue: "bulk",
  },
  render: (args) => {
    const [active, setActive] = useState(args.activeValue);

    return (
      <div className="max-w-[760px] space-y-4 text-text-default">
        <div className="space-y-2">
          <h2 className="momo-typo-heading-sm text-momo-blue dark:text-white">Tabs / Three Item Variant</h2>
          <p className="momo-typo-label-md text-text-secondary">
            Example of extending the same tab pattern to three options.
          </p>
        </div>
        <div className="h-[36px] rounded-full bg-surface-secondary p-2">
          <Tabs {...args} activeValue={active} onChange={setActive} />
        </div>
      </div>
    );
  },
};