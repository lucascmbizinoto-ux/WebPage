import type { HTMLAttributes, ImgHTMLAttributes } from 'react';

export function Avatar({ children, className }: HTMLAttributes<HTMLDivElement>) {
  return <div className={className}>{children}</div>;
}

export function AvatarImage({ src, alt }: ImgHTMLAttributes<HTMLImageElement>) {
  if (!src) return null;
  return <img src={src} alt={alt ?? ''} />;
}

export function AvatarFallback({ children, className }: HTMLAttributes<HTMLDivElement>) {
  return <div className={className}>{children}</div>;
}
