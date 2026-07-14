import type { MouseEventHandler } from "react";

export interface CardProps {
  title: string;
  description: string;
  highlighted: boolean;
  actionLabel: string;
  onActionButtonClick?: MouseEventHandler<HTMLButtonElement>;
}

export function Card({
  title,
  description,
  highlighted,
  actionLabel,
  onActionButtonClick,
}: Readonly<CardProps>) {
  return (
    <section
      className={[
        "flex h-full flex-col rounded-2xl border p-6 shadow-sm transition",
        highlighted
          ? "border-brand-primary bg-brand-surface"
          : "border-slate-200 bg-white",
      ].join(" ")}
    >
      <div className="space-y-3">
        <h3 className="text-lg font-semibold tracking-tight text-slate-900">
          {title}
        </h3>
        <p className="text-sm leading-6 text-slate-600">{description}</p>
      </div>

      <div className="mt-6 flex items-center justify-end">
        <button
          type="button"
          onClick={onActionButtonClick}
          className={[
            "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition",
            highlighted
              ? "bg-brand-primary text-white hover:opacity-90"
              : "bg-slate-900 text-white hover:bg-slate-700",
          ].join(" ")}
        >
          {actionLabel}
        </button>
      </div>
    </section>
  );
}
