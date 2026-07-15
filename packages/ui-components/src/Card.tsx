import type { HTMLAttributes, ReactNode } from "react";

export type CardVariant =
  | "solid-no-shadow"
  | "solid-with-shadow"
  | "solid-border-default"
  | "solid-border-selected"
  | "glass";

export interface CardProps extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  children?: ReactNode;
  variant?: CardVariant;
  minHeight?: number;
  className?: string;
}

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const baseCardClasses =
  "rounded-[10px] p-[20px] min-w-[280px] bg-[color:var(--token-card-bg-default)] transition-colors duration-200";

const variantClasses: Record<CardVariant, string> = {
  "solid-no-shadow": "border border-transparent",
  "solid-with-shadow": "border border-transparent shadow-momo-sm",
  "solid-border-default": "border border-[color:var(--token-card-border-default)]",
  "solid-border-selected": "border border-momo-blue",
  glass:
    "border border-white/40 bg-white/15 backdrop-blur-[12px] shadow-[0_8px_24px_rgba(0,0,0,0.08)]",
};

export function Card({
  children,
  variant = "solid-no-shadow",
  minHeight = 110,
  className,
  ...rest
}: Readonly<CardProps>) {
  return (
    <section
      className={cn(baseCardClasses, variantClasses[variant], className)}
      style={{ minHeight, ...(rest.style ?? {}) }}
      {...rest}
    >
      {children}
    </section>
  );
}
