"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

const performanceMetrics = [
  { label: "Maximum Range", value: "1,200 NM" },
  { label: "Cruising Speed", value: "150 KTAS" },
  { label: "Payload Capacity", value: "9,000 lbs" },
  { label: "Avionics Suite", value: "Garmin G5000H" },
  { label: "Engine Type", value: "Twin T700-GE-701D" },
  { label: "Armor Rating", value: "NIJ Level IV" },
  { label: "Weapons Integration", value: "Dillon Aero M134D" },
];

export default function AdvancedAviationUpgrades() {
  return (
    <section
      id="advanced-aviation-upgrades"
      className="relative w-full min-h-screen flex items-center bg-background text-foreground py-24 overflow-hidden"
    >
      {}
      <div className="absolute inset-0 z-0">
        <img
          src="https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/aviation_cockpit_bg.png"
          data-wvc-srcset="https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/aviation_cockpit_bg.png-wvc-srcset"
          data-wvc-sizes="https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/aviation_cockpit_bg.png-wvc-sizes"
          alt="Advanced Aircraft Cockpit"
          className="w-full h-full object-cover opacity-50"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/70 mix-blend-multiply"></div>
      </div>

      {}
      <div 
        className="absolute inset-0 z-10 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(151 72% 57%) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(151 72% 57%) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {}
      <div className="container mx-auto px-4 relative z-20 flex justify-end">
        <Card className="w-full max-w-lg bg-background/30 backdrop-blur-xl border-primary/40 shadow-2xl">
          <CardHeader className="pb-4 border-b border-primary/20">
            <CardTitle className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-foreground font-default">
              System Specifications
            </CardTitle>
            <CardDescription className="text-foreground/80 uppercase tracking-widest text-xs mt-2">
              Tactical Upgrade Package Alpha
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Table>
              <TableBody>
                {performanceMetrics.map((metric, i) => (
                  <TableRow 
                    key={i} 
                    data-index={i}
                    className="border-primary/20 hover:bg-primary/10 transition-colors"
                  >
                    <TableCell className="font-medium text-foreground uppercase tracking-wider text-xs py-4">
                      {metric.label}
                    </TableCell>
                    <TableCell className="text-right text-primary font-bold tracking-wide py-4">
                      {metric.value}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="pt-4 border-t border-primary/20">
            <Button 
              variant="outline" 
              className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground uppercase tracking-widest text-xs h-12"
            >
              Download Technical Dossier
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
