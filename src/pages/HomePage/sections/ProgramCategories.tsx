"use client";

import { Shield, Radio, Activity } from "lucide-react";
import { Card } from "@/components/ui/card";

const categories = [
  {
    icon: <Shield className="size-8" />,
    title: "Force Protection",
    desc: "Armor and defensive systems for personnel and vehicular assets.",
    image: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/field_operations.png"
  },
  {
    icon: <Activity className="size-8" />,
    title: "Cyber Security",
    desc: "Network hardening and proactive digital threat neutralization.",
    image: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/cyber_defense.png"
  },
  {
    icon: <Radio className="size-8" />,
    title: "Comms & Intel",
    desc: "Encrypted transmission and integrated battlefield awareness.",
    image: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/post_integrated-communications-platform.png"
  }
];

export default function ProgramCategories() {
  return (
    <section className="bg-secondary/10 py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-default text-3xl md:text-4xl font-bold uppercase tracking-widest text-foreground">
            Strategic Programs
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <Card key={i} className="group relative overflow-hidden bg-background border-border/50 rounded-none h-[400px]">
              <div className="absolute inset-0 z-0">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover grayscale opacity-30 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
              </div>
              
              <div className="relative z-10 flex flex-col justify-end h-full p-8">
                <div className="text-primary mb-6 transform transition-transform duration-500 group-hover:-translate-y-2">
                  {cat.icon}
                </div>
                <h3 className="font-default text-2xl font-bold uppercase tracking-wider text-foreground mb-3">
                  {cat.title}
                </h3>
                <p className="font-serif text-muted-foreground leading-relaxed">
                  {cat.desc}
                </p>
                
                <div className="mt-6 w-full h-[1px] bg-border overflow-hidden">
                  <div className="h-full w-0 bg-primary transition-all duration-500 group-hover:w-full"></div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
