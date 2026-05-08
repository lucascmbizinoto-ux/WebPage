"use client";

import { Button } from "@/components/ui/button";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { ChevronRight } from "lucide-react";

export default function TacticalHero() {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-background">
      {}
      <div className="absolute inset-0 z-0">
        <img
          src="https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/tactical_hero_bg.png"
          alt="Tactical Transport Helicopters"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
      </div>

      {}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div
          ref={ref}
          className={`flex flex-col items-center max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="h-[2px] w-12 bg-primary"></div>
            <span className="font-mono text-primary font-bold tracking-[0.3em] uppercase text-sm">
              Strategic Superiority
            </span>
            <div className="h-[2px] w-12 bg-primary"></div>
          </div>
          
          <h1 className="font-default text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-normal text-foreground mb-8 leading-[0.95]">
            Global <span className="text-transparent text-outline" style={{ WebkitTextStroke: "2px var(--foreground)" }}>Defense</span><br />
            Capabilities
          </h1>
          
          <p className="font-serif text-lg md:text-xl text-foreground/80 max-w-2xl mb-10 leading-relaxed">
            Delivering unparalleled operational readiness and advanced aerospace solutions for the modern theater of operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-widest h-14 px-8 rounded-none">
              Explore Operations
            </Button>
            <Button variant="outline" size="lg" className="border-foreground/20 text-foreground hover:bg-foreground hover:text-background font-bold uppercase tracking-widest h-14 px-8 rounded-none group">
              View Briefing <ChevronRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
