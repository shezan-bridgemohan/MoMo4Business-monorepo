import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "button-click" },
    platform: {
      control: "select",
      options: ["mobile", "desktop-web"],
    },
    size: {
      control: "select",
      options: ["large", "small", "xsmall"],
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    state: {
      control: "select",
      options: ["active", "hover-focus", "press", "inactive"],
    },
  },
  args: {
    label: "Label",
    platform: "mobile",
    size: "large",
    variant: "primary",
    state: "active",
    disabled: false,
    fullWidth: false,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const sizes = ["large", "small", "xsmall"] as const;
const variants = ["primary", "secondary", "tertiary"] as const;
const states = ["active", "hover-focus", "press", "inactive"] as const;
const platformSizes = {
  mobile: sizes,
  "desktop-web": ["large", "small"] as const,
};

const specWidthClass: Record<"mobile" | "desktop-web", Record<string, string>> = {
  mobile: {
    large: "w-[280px]",
    small: "w-auto",
    xsmall: "w-auto",
  },
  "desktop-web": {
    large: "w-[265px]",
    small: "w-[130px]",
    xsmall: "w-[130px]",
  },
};

function renderStateColumn(
  args: Story["args"],
  platform: "mobile" | "desktop-web",
  size: "large" | "small" | "xsmall",
  variant: "primary" | "secondary" | "tertiary",
) {
  return (
    <div key={`${platform}-${size}-${variant}`} className="space-y-2">
      {states.map((state) => (
        <div
          key={`${platform}-${size}-${variant}-${state}`}
          className="space-y-1"
        >
          <p className="text-[11px] uppercase tracking-wide text-text-secondary">
            {state}
          </p>
          <div className={specWidthClass[platform][size]}>
            <Button
              {...args}
              platform={platform}
              size={size}
              variant={variant}
              state={state}
              disabled={state === "inactive"}
              fullWidth={platform === "desktop-web" || size === "large"}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function renderSizeSection(
  args: Story["args"],
  platform: "mobile" | "desktop-web",
  size: "large" | "small" | "xsmall",
) {
  return (
    <div key={`${platform}-${size}`} className="space-y-3">
      <h4 className="text-sm font-semibold uppercase tracking-wide text-momo-yellow">
        {size}
      </h4>
      <div className="grid grid-cols-3 gap-4">
        {variants.map((variant) =>
          renderStateColumn(args, platform, size, variant),
        )}
      </div>
    </div>
  );
}

export const Default: Story = {};

export const HighlightedSecondary: Story = {
  args: {
    variant: "secondary",
    label: "Secondary",
  },
};

export const Matrix: Story = {
  name: "Spec Matrix",
  render: (args) => (
    <div className="space-y-10 p-6 text-text-default">
      <div className="space-y-2">
        <h2 className="momo-typo-heading-sm text-momo-blue dark:text-white">
          Button Spec Matrix
        </h2>
        <p className="momo-typo-label-md text-text-secondary">
          Platform, size, variant and state combinations aligned to the Neo Library button specification.
        </p>
      </div>
      {(Object.keys(platformSizes) as Array<"mobile" | "desktop-web">).map(
        (platform) => (
          <section key={platform} className="space-y-6">
            <h3 className="momo-typo-label-sm-medium uppercase tracking-wide text-text-secondary">
              {platform}
            </h3>
            {platformSizes[platform].map((size) =>
              renderSizeSection(args, platform, size),
            )}
          </section>
        ),
      )}
    </div>
  ),
};

export const PlacementExamples: Story = {
  name: "Placement Examples",
  render: (args) => (
    <div className="max-w-md space-y-4 p-6 text-text-default">
      <div className="space-y-2">
        <h2 className="momo-typo-heading-sm text-momo-blue dark:text-white">
          Button Placement Examples
        </h2>
        <p className="momo-typo-label-md text-text-secondary">
          Practical button groupings for action bars and card-level interactions.
        </p>
      </div>
      <div className="rounded-xl border border-border-default bg-card-surface p-4">
        <p className="mb-4 momo-typo-label-md text-momo-blue dark:text-white">Single primary action</p>
        <Button {...args} platform="mobile" fullWidth />
      </div>
      <div className="rounded-xl border border-border-default bg-card-surface p-4">
        <p className="mb-4 momo-typo-label-md text-momo-yellow">Primary + secondary actions</p>
        <div className="flex gap-3">
          <Button {...args} platform="mobile" fullWidth />
          <Button {...args} platform="mobile" fullWidth variant="secondary" />
        </div>
      </div>
    </div>
  ),
};
