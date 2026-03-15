'use client';

import { useState } from 'react';
import { portfolioData } from "@/lib/portfolio-data";
import { getIcon } from "@/lib/icon-map";
import { motion } from "framer-motion"

export default function SkillsPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'frontend' | 'backend' | 'other'>('all');

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
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">Skills & Technologies</h1>
          <p className="text-lg text-muted-foreground">
            A comprehensive overview of my technical expertise and tools I use daily.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
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
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => {
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
        </div>
      </div>
    </div>
  );
}
