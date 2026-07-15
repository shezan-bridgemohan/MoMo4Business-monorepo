import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    variant: "solid-no-shadow",
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SolidVariants: Story = {
  render: () => (
    <div className="min-h-screen bg-surface-secondary p-10 text-text-default">
      <div className="mx-auto max-w-[1120px] space-y-6">
        <div className="space-y-2">
          <h2 className="momo-typo-heading-sm text-momo-blue dark:text-white">Base Card / Solid Variants</h2>
          <p className="momo-typo-label-md text-text-secondary">
            Foundational solid card styles: no shadow, with shadow, default border and selected border.
          </p>
        </div>
        <div className="flex flex-wrap gap-8">
          <Card variant="solid-no-shadow" aria-label="No Shadow" />
          <Card variant="solid-with-shadow" aria-label="With Shadow" />
          <Card variant="solid-border-default" aria-label="Border Default" />
          <Card variant="solid-border-selected" aria-label="Border Selected" />
        </div>
      </div>
    </div>
  ),
};

export const GlassCard: Story = {
  render: () => (
    <div className="min-h-screen bg-[linear-gradient(120deg,var(--color-momo-blue)_10%,var(--token-bg-brand-default-50)_55%,var(--token-bg-brand-default-150)_100%)] p-10 text-white">
      <div className="mx-auto max-w-[800px] space-y-6">
        <div className="space-y-2">
          <h2 className="momo-typo-heading-sm text-white">Base Card / Glass Variant</h2>
          <p className="momo-typo-label-md text-white/85">
            Use glass cards as translucent overlays when content underneath should remain partially visible.
          </p>
        </div>
        <div className="flex flex-wrap gap-8">
          <Card variant="glass" aria-label="Glass without content" />
          <Card variant="glass" className="flex flex-col items-center justify-center gap-2 text-center" aria-label="Glass with content">
            <div className="w-10 h-10 rounded-full bg-momo-yellow text-momo-blue flex items-center justify-center momo-typo-heading-sm">•</div>
            <p className="momo-typo-label-md text-white">Title</p>
            <p className="momo-typo-caption-md text-white/85">Description</p>
          </Card>
        </div>
      </div>
    </div>
  ),
};
