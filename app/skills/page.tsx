'use client';

import { useState } from 'react';
import { portfolioData } from "@/lib/portfolio-data";
import { getIcon } from "@/lib/icon-map";
import { AnimatePresence, motion } from "motion/react"
import { useAnimateStore } from '@/providers/animate-store-provider';

const sectionContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const sectionItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}


export default function SkillsPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'frontend' | 'backend' | 'other'>('all');
  const { skillsAnimated, skillsHasAnimated } = useAnimateStore((state) => state);

  const filteredSkills = activeFilter === 'all'
    ? portfolioData.skills
    : portfolioData.skills.filter(skill => skill.category === activeFilter);

  const filters = [
    { label: 'All', value: 'all' as const },
    { label: 'Frontend', value: 'frontend' as const },
    { label: 'Backend', value: 'backend' as const },
    { label: 'Other', value: 'other' as const },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          className="mb-12"
          variants={sectionContainer}
          initial={skillsAnimated ? "show" : "hidden"} // skip animation if already animated
          animate="show"
          onAnimationComplete={() => {
            if (!skillsAnimated) skillsHasAnimated(); // set global flag
          }}
        >
          {/* Heading */}
          <motion.h1 className="text-5xl font-bold text-foreground mb-4" variants={sectionItem}>
            Skills & Technologies
          </motion.h1>

          {/* Subtitle */}
          <motion.p className="text-lg text-muted-foreground" variants={sectionItem}>
            A comprehensive overview of my technical expertise and tools I use daily.
          </motion.p>

          {/* Filter buttons */}
          <motion.div className="flex flex-wrap gap-3 mt-6" variants={sectionItem}>
            {filters.map((filter) => {
              const isActive = activeFilter === filter.value
              return (
                <motion.button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  layout
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${isActive
                      ? "bg-accent text-accent-foreground shadow-md"
                      : "bg-secondary text-foreground border border-border hover:border-accent"
                    }`}
                >
                  {filter.label}
                </motion.button>
              )
            })}
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const Icon = getIcon(skill.icon);
              const MotionIcon = motion(Icon);

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial="initial"
                  whileHover="hover"
                  whileTap="hover"
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  variants={{ hover: { scale: 1.1 } }}
                  className="group relative bg-card border border-border rounded-lg p-6 hover:border-accent hover:shadow-lg"
                >
                  <div className="relative flex flex-col items-center gap-3 text-center">
                    <MotionIcon
                      className="w-10 h-10"
                      variants={{
                        initial: {
                          color: "oklch(0.55 0.2 262)",
                          scale: 1,
                          rotate: 0,
                        },
                        hover: {
                          color: [
                            "oklch(0.55 0.2 262)",
                            "oklch(0.65 0.25 270)",
                            "oklch(0.60 0.18 290)",
                            "oklch(0.55 0.2 262)",
                          ],
                          scale: [1, 1.2, 1],
                          rotate: [0, 5, -5, 0],
                          transition: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        },
                      }}
                    />
                    <p className="font-semibold text-foreground">{skill.name}</p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
