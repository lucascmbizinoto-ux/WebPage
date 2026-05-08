"use client";

import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { Separator } from "@/components/ui/separator";

export default function GrownFromHeritage() {
  const { ref, isVisible } = useRevealOnScroll({ threshold: 0.1 });

  return (
    <section id="grown-from-heritage" className="flex flex-col md:flex-row w-full bg-background text-foreground overflow-hidden">
      {}
      <div className="w-full md:w-1/2 relative min-h-[500px]">
        <img 
          src="https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/legacy_defense_hangar_monochrome.png" 
          alt="Legacy Defense Asset" 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
      </div>

      {}
      <div 
        ref={ref}
        className={`w-full md:w-1/2 bg-primary text-primary-foreground py-40 px-12 md:px-24 flex flex-col justify-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-right">
          <Separator className="w-24 ml-auto mb-8 bg-destructive" />
          <h2 className="font-default text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-widest mb-10 text-primary-foreground">
            Legacy &<br/>Precision
          </h2>
        </div>
        
        <div className="prose prose-invert ml-auto text-right max-w-md font-serif text-primary-foreground/80 leading-loose text-lg">
          <p className="mb-6">
            Built upon decades of uncompromising standards, our heritage is forged in the fires of operational excellence. We do not just adapt to the modern theater; we define it.
          </p>
          <p>
            Every system integrated and every strategy deployed carries the weight of a lineage committed to absolute security and unyielding performance.
          </p>
        </div>
      </div>
    </section>
  );
}
