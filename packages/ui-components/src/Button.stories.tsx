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
  },
  args: {
    label: "Label",
    platform: "mobile",
    size: "large",
    variant: "primary",
    disabled: false,
    fullWidth: false,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const sizes = ["large", "small", "xsmall"] as const;
const variants = ["primary", "secondary", "tertiary"] as const;
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
    <div className="space-y-10 p-6">
      {(Object.keys(platformSizes) as Array<"mobile" | "desktop-web">).map(
        (platform) => (
          <section key={platform} className="space-y-6">
            <h3 className="text-base font-semibold uppercase tracking-wide text-momo-blue">
              {platform}
            </h3>
            {platformSizes[platform].map((size) => (
              <div key={`${platform}-${size}`} className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-momo-yellow">
                  {size}
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {variants.map((variant) => (
                    <div key={`${platform}-${size}-${variant}`} className="space-y-3">
                      <div className={specWidthClass[platform][size]}>
                        <Button
                          {...args}
                          platform={platform}
                          size={size}
                          variant={variant}
                          disabled={false}
                          fullWidth={platform === "desktop-web" || size === "large"}
                        />
                      </div>
                      <div className={specWidthClass[platform][size]}>
                        <Button
                          {...args}
                          platform={platform}
                          size={size}
                          variant={variant}
                          disabled
                          label="Label"
                          fullWidth={platform === "desktop-web" || size === "large"}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        )
      )}
    </div>
  ),
};

export const PlacementExamples: Story = {
  name: "Placement Examples",
  render: (args) => (
    <div className="max-w-md space-y-4 p-6">
      <div className="rounded-xl border border-border-default bg-card-surface p-4">
        <p className="mb-4 text-sm text-momo-blue">Single primary action</p>
        <Button {...args} platform="mobile" fullWidth />
      </div>
      <div className="rounded-xl border border-border-default bg-card-surface p-4">
        <p className="mb-4 text-sm text-momo-yellow">Primary + secondary actions</p>
        <div className="flex gap-3">
          <Button {...args} platform="mobile" fullWidth />
          <Button {...args} platform="mobile" fullWidth variant="secondary" />
        </div>
      </div>
    </div>
  ),
};
