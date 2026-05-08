"use client";

import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

const segments = [
  { value: "99.9%", label: "Uptime Reliability", detail: "Mission-critical systems remain operational under extreme stress." },
  { value: "120+", label: "Global Deployments", detail: "Active installations across allied nations and remote theaters." },
  { value: "<45ms", label: "Data Latency", detail: "Near real-time tactical intelligence and encrypted relay." },
  { value: "Tier 1", label: "Clearance Level", detail: "Approved for top-secret and highly classified operations." },
];

export default function PerformanceSegments() {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section className="bg-background py-24 border-y border-border relative overflow-hidden">
      {}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, var(--foreground) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-border">
          {segments.map((seg, i) => (
            <div 
              key={i} 
              className={`flex flex-col items-center text-center p-6 transition-all duration-700 delay-${i * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="font-default text-5xl md:text-6xl font-extrabold text-primary mb-4 tracking-tighter">
                {seg.value}
              </div>
              <h4 className="font-mono text-sm font-bold uppercase tracking-widest text-foreground mb-3">
                {seg.label}
              </h4>
              <p className="text-muted-foreground text-xs font-serif leading-relaxed">
                {seg.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
