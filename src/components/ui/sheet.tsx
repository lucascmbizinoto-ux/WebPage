import * as React from "react"
import { cn } from "@/lib/utils"

const SheetContext = React.createContext<{ open: boolean, onOpenChange: (open: boolean) => void }>({ open: false, onOpenChange: () => {} })

type SheetProps = {
  children: React.ReactNode
  onOpenChange: (open: boolean) => void
  open: boolean
}

type SheetTriggerProps = {
  asChild?: boolean
  children: React.ReactElement<{ onClick?: React.MouseEventHandler<HTMLElement> }>
}

type SheetContentProps = React.HTMLAttributes<HTMLDivElement> & {
  side?: "left" | "right"
}

type SheetTitleProps = React.HTMLAttributes<HTMLHeadingElement>

export const Sheet = ({ children, open, onOpenChange }: SheetProps) => {
  return <SheetContext.Provider value={{ open, onOpenChange }}>{children}</SheetContext.Provider>
}

export const SheetTrigger = ({ children }: SheetTriggerProps) => {
  const { open, onOpenChange } = React.useContext(SheetContext)
  return React.cloneElement(children, {
    onClick: (event) => {
      children.props.onClick?.(event);
      onOpenChange(!open);
    }
  })
}

export const SheetContent = ({ children, className, side = "right", ...props }: SheetContentProps) => {
  const { open, onOpenChange } = React.useContext(SheetContext)
  if (!open) return null;
  const sideClass = side === "left" ? "left-0" : "right-0";
  
  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" onClick={() => onOpenChange(false)} />
      <div className={cn("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out top-0 bottom-0 w-3/4 sm:w-[400px]", sideClass, className)} {...props}>
        {children}
      </div>
    </>
  )
}
export const SheetTitle = ({ children, className, ...props }: SheetTitleProps) => (
  <h2 className={cn("text-lg font-semibold text-foreground", className)} {...props}>{children}</h2>
)
