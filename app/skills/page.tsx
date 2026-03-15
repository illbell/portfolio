import { portfolioData } from "@/lib/portfolio-data";
import { getIcon } from "@/lib/icon-map";
import * as motion from "motion/react-client"
import { LazyMotion, domAnimation } from "motion/react"

export const metadata = {
  title: "Skills - Andre Alonzo",
  description: "Technologies and skills",
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-16">
          <motion.h1
            initial={{ x: -25, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: .2 }}
            className="text-5xl font-bold text-foreground mb-4">Skills & Technologies</motion.h1>
          <p className="text-lg text-muted-foreground">
            An overview of my technical expertise and tools I use.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <LazyMotion features={domAnimation}>

            {portfolioData.skills.map((skill) => {
              const Icon = getIcon(skill.icon);
              return (

                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  className="group relative bg-card border border-border rounded-lg p-6 hover:border-accent hover:shadow-lg cursor-default overflow-hidden"
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100" />

                  <div className="relative flex flex-col items-center gap-3 text-center">
                    <div className="text-accent">
                      <Icon className="w-8 h-8" />
                    </div>
                    <p className="font-semibold text-foreground">{skill.name}</p>
                  </div>
                </motion.div>

              );
            })}
          </LazyMotion >

        </div>
      </div>
    </div>
  );
}
