import { Eye } from "lucide-react";

interface BalanceCardProps {
  title: string;
}

export default function BalanceCard({ title }: BalanceCardProps) {
  return (
    /* Replaced shadow-sm and border-slate-100 with theme-tokens */
    <div className="bg-white dark:bg-slate-900 p-24 rounded-momo-card shadow-momo-sm transition-colors">
      <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">
        {title}
      </p>
      <h2 className="text-2xl font-black text-momo-blue dark:text-white mt-4 flex items-center gap-10">
        UGX <span className="tracking-widest">900.00</span>
        <Eye className="w-16 h-16 opacity-70" />
      </h2>
    </div>
  );
}
