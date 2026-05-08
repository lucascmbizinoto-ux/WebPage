import * as React from "react"
import { cn } from "@/lib/utils"

const variants = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  outline: "border border-input border-border bg-background hover:bg-accent hover:text-accent-foreground",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "text-primary underline-offset-4 hover:underline",
} as const

const sizes = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-none px-3",
  lg: "h-11 rounded-none px-8",
  icon: "h-10 w-10",
} as const

type ButtonVariant = keyof typeof variants
type ButtonSize = keyof typeof sizes

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
  size?: ButtonSize
  variant?: ButtonVariant
}

type SlottableProps = {
  className?: string
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const baseClass = "inline-flex items-center justify-center whitespace-nowrap rounded-none text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    const composedClassName = cn(baseClass, variants[variant], sizes[size], className)

    if (asChild && React.isValidElement<SlottableProps>(props.children)) {
      return React.cloneElement(props.children, {
        className: cn(composedClassName, props.children.props.className),
      })
    }

    return (
      <button
        className={composedClassName}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
