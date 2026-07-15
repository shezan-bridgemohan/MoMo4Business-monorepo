import type { ReactNode } from "react";

export interface TableColumn {
  label: ReactNode;
  className?: string;
}

export interface TableCell {
  content: ReactNode;
  className?: string;
}

export interface TableRow {
  id: string;
  cells: TableCell[];
  className?: string;
}

export interface TableProps {
  columns: TableColumn[];
  rows: TableRow[];
  emptyState?: ReactNode;
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  rowClassName?: string;
}

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const baseHeaderCellClasses =
  "bg-card-surface momo-typo-label-md font-medium text-brand-primary px-20 py-6 border-y border-border-default";

const baseBodyCellClasses =
  "bg-card-surface momo-typo-label-md text-text-secondary px-20 py-6 border-y border-border-default";

const firstCellClasses = "rounded-l-lg border-l";

const lastCellClasses = "rounded-r-lg border-r";

export function Table({
  columns,
  rows,
  emptyState,
  className,
  headerClassName,
  bodyClassName,
  rowClassName,
}: Readonly<TableProps>) {
  return (
    <div className={cn("space-y-(--spacing-momo-container-gap)", className)}>
      <div className={cn("overflow-hidden rounded-lg", bodyClassName)}>
        {rows.length > 0 ? (
          <table className="w-full table-fixed border-separate border-spacing-y-6">
            <colgroup>
              {columns.map((column, index) => (
                <col key={index} className={column.className} />
              ))}
            </colgroup>
            <thead className={cn("sticky top-0 z-20", headerClassName)}>
              <tr>
                {columns.map((column, index) => (
                  <th
                    key={index}
                    scope="col"
                    className={cn(
                      baseHeaderCellClasses,
                      index === 0 ? firstCellClasses : undefined,
                      index === columns.length - 1 ? lastCellClasses : undefined,
                      column.className,
                    )}
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.id}
                  className={cn(
                    "shadow-momo-sm",
                    rowClassName,
                    row.className,
                  )}
                >
                  {row.cells.map((cell, index) => (
                    <td
                      key={`${row.id}-${index}`}
                      className={cn(
                        baseBodyCellClasses,
                        index === 0 ? firstCellClasses : undefined,
                        index === row.cells.length - 1 ? lastCellClasses : undefined,
                        cell.className,
                      )}
                    >
                      {cell.content}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="bg-surface-secondary border border-dashed border-border-default rounded-momo-card p-6 text-center momo-typo-label-md text-text-secondary flex items-center justify-center gap-2">
            {emptyState}
          </div>
        )}
      </div>
    </div>
  );
}