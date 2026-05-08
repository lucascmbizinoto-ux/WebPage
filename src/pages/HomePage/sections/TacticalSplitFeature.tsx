"use client";

import { Button } from "@/components/ui/button";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { Crosshair } from "lucide-react";

export default function TacticalSplitFeature() {
  const { ref, isVisible } = useRevealOnScroll({ threshold: 0.1 });

  return (
    <section className="bg-background py-24 text-foreground overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div 
          ref={ref}
          className={`flex flex-col lg:flex-row items-center gap-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/3] w-full relative group">
              <div className="absolute inset-0 bg-primary/20 translate-x-4 translate-y-4 border border-primary/50 transition-transform group-hover:translate-x-6 group-hover:translate-y-6 duration-500"></div>
              <img 
                src="https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/tactical_weapons_system.png" 
                alt="Precision Weapon System" 
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 transition-all duration-500 group-hover:grayscale-0 relative z-10"
              />
              
              {}
              <div className="absolute top-4 left-4 z-20 bg-background/80 backdrop-blur-md p-3 border border-primary/30 flex items-center gap-3">
                <Crosshair className="text-primary size-5 animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-widest font-bold">Target Acquired</span>
              </div>
            </div>
          </div>

          {}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <span className="text-primary font-mono text-sm tracking-[0.2em] font-bold uppercase mb-4">
              Precision Engineering
            </span>
            <h2 className="font-default text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-8">
              Advanced <br/>Weapon Systems
            </h2>
            <p className="font-serif text-foreground/70 text-lg leading-relaxed mb-8">
              Our tactical solutions are engineered for environments where failure is not an option. From state-of-the-art optics to lightweight, high-tensile materials, we provide the edge needed for decisive action.
            </p>
            <ul className="flex flex-col gap-4 mb-10 font-mono text-sm tracking-wider uppercase">
              <li className="flex items-center gap-3">
                <div className="size-2 bg-primary"></div>
                Enhanced Target Recognition
              </li>
              <li className="flex items-center gap-3">
                <div className="size-2 bg-primary"></div>
                Modular Attachment Architecture
              </li>
              <li className="flex items-center gap-3">
                <div className="size-2 bg-primary"></div>
                All-Weather Reliability
              </li>
            </ul>
            <Button className="w-fit bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground uppercase tracking-widest rounded-none h-12 px-8">
              Access Specifications
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
