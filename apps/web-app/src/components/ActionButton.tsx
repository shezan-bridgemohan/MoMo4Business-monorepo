import type { LucideIcon } from "lucide-react";

interface ActionButtonProps {
  label: string;
  icon: LucideIcon;
}

export default function ActionButton({ label, icon }: ActionButtonProps) {
  const Icon = icon;

  return (
    <button className="bg-momo-blue w-80 h-80 rounded-momo-card flex flex-col items-center justify-center gap-12 text-center text-white transition-all duration-300 ease-out shadow-momo-md group hover:bg-momo-darkText hover:-translate-y-6 hover:shadow-momo-lg active:scale-95">
      {/* Icon floats upwards elegantly on group hover */}
      <Icon className="w-24 h-24 transition-transform duration-300 ease-out group-hover:scale-150 group-hover:-translate-y-2" />
      <span className="text-[11px] font-black leading-tight max-w-[70px] tracking-wide transition-colors group-hover:text-momo-yellow">
        {label}
      </span>
    </button>
  );
}
