import type { Meta, StoryObj } from "@storybook/react";

import { WebNavigationItem } from "./WebNavigationItem";

function NavIcon({ glyph }: Readonly<{ glyph: string }>) {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-current/30 text-[10px] font-medium">
      {glyph}
    </span>
  );
}

const meta = {
  title: "Components/WebNavigationItem",
  component: WebNavigationItem,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof WebNavigationItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TopNavigationStates: Story = {
  render: () => (
    <div className="max-w-[320px] rounded-[24px] border border-border-default bg-surface-default p-5 shadow-momo-sm space-y-1">
      <h2 className="momo-typo-heading-sm text-momo-blue dark:text-white pb-2">Web Navigation / Top States</h2>
      <WebNavigationItem label="Home" icon={<NavIcon glyph="H" />} isActive />
      <WebNavigationItem label="Transfers" icon={<NavIcon glyph="T" />} hasChevron />
      <WebNavigationItem label="Transact" icon={<NavIcon glyph="X" />} hasChevron isChevronOpen />
      <WebNavigationItem label="Profile" icon={<NavIcon glyph="P" />} />
    </div>
  ),
};

export const FooterStates: Story = {
  render: () => (
    <div className="max-w-[320px] rounded-[24px] border border-border-default bg-surface-default p-5 shadow-momo-sm space-y-1">
      <h2 className="momo-typo-heading-sm text-momo-blue dark:text-white pb-2">Web Navigation / Footer States</h2>
      <WebNavigationItem label="Contact Customer Care" icon={<NavIcon glyph="C" />} />
      <WebNavigationItem label="Terms & Conditions" icon={<NavIcon glyph="?" />} isActive />
      <WebNavigationItem label="Privacy Policy" icon={<NavIcon glyph="S" />} />
      <WebNavigationItem label="Logout" icon={<NavIcon glyph="L" />} />
    </div>
  ),
};

export const Collapsed: Story = {
  render: () => (
    <div className="w-[84px] rounded-[24px] border border-border-default bg-surface-default p-3 shadow-momo-sm space-y-2">
      <WebNavigationItem label="Home" icon={<NavIcon glyph="H" />} isActive isCollapsed className="px-2" />
      <WebNavigationItem label="Transfers" icon={<NavIcon glyph="T" />} hasChevron isCollapsed className="px-2" />
      <WebNavigationItem label="Transact" icon={<NavIcon glyph="X" />} hasChevron isCollapsed className="px-2" />
      <WebNavigationItem label="Profile" icon={<NavIcon glyph="P" />} isCollapsed className="px-2" />
      <div className="border-t border-border-default pt-2 mt-2">
        <WebNavigationItem label="Support" icon={<NavIcon glyph="C" />} isCollapsed className="px-2" />
      </div>
    </div>
  ),
};