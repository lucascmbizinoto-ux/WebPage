import * as React from "react"
import { cn } from "@/lib/utils"

type NavigationMenuProps = React.HTMLAttributes<HTMLElement> & {
  viewport?: boolean
}

type NavigationMenuLinkProps = React.HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean
}

type SlottableProps = {
  className?: string
}

export const NavigationMenu = React.forwardRef<HTMLElement, NavigationMenuProps>(
  ({ className, children, viewport, ...props }, ref) => {
    void viewport;

    return (
      <nav ref={ref} className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)} {...props}>
        {children}
      </nav>
    )
  }
)
NavigationMenu.displayName = "NavigationMenu"

export const NavigationMenuList = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)} {...props} />
  )
)
NavigationMenuList.displayName = "NavigationMenuList"

export const NavigationMenuItem = React.forwardRef<HTMLLIElement, React.LiHTMLAttributes<HTMLLIElement>>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("", className)} {...props} />
  )
)
NavigationMenuItem.displayName = "NavigationMenuItem"

export const NavigationMenuLink = React.forwardRef<HTMLDivElement, NavigationMenuLinkProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    if (asChild && React.isValidElement<SlottableProps>(children)) {
      return React.cloneElement(children, {
        className: cn(className, children.props.className),
      })
    }

    return (
      <div ref={ref} className={cn("", className)} {...props}>
        {children}
      </div>
    )
  }
)
NavigationMenuLink.displayName = "NavigationMenuLink"
