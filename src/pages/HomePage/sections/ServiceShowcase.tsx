"use client";

import { Link } from "@/components/common/Link";
import { ArrowUpRight } from "lucide-react";

const services = [
  { id: 1, name: "Threat Analysis & Neutralization" },
  { id: 2, name: "Aerospace Fleet Modernization" },
  { id: 3, name: "Secure Supply Chain Logistics" },
  { id: 4, name: "Autonomous Drone Surveillance" }
];

export default function ServiceShowcase() {
  return (
    <section id="operational-services" className="bg-foreground text-background py-24">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col lg:flex-row gap-16">
        
        <div className="w-full lg:w-1/3">
          <h2 className="font-default text-4xl md:text-5xl font-bold uppercase tracking-widest mb-6">
            Operational<br/><span className="text-primary">Services</span>
          </h2>
          <p className="font-serif text-background/70 mb-8">
            Comprehensive lifecycle support and strategic implementation of defense protocols for state and private military contractors.
          </p>
          <Link to="#" className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest border-b border-primary text-primary hover:text-background hover:border-background transition-colors pb-1">
            Download Full Catalog
          </Link>
        </div>
        
        <div className="w-full lg:w-2/3 flex flex-col">
          {services.map((service, i) => (
            <div key={service.id} className="group border-t border-background/20 last:border-b py-8 flex items-center justify-between hover:bg-background/5 transition-colors px-4 cursor-pointer">
              <div className="flex items-center gap-8">
                <span className="font-mono text-background/30 text-lg">0{i + 1}</span>
                <h3 className="font-default text-xl md:text-2xl font-bold uppercase tracking-wide group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
              </div>
              <div className="bg-background/10 p-3 rounded-full group-hover:bg-primary group-hover:text-foreground transition-all">
                <ArrowUpRight className="size-5" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
