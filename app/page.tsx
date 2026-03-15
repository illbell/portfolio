import { portfolioData } from "@/lib/portfolio-data";
import Image from "next/image";
import HeroTypeWriter from "@/components/typewriter";
import HeroButtons from "@/components/hero-buttons";

export default function OverviewPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-5xl font-bold text-foreground mb-4 text-balance">
                {portfolioData.name}
              </h1>
              <p className="text-xl text-accent font-semibold mb-4">
                {portfolioData.title}
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {portfolioData.bio}
            </p>

            <HeroButtons />
          </div>

          <div className="flex justify-center">
            <Image
              src="/profile.jpg"
              alt={portfolioData.name}
              width={400}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full max-w-sm"
              priority
            />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-6 border-t border-border pt-12">
          <div>
            <p className="text-4xl font-bold text-accent">
              {2}+
            </p>
            <p className="text-muted-foreground text-sm">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-accent">
              {portfolioData.skills.length}+
            </p>
            <p className="text-muted-foreground text-sm">Technologies</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">I Know</p>
            <HeroTypeWriter />
          </div>
        </div>
      </div>
    </div>
  );
}
