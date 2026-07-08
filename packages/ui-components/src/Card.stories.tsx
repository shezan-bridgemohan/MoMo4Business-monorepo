import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    onActionButtonClick: { action: "action-button-click" },
  },
  args: {
    actionLabel: "Learn more",
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Simple card",
    description:
      "A clean card layout for standard content and lightweight actions.",
    highlighted: false,
  },
};

export const Highlighted: Story = {
  args: {
    title: "Highlighted card",
    description:
      "Use this presentation for elevated content or featured recommendations.",
    highlighted: true,
  },
};
