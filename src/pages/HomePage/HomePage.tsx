import Header from "@/reusable_sections/Header"
import TacticalHero from "./sections/TacticalHero"
import TacticalSplitFeature from "./sections/TacticalSplitFeature"
import FeaturedCelebration from "./sections/FeaturedCelebration"
import GrownFromHeritage from "./sections/GrownFromHeritage"
import PerformanceSegments from "./sections/PerformanceSegments"
import ServiceShowcase from "./sections/ServiceShowcase"
import DigitalArtifacts from "./sections/DigitalArtifacts"
import CapabilitiesGrid from "./sections/CapabilitiesGrid"
import AdvancedAviationUpgrades from "./sections/AdvancedAviationUpgrades"
import GeorgetownMilestoneMini from "./sections/GeorgetownMilestoneMini"
import OurVenuePartners from "./sections/OurVenuePartners"
import GetInTouch from "./sections/GetInTouch"
import ProgramCategories from "./sections/ProgramCategories"
import Footer from "@/reusable_sections/Footer"

export default function HomePage() {

  return (
    <div className="bg-background min-h-screen text-foreground">
      <Header />
      <TacticalHero />
      <TacticalSplitFeature />
      <FeaturedCelebration />
      <GrownFromHeritage />
      <CapabilitiesGrid />
      <ProgramCategories />
      <PerformanceSegments />
      <ServiceShowcase />
      <DigitalArtifacts />
      <AdvancedAviationUpgrades />
      <GeorgetownMilestoneMini />
      <OurVenuePartners />
      <GetInTouch />
      <Footer />
    </div>
  )
}
