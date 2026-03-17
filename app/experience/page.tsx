import EducationTimeline from "@/components/experience/education";
import ExperienceTimeline from "@/components/experience/experience";
import { portfolioData } from "@/lib/portfolio-data";
import { Briefcase, BookOpen } from "lucide-react";

export const metadata = {
  title: "Experience & Education - Andre Alonzo",
  description: "Professional experience and education",
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Experience Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-6 h-6 text-accent" />
            <h2 className="text-4xl font-bold text-foreground">Experience</h2>
          </div>

          <ExperienceTimeline/>
        </div>

        <EducationTimeline/>
      </div>
    </div>
  );
}
