import { BotMessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

type WvcLogoProps = {
  className?: string
}

export function WvcLogo({ className }: WvcLogoProps) { 
  return (
    <div className={cn("flex items-center gap-2 bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-4 py-2 transition-all duration-300 cursor-pointer group shadow-[0_0_10px_rgba(6,182,212,0.1)] hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]", className)}>
      <BotMessageSquare className="w-5 h-5 group-hover:animate-pulse" />
      <span className="font-default font-extrabold uppercase text-xs tracking-[0.2em] pt-0.5">
        Secure Chat
      </span>
    </div>
  ); 
}
