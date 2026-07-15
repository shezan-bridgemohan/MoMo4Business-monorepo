import { Button } from "./Button";

export interface TransactionQuickItem {
  id: string;
  reference: string;
  subtitle: string;
  amount: string;
  direction: "in" | "out";
}

export interface TransactionQuickAction {
  id: string;
  label: string;
  variant?: "primary" | "secondary";
}

export interface TransactionsQuickViewProps {
  title?: string;
  viewAllLabel?: string;
  items: TransactionQuickItem[];
  actions?: TransactionQuickAction[];
  onViewAll?: () => void;
  onActionClick?: (id: string) => void;
  className?: string;
}

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const defaultActions: TransactionQuickAction[] = [
  { id: "buy", label: "Buy", variant: "secondary" },
  { id: "pay", label: "Pay", variant: "secondary" },
  { id: "transfer", label: "Transfer", variant: "primary" },
];

export function TransactionsQuickView({
  title = "Transactions",
  viewAllLabel = "View All",
  items,
  actions = defaultActions,
  onViewAll,
  onActionClick,
  className,
}: Readonly<TransactionsQuickViewProps>) {
  return (
    <div className={cn("space-y-(--spacing-momo-card-padding)", className)}>
      <div className="rounded-[24px] border border-border-default bg-surface-secondary px-(--spacing-momo-card-padding) py-(--spacing-momo-card-padding)">
        <div className="flex items-center justify-between">
          <h3 className="momo-typo-body-lg text-text-default">{title}</h3>
          <button
            type="button"
            onClick={onViewAll}
            className="momo-typo-label-md text-momo-blue dark:text-white underline-offset-2 hover:underline"
          >
            {viewAllLabel}
          </button>
        </div>

        <div className="mt-(--spacing-momo-element-spacing) space-y-(--spacing-momo-element-spacing)">
          {items.map((item) => {
            const positive = item.direction === "in";

            return (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-10 min-w-0">
                  <span
                    className={cn(
                      "h-20 w-20 rounded-full flex items-center justify-center momo-typo-label-sm-medium",
                      positive
                        ? "text-status-positive bg-status-positive/15"
                        : "text-status-danger bg-status-danger/15",
                    )}
                  >
                    {positive ? "↓" : "↑"}
                  </span>
                  <div className="min-w-0">
                    <p className="momo-typo-body-md text-text-default truncate">{item.reference}</p>
                    <p className="momo-typo-label-md text-text-secondary truncate">{item.subtitle}</p>
                  </div>
                </div>

                <span
                  className={cn(
                    "momo-typo-body-md font-semibold whitespace-nowrap",
                    positive ? "text-status-positive" : "text-status-danger",
                  )}
                >
                  {item.amount}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex gap-(--spacing-12)">
        {actions.map((action) => (
          <Button
            key={action.id}
            label={action.label}
            platform="desktop-web"
            size="xsmall"
            variant={action.variant ?? "secondary"}
            fullWidth
            className="normal-case"
            onClick={() => onActionClick?.(action.id)}
          />
        ))}
      </div>
    </div>
  );
}