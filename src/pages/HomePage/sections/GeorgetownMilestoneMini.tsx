"use client";

import { Button } from "@/components/ui/button";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { ArrowRight } from "lucide-react";

const logisticsSteps = [
  {
    id: "01",
    title: "Strategic Procurement",
    description: "Sourcing high-grade tactical systems and defense materials from our global network of authorized partners.",
    image: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/tactical_logistics.png"
  },
  {
    id: "02",
    title: "Secure Transport",
    description: "End-to-end encrypted tracking and armored convoy deployment ensuring asset integrity across hostile routes.",
    image: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/armored_convoy_desert.png"
  }
];

export default function GeorgetownMilestoneMini() {
  const { ref, isVisible } = useRevealOnScroll({ threshold: 0.1 });

  return (
    <section id="global-logistics-sales" className="bg-background overflow-hidden" ref={ref}>
      {logisticsSteps.map((step, index) => {
        const isEven = index % 2 === 0;
        return (
          <div 
            key={step.id}
            className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} min-h-[60vh]`}
          >
            {}
            <div className="w-full md:w-1/2 relative min-h-[400px]">
              <img 
                src={step.image} 
                alt={step.title}
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
            </div>

            {}
            <div className={`w-full md:w-1/2 bg-foreground text-background flex flex-col justify-center p-12 lg:p-24 relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div 
                className="absolute font-default text-[15rem] md:text-[20rem] font-bold text-background/10 -z-0 select-none top-1/2 -translate-y-1/2 leading-none right-4"
              >
                {step.id}
              </div>

              <div className="relative z-10 max-w-lg">
                <h3 className="font-default text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">
                  Phase {step.id}
                </h3>
                <h2 className="font-default text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-6 text-background">
                  {step.title}
                </h2>
                <p className="font-mono text-sm leading-relaxed text-background/70 mb-10 max-w-md">
                  {step.description}
                </p>
                <Button 
                  variant="outline" 
                  className="rounded-none border border-background text-background hover:bg-background hover:text-foreground font-bold uppercase tracking-widest text-xs px-8 h-12 bg-transparent"
                >
                  View Protocol <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
