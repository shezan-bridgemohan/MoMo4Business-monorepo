import { Eye } from "lucide-react";

interface BalanceCardProps {
  title: string;
}

export default function BalanceCard({ title }: Readonly<BalanceCardProps>) {
  return (
    <div className="bg-surface-default px-6 py-4 rounded-[14px] border border-border-default shadow-momo-sm transition-colors">
      <p className="momo-typo-label-md text-text-secondary">{title}</p>
      <h2 className="momo-typo-heading-md text-momo-blue mt-1 flex items-center gap-2">
        <Eye className="w-4 h-4 opacity-70" />
        UGX <span className="tracking-tight">150,000,000</span>
      </h2>
    </div>
  );
}
