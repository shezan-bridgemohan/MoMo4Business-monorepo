import type { ButtonHTMLAttributes, MouseEventHandler } from "react";

export type ButtonSize = "large" | "small" | "xsmall";
export type ButtonVariant = "primary" | "secondary" | "tertiary";
export type ButtonPlatform = "mobile" | "desktop-web";
export type ButtonState = "active" | "hover-focus" | "press" | "inactive";

export interface ButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick"
> {
  label: string;
  platform?: ButtonPlatform;
  size?: ButtonSize;
  variant?: ButtonVariant;
  state?: ButtonState;
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
    // Compact desktop action size for dense toolbars/action trays
    xsmall: "h-[40px] px-[20px] py-[4px]",
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
    xsmall: "text-[12px] leading-4 font-medium uppercase",
  },
};

const variantInteractiveClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-button-primary bg-button-primary text-button-primary-text shadow-momo-sm hover:bg-button-primary-hover active:bg-button-primary-press active:text-button-primary-press-text",
  secondary:
    "border-2 border-button-secondary bg-button-secondary text-button-secondary-text hover:border-button-secondary-hover hover:bg-button-secondary-hover hover:text-button-secondary-hover-text active:border-[2.4px] active:border-button-secondary-press active:bg-button-secondary-press active:text-button-secondary-press-text",
  tertiary:
    "border border-transparent bg-button-tertiary text-button-tertiary-text hover:text-button-tertiary-hover-text active:text-button-tertiary-press-text",
};

const variantStateClasses: Record<
  ButtonVariant,
  Record<ButtonState, string>
> = {
  primary: {
    active:
      "border border-button-primary bg-button-primary text-button-primary-text shadow-momo-sm",
    "hover-focus":
      "border border-button-primary bg-button-primary-hover text-button-primary-text shadow-momo-sm",
    press:
      "border border-button-primary bg-button-primary-press text-button-primary-press-text shadow-momo-sm",
    inactive:
      "border border-button-primary-inactive bg-button-primary-inactive text-button-primary-inactive-text shadow-none",
  },
  secondary: {
    active:
      "border-2 border-button-secondary bg-button-secondary text-button-secondary-text",
    "hover-focus":
      "border-2 border-button-secondary-hover bg-button-secondary-hover text-button-secondary-hover-text shadow-momo-sm",
    press:
      "border-[2.4px] border-button-secondary-press bg-button-secondary-press text-button-secondary-press-text",
    inactive:
      "border-2 border-button-secondary-inactive-border bg-button-secondary-inactive text-button-secondary-inactive-text shadow-none",
  },
  tertiary: {
    active:
      "border border-transparent bg-button-tertiary text-button-tertiary-text",
    "hover-focus":
      "border border-transparent bg-button-tertiary text-button-tertiary-hover-text",
    press:
      "border border-transparent bg-button-tertiary text-button-tertiary-press-text",
    inactive:
      "border border-transparent bg-button-tertiary text-button-tertiary-inactive-text shadow-none",
  },
};

export function Button({
  label,
  platform = "mobile",
  size = "large",
  variant = "primary",
  state,
  fullWidth = false,
  disabled = false,
  onClick,
  className,
  type = "button",
  ...rest
}: Readonly<ButtonProps>) {
  const computedState: ButtonState =
    state ?? (disabled ? "inactive" : "active");
  const useExplicitState = state !== undefined || disabled;
  const interactiveStateClass = variantInteractiveClasses[variant];
  const explicitStateClass = variantStateClasses[variant][computedState];
  const nonActiveStateClass =
    computedState !== "active" ? "pointer-events-none" : "";
  const resolvedVariantClass = useExplicitState
    ? `${explicitStateClass} ${nonActiveStateClass}`
    : interactiveStateClass;

  const classes = [
    "inline-flex items-center justify-center rounded-full text-center tracking-[0px] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary disabled:cursor-not-allowed",
    sizeContainerClasses[platform][size],
    sizeLabelClasses[platform][size],
    resolvedVariantClass,
    fullWidth ? "w-full min-w-0" : "w-auto",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || computedState === "inactive"}
      onClick={onClick}
      {...rest}
    >
      {label}
    </button>
  );
}
