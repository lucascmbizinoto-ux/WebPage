"use client";


const partners = [
  { id: 1, name: "Lockheed Martin", logo: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/partner_logo_lockheed.png" },
  { id: 2, name: "BAE Systems", logo: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/partner_logo_bae.png" },
  { id: 3, name: "General Dynamics", logo: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/partner_logo_general.png" },
  { id: 4, name: "Elbit Systems", logo: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/partner_logo_elbit.png" },
  { id: 5, name: "Sikorsky", logo: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/partner_logo_sikorsky.png" },
  { id: 6, name: "Honeywell", logo: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1665782/img/partner_logo_honeywell.png" },
];

export default function OurVenuePartners() {
  return (
    <section id="our-venue-partners" className="bg-background border-t border-border/20 py-24 text-foreground">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h3 className="font-default font-semibold text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Authorized Global Partners
          </h3>
          <div className="w-12 h-1 bg-destructive mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="flex justify-center items-center p-6 group transition-all duration-500"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-12 w-auto object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)] brightness-0 invert"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
