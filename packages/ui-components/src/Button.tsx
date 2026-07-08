import React from "react";
import type { ButtonHTMLAttributes, MouseEventHandler } from "react";

export type ButtonSize = "large" | "small" | "xsmall";
export type ButtonVariant = "primary" | "secondary" | "tertiary";
export type ButtonPlatform = "mobile" | "desktop-web";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  label: string;
  platform?: ButtonPlatform;
  size?: ButtonSize;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const sizeContainerClasses: Record<ButtonPlatform, Record<ButtonSize, string>> = {
  mobile: {
    // Figma mobile large: h40, px32, py4
    large: "h-[40px] px-[32px] py-[4px]",
    // Figma mobile small: h40, px20, py4
    small: "h-[40px] px-[20px] py-[4px]",
    // Figma mobile extra-small: h28, px20, py4
    xsmall: "h-[28px] min-w-[69px] px-[20px] py-[4px]",
  },
  "desktop-web": {
    // Figma desktop large: h55, px32, py4
    large: "h-[55px] px-[32px] py-[4px]",
    // Figma desktop small: h55, px24, py4
    small: "h-[55px] px-[24px] py-[4px]",
    // Desktop spec exposes small/large variants; xsmall falls back to small dimensions
    xsmall: "h-[55px] px-[24px] py-[4px]",
  },
};

const sizeLabelClasses: Record<ButtonPlatform, Record<ButtonSize, string>> = {
  mobile: {
    large: "text-[14px] leading-[18px] font-medium uppercase",
    small: "text-[14px] leading-[18px] font-medium uppercase",
    xsmall: "text-[12px] leading-4 font-normal normal-case",
  },
  "desktop-web": {
    large: "text-base leading-6 font-medium uppercase",
    small: "text-[14px] leading-[18px] font-medium uppercase",
    xsmall: "text-[14px] leading-[18px] font-medium uppercase",
  },
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-button-primary bg-button-primary text-button-primary-text shadow-momo-sm hover:bg-button-primary-hover active:bg-button-primary-press active:text-button-primary-press-text",
  secondary:
    "border-2 border-button-secondary bg-button-secondary text-button-secondary-text hover:border-button-secondary-hover hover:bg-button-secondary-hover hover:text-button-secondary-hover-text active:border-[2.4px] active:border-button-secondary-press active:bg-button-secondary-press active:text-button-secondary-press-text",
  tertiary:
    "border border-transparent bg-button-tertiary text-button-tertiary-text hover:text-button-tertiary-hover-text active:text-button-tertiary-press-text",
};

export function Button({
  label,
  platform = "mobile",
  size = "large",
  variant = "primary",
  fullWidth = false,
  disabled = false,
  onClick,
  className,
  type = "button",
  ...rest
}: Readonly<ButtonProps>) {
  const classes = [
    "inline-flex items-center justify-center rounded-full text-center tracking-[0px] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary disabled:cursor-not-allowed disabled:border-border-default disabled:bg-surface-secondary disabled:text-text-secondary disabled:shadow-none disabled:opacity-60",
    sizeContainerClasses[platform][size],
    sizeLabelClasses[platform][size],
    variantClasses[variant],
    fullWidth ? "w-full min-w-0" : "w-auto",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {label}
    </button>
  );
}
