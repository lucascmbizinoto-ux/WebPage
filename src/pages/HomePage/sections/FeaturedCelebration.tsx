"use client";

import { Link } from "@/components/common/Link";
import { Button } from "@/components/ui/button";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export default function FeaturedCelebration() {
  const { ref, isVisible } = useRevealOnScroll({ threshold: 0.1 });

  return (
    <section data-section-id="234970"
      id="strategic-defense-operations"
      className="bg-background text-foreground relative h-[70vh] min-h-[500px] w-full overflow-hidden flex items-end"
    >
      {}
      <div
        ref={ref}
        className={`absolute inset-0 w-full h-full transition-transform duration-[10000ms] ease-out ${
          isVisible ? "scale-110" : "scale-100"
        }`}
      >
        <div className="absolute inset-0 bg-[url('https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/tactical_operation_hero.png')] bg-cover bg-center" />
        {}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-12 md:pb-20">
        {}
        <div
          className={`backdrop-blur-xl bg-black/60 border border-white/10 p-8 md:p-12 rounded-md shadow-2xl max-w-lg transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="uppercase tracking-widest text-xs font-sans text-primary mb-4 block">
            Mission Critical
          </span>
          <h2 className="font-default text-4xl md:text-5xl text-white mb-4 leading-[1.1] font-bold uppercase tracking-wider">
            Strategic Defense Operations
          </h2>
          <p className="text-white/80 font-mono mb-8 text-sm md:text-base leading-relaxed">
            Providing elite tactical solutions and advanced defense systems for global security. Our operations ensure precision, reliability, and strategic superiority in high-stakes environments.
          </p>
          <Button
            asChild
            variant="outline"
            className="bg-primary border-none text-primary-foreground hover:bg-primary/90 rounded-md px-8 h-12 font-default font-bold uppercase tracking-tight"
          >
            <Link to="/HomePage">View Capabilities</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
