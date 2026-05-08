"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "@/components/common/Link";
import { WvcLogo } from "@/integrations/wordpress/WvcLogo";
import { MenuProvider, useMenu } from "@/integrations/wordpress/WordPressMenuProvider";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

function DesktopMenu() {
  const { menuItems, loading } = useMenu();

  if (loading) {
    return (
      <div className="hidden md:flex gap-6">
        <div className="h-6 w-20 bg-muted/10 animate-pulse rounded-md" />
        <div className="h-6 w-20 bg-muted/10 animate-pulse rounded-md" />
        <div className="h-6 w-20 bg-muted/10 animate-pulse rounded-md" />
      </div>
    );
  }

  return (
    <NavigationMenu viewport={false} className="hidden md:flex">
      <NavigationMenuList className="gap-8">
        {menuItems.map((item, i) => (
          <NavigationMenuItem key={item.id} data-index={i}>
            <NavigationMenuLink asChild>
              <Link
                to={item.href || "#"}
                className="group relative py-2 text-xs font-bold font-default uppercase tracking-widest text-foreground transition-colors hover:text-primary"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileMenu() {
  const { menuItems, loading } = useMenu();
  const [isOpen, setIsOpen] = useState(false);

  if (loading) return null;

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-foreground hover:bg-primary/10 rounded-md">
          <Menu className="size-6" />
          <span className="sr-only">Open Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-background border-border w-[300px] sm:w-[400px]">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <div className="flex flex-col gap-6 mt-12">
          {menuItems.map((item, i) => (
            <div key={item.id} data-index={i}>
              <Link
                to={item.href || "#"}
                className="block py-2 text-lg font-bold font-default uppercase tracking-widest text-foreground transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a[href]") as HTMLAnchorElement | null;

      if (anchor) {
        const href = anchor.getAttribute("href");
        if (!href) return;

        
        if (href === "/#") {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }

        
        let hash = "";
        if (href.startsWith("#")) {
          hash = href; 
        } else if (href.startsWith("/") && href.includes("#")) {
          
          const [path, hashPart] = href.split("#");

          
          if (hashPart === "") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
          }

          
          if (path === "/" || path === window.location.pathname) {
            hash = "#" + hashPart;
          }
        }

        if (hash && hash !== "#") {
          const element = document.querySelector(hash);
          if (element) {
            e.preventDefault();
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <section data-section-id="253051"
      id="header"
      className={`sticky top-0 z-50 w-full transition-all duration-400 bg-background text-foreground ${
        isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-primary/20" : "border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center z-50 relative">
          <WvcLogo className="h-7 w-auto text-foreground" />
        </Link>

        <MenuProvider menu_id="16">
          <DesktopMenu />
          <MobileMenu />
        </MenuProvider>
      </div>
    </section>
  );
}
