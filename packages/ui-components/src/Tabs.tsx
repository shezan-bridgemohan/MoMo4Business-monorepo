import type { ReactNode } from "react";

export interface TabItem {
  value: string;
  label: ReactNode;
  count?: number;
}

export interface TabsProps {
  items: TabItem[];
  activeValue: string;
  onChange: (value: string) => void;
  className?: string;
  tabClassName?: string;
}

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Tabs({
  items,
  activeValue,
  onChange,
  className,
  tabClassName,
}: Readonly<TabsProps>) {
  return (
    <div className={cn("flex w-full items-center gap-0 bg-surface-secondary rounded-full p-4", className)}>
      {items.map((item) => {
        const isActive = item.value === activeValue;

        return (
          <button
            key={item.value}
            type="button"
            onClick={() => onChange(item.value)}
            className={cn(
              "flex-1 min-w-0 h-32 flex items-center justify-center gap-6 px-10 py-0 rounded-full momo-typo-label-lg font-medium transition-all duration-200 ease-out",
              isActive
                ? "bg-surface-default text-momo-blue  dark:text-white shadow-[0_1px_2px_rgba(0,0,0,0.08)]"
                : "text-text-secondary hover:text-momo-blue dark:hover:text-white",
              tabClassName,
            )}
            aria-pressed={isActive}
          >
            <span className="truncate">{item.label}</span>
            {typeof item.count === "number" ? (
              <span
                className={cn(
                  "min-w-20 h-20 px-2 rounded-full momo-typo-label-md flex items-center justify-center transition-all duration-200",
                  isActive
                    ? "bg-momo-yellow text-momo-blue"
                    : "bg-surface-secondary text-text-secondary",
                )}
              >
                {item.count}
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}