import type { HTMLAttributes, TableHTMLAttributes, TdHTMLAttributes } from 'react';

export function Table({ children, ...props }: TableHTMLAttributes<HTMLTableElement>) {
  return <table {...props}>{children}</table>;
}

export function TableBody({ children, ...props }: HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody {...props}>{children}</tbody>;
}

export function TableRow({ children, className, ...props }: HTMLAttributes<HTMLTableRowElement>) {
  return <tr className={className} {...props}>{children}</tr>;
}

export function TableCell({ children, className, ...props }: TdHTMLAttributes<HTMLTableCellElement>) {
  return <td className={className} {...props}>{children}</td>;
}
