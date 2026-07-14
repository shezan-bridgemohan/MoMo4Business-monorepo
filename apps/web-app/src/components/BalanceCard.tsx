import { Eye } from "lucide-react";

interface BalanceCardProps {
  title: string;
}

export default function BalanceCard({ title }: Readonly<BalanceCardProps>) {
  return (
    <div className="bg-surface-default px-[var(--layout-content-padding-mobile)] md:px-[var(--layout-content-padding-tablet)] xl:px-[var(--layout-content-padding-desktop)] py-[var(--spacing-momo-card-padding)] rounded-[14px] border border-border-default shadow-momo-sm transition-colors">
      <p className="momo-typo-label-md text-text-secondary">{title}</p>
      <h2 className="momo-typo-heading-md text-momo-blue dark:text-white mt-1 flex items-center gap-2">
        <Eye className="w-4 h-4 opacity-70" />
        UGX <span className="tracking-tight">150,000,000</span>
      </h2>
    </div>
  );
}
