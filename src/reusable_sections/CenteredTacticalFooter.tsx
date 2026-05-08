"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "@/components/common/Link";
import { WvcLogo } from "@/integrations/wordpress/WvcLogo";
import { MenuProvider, useMenu } from "@/integrations/wordpress/WordPressMenuProvider";
import { Separator } from "@/components/ui/separator";

function FooterNav() {
  const { menuItems, loading } = useMenu();

  if (loading) {
    return (
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {[1, 2, 3, 4].map((_, i) => (
          <div
            key={i}
            data-index={i}
            className="h-5 w-24 bg-background/10 animate-pulse rounded-md"
          />
        ))}
      </div>
    );
  }

  if (!menuItems || menuItems.length === 0) {
    return null;
  }

  return (
    <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
      {menuItems.map((item, i) => (
        <Link
          key={item.id}
          to={item.href || "#"}
          data-index={i}
          className="text-sm font-medium tracking-widest text-background/80 hover:text-background transition-colors uppercase"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export default function CenteredTacticalFooter() {
  const businessName = "Unknown";
  const currentYear = new Date().getFullYear();
  const displayBusinessName = businessName !== "Unknown" ? businessName : "Defence Systems";

  return (
    <section
      id="centeredtacticalfooter"
      className="bg-foreground text-background py-16 md:py-24"
    >
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        {}
        <div className="mb-12">
          <Link to="/" className="inline-block transition-opacity hover:opacity-90">
            <WvcLogo className="h-12 md:h-16 w-auto text-background fill-current" />
          </Link>
        </div>

        {}
        <div className="mb-12 w-full max-w-3xl">
          <MenuProvider menu_id="16">
            <FooterNav />
          </MenuProvider>
        </div>

        {}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-12 text-background/70 font-mono text-sm">
          <div className="flex items-center gap-3">
            <Mail className="size-4 text-background/50" />
            <span>contact@defencesystems.net</span>
          </div>
          <div className="hidden md:block w-1 h-1 rounded-lg bg-background/30" />
          <div className="flex items-center gap-3">
            <Phone className="size-4 text-background/50" />
            <span>+1 (800) 555-0199</span>
          </div>
          <div className="hidden md:block w-1 h-1 rounded-lg bg-background/30" />
          <div className="flex items-center gap-3">
            <MapPin className="size-4 text-background/50" />
            <span>Global Operations Center</span>
          </div>
        </div>

        {}
        <div className="flex items-center justify-center gap-6 mb-12">
          <Link
            to="#"
            className="p-3 rounded-md bg-background/5 hover:bg-background/15 text-background/80 hover:text-background transition-all border border-background/10 hover:border-background/30"
          >
            <Mail className="size-5" />
            <span className="sr-only">Mail</span>
          </Link>
        </div>

        <Separator className="bg-background/10 w-full max-w-4xl mb-8" />

        {}
        <div className="flex flex-col items-center gap-3 font-mono text-xs text-background/50 tracking-wider">
          <p>
            &copy; {currentYear} {displayBusinessName}. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-4 mt-1">
            <Link to="#" className="hover:text-background/80 transition-colors">
              PRIVACY POLICY
            </Link>
            <span className="text-background/30">|</span>
            <Link to="#" className="hover:text-background/80 transition-colors">
              TERMS OF SERVICE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
