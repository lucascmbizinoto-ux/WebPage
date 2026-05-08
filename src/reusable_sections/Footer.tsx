"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "@/components/common/Link";
import { WvcLogo } from "@/integrations/wordpress/WvcLogo";
import { MenuProvider, useMenu } from "@/integrations/wordpress/WordPressMenuProvider";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

function FooterMenuConsumer() {
  const { menuItems, loading } = useMenu();

  if (loading) {
    return (
      <div className="flex gap-6 justify-center">
        <div className="h-4 w-16 bg-muted/10 animate-pulse rounded-md" />
        <div className="h-4 w-16 bg-muted/10 animate-pulse rounded-md" />
        <div className="h-4 w-16 bg-muted/10 animate-pulse rounded-md" />
      </div>
    );
  }

  return (
    <NavigationMenu viewport={false} className="mx-auto">
      <NavigationMenuList className="flex-wrap justify-center gap-6 md:gap-8">
        {menuItems.map((item, i) => (
          <NavigationMenuItem key={item.id} data-index={i}>
            <NavigationMenuLink asChild className="bg-transparent hover:bg-transparent focus:bg-transparent data-[active=true]:bg-transparent data-[state=open]:bg-transparent hover:text-primary focus:text-primary text-foreground uppercase font-default text-[12px] tracking-widest px-0 py-0 h-auto transition-colors">
              <Link to={item.href || "#"}>{item.label}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section data-section-id="252323" id="footer" className="bg-background text-foreground py-16 px-6 md:px-12 border-t border-primary/20">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {}
          <div className="flex-1 flex justify-center md:justify-start">
            <Link to="/" className="inline-block transition-opacity hover:opacity-80">
              <WvcLogo className="h-6 w-auto text-foreground" />
            </Link>
          </div>

          {}
          <div className="flex-1 flex justify-center">
            <MenuProvider menu_id="footer_menu">
              <FooterMenuConsumer />
            </MenuProvider>
          </div>

          {}
          <div className="flex-1 flex justify-center md:justify-end items-center gap-5">
            <Link to="#" className="text-foreground hover:text-primary transition-colors" aria-label="Mail">
              <Mail className="size-4" />
            </Link>
            <Link to="#" className="text-foreground hover:text-primary transition-colors" aria-label="Phone">
              <Phone className="size-4" />
            </Link>
            <Link to="#" className="text-foreground hover:text-primary transition-colors" aria-label="Location">
              <MapPin className="size-4" />
            </Link>
          </div>
        </div>

        {}
        <div className="pt-8 border-t border-primary/10 flex justify-center">
          <p className="text-[12px] uppercase text-foreground font-mono tracking-widest">
            © {currentYear} tactical systems international. all rights reserved.
          </p>
        </div>

      </div>
    </section>
  );
}
