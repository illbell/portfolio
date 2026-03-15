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

          <div className="space-y-8">
            {portfolioData.experience.map((job, index) => (
              <div
                key={job.id}
                className="relative pl-8 border-l-2 border-accent/20 hover:border-accent/50 transition-colors"
              >
                {/* Timeline dot */}
                <div className="absolute -left-3.5 top-0 w-5 h-5 bg-accent rounded-full border-4 border-background" />

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {job.title}
                      </h3>
                      <p className="text-lg text-accent font-semibold">
                        {job.company}
                      </p>
                    </div>
                    <span className="text-muted-foreground font-medium whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="border-t border-border pt-20">
          <div className="flex items-center gap-3 mb-12">
            <BookOpen className="w-6 h-6 text-accent" />
            <h2 className="text-4xl font-bold text-foreground">Education</h2>
          </div>

          <div className="space-y-6">
            {portfolioData.education.map((edu) => (
              <div
                key={edu.id}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-accent font-semibold">
                      {edu.field}
                    </p>
                    <p className="text-muted-foreground">{edu.school}</p>
                  </div>
                  <span className="text-muted-foreground font-semibold whitespace-nowrap">
                    {edu.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
