import type { ReactNode } from "react";

export interface WebNavigationItemProps {
  label: string;
  icon: ReactNode;
  isActive?: boolean;
  isCollapsed?: boolean;
  hasChevron?: boolean;
  isChevronOpen?: boolean;
  onClick?: () => void;
  className?: string;
}

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function WebNavigationItem({
  label,
  icon,
  isActive = false,
  isCollapsed = false,
  hasChevron = false,
  isChevronOpen = false,
  onClick,
  className,
}: Readonly<WebNavigationItemProps>) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative h-12 w-full px-4 rounded-none text-left transition-colors duration-200",
        "flex items-center justify-between gap-3",
        isActive
          ? "bg-momo-blue text-momo-yellow"
          : "bg-transparent text-momo-blue dark:text-white hover:bg-surface-secondary",
        className,
      )}
    >
      {isActive ? (
        <span className="absolute left-0 top-0 h-full w-1 bg-momo-yellow" aria-hidden="true" />
      ) : null}

      <span className="flex items-center gap-3 min-w-0">
        <span className="w-5 h-5 inline-flex items-center justify-center shrink-0">{icon}</span>
        <span
          className={cn(
            "momo-typo-body-md whitespace-nowrap transition-opacity duration-200",
            isCollapsed ? "opacity-0 pointer-events-none w-0" : "opacity-100",
            isActive ? "text-momo-yellow" : "text-current",
          )}
        >
          {label}
        </span>
      </span>

      {hasChevron ? (
        <span
          className={cn(
            "text-current/80 transition-all duration-200",
            isCollapsed ? "scale-0 opacity-0" : "scale-100 opacity-100",
            isChevronOpen ? "rotate-180" : "rotate-0",
          )}
          aria-hidden="true"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      ) : null}
    </button>
  );
}