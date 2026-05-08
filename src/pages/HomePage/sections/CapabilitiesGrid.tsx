"use client";

import { Link } from "@/components/common/Link";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { ArrowRight, Crosshair } from "lucide-react";

const capabilities = [
  {
    id: "cap-1",
    title: "Mission Driven",
    description: "Specialized tactical operations and strategic deployment solutions tailored for high-risk, complex environments.",
    imageSrc: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/capability_mission_driven.png",
    imageSrcSet: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/capability_mission_driven.png-wvc-srcset",
    imageSizes: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/capability_mission_driven.png-wvc-sizes",
    link: "/capabilities/mission-driven",
  },
  {
    id: "cap-2",
    title: "Advanced Solutions",
    description: "Cutting-edge technological integration and systems engineering for modern defense requirements.",
    imageSrc: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/capability_advanced_solutions.png",
    imageSrcSet: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/capability_advanced_solutions.png-wvc-srcset",
    imageSizes: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/capability_advanced_solutions.png-wvc-sizes",
    link: "/capabilities/advanced-solutions",
  },
  {
    id: "cap-3",
    title: "Equipment Procurement",
    description: "Global sourcing and acquisition of specialized military hardware, ensuring operational readiness.",
    imageSrc: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/capability_procurement.png",
    imageSrcSet: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/capability_procurement.png-wvc-srcset",
    imageSizes: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/capability_procurement.png-wvc-sizes",
    link: "/capabilities/procurement",
  },
  {
    id: "cap-4",
    title: "Combat Vehicles",
    description: "Supply and modernization of new and surplus armored platforms for land-based superiority.",
    imageSrc: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/capability_vehicles.png",
    imageSrcSet: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/capability_vehicles.png-wvc-srcset",
    imageSizes: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/capability_vehicles.png-wvc-sizes",
    link: "/capabilities/combat-vehicles",
  },
  {
    id: "cap-5",
    title: "Aerial Platforms",
    description: "Rotary and fixed-wing assets for transport, reconnaissance, and close air support missions.",
    imageSrc: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/capability_aerial.png",
    imageSrcSet: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/capability_aerial.png-wvc-srcset",
    imageSizes: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/capability_aerial.png-wvc-sizes",
    link: "/capabilities/aerial-platforms",
  },
  {
    id: "cap-6",
    title: "Naval Systems",
    description: "Maritime defense solutions including coastal patrol vessels and advanced sonar technologies.",
    imageSrc: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/capability_naval.png",
    imageSrcSet: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/capability_naval.png-wvc-srcset",
    imageSizes: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/capability_naval.png-wvc-sizes",
    link: "/capabilities/naval-systems",
  },
];

export default function CapabilitiesGrid() {
  const { ref, isVisible } = useRevealOnScroll({ threshold: 0.1 });

  return (
    <section
      id="capabilitiesgrid"
      className="bg-zinc-950 py-24 text-white"
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes borderGlow {
          0%, 100% { border-color: rgba(6, 182, 212, 0.2); box-shadow: 0 0 5px rgba(6, 182, 212, 0.1); }
          50% { border-color: rgba(6, 182, 212, 0.6); box-shadow: 0 0 20px rgba(6, 182, 212, 0.3); }
        }
      `}} />
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`mb-16 flex flex-col items-center text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-4 flex items-center gap-2 text-red-500">
            <Crosshair className="size-5" />
            <span className="font-mono text-sm font-bold tracking-widest uppercase">
              Core Competencies
            </span>
          </div>
          <h2 className="font-default text-4xl font-bold tracking-tight uppercase md:text-5xl lg:text-6xl">
            Tactical Capabilities
          </h2>
          <div className="mt-6 h-1 w-24 bg-red-600"></div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <Link
              key={cap.id}
              to={cap.link}
              data-index={i}
              className={`group relative block min-h-[400px] overflow-hidden bg-zinc-900 shadow-lg transition-all duration-700 md:min-h-[480px] border border-transparent motion-safe:hover:animate-[borderGlow_3s_infinite] ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-16 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {}
              <img
                src={cap.imageSrc}
                data-wvc-srcset={cap.imageSrcSet}
                data-wvc-sizes={cap.imageSizes}
                alt={cap.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {}
              <div className="absolute inset-0 bg-black/70 backdrop-blur-none transition-all duration-500 group-hover:bg-black/50 group-hover:backdrop-blur-sm" />

              {}
              <div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-20">
                <div 
                  className="h-full w-full motion-safe:animate-[scanline_4s_linear_infinite]"
                  style={{
                    background: 'linear-gradient(to bottom, transparent, rgba(6, 182, 212, 0.5), transparent)',
                    height: '20%'
                  }}
                />
              </div>

              {}
              <div className="relative z-20 flex h-full flex-col justify-end p-8">
                <div className="mb-4 h-0.5 w-12 bg-red-600 transition-all duration-500 group-hover:w-24" />
                <h3 className="font-default mb-3 text-2xl font-bold tracking-wide text-white uppercase md:text-3xl">
                  {cap.title}
                </h3>
                <p className="font-mono mb-6 text-sm leading-relaxed text-zinc-300 opacity-0 transition-all duration-500 group-hover:text-cyan-300 group-hover:opacity-100">
                  {cap.description}
                </p>
                <div className="flex items-center gap-2 font-mono text-sm font-bold text-red-400 transition-transform duration-300 group-hover:translate-x-2">
                  <span>EXPLORE</span>
                  <ArrowRight className="size-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
