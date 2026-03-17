import { portfolioData } from "@/lib/portfolio-data";
import HeroTypeWriter from "@/components/typewriter";
import HeroSection from "@/components/hero/hero-bio";
import Stats from "@/components/hero/hero-stats";

export default function OverviewPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <HeroSection />

        <Stats />
      </div>
    </div>
  );
}
