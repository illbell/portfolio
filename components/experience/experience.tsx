'use client';

import { motion } from 'motion/react';
import { useAnimateStore } from '@/providers/animate-store-provider';
import { portfolioData } from '@/lib/portfolio-data';

const timelineContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15, // stagger each item
    },
  },
};

const timelineItem = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function ExperienceTimeline() {
  const { experienceAnimated, experienceHasAnimated } = useAnimateStore(
    (state) => state
  );

  return (
    <motion.div
      className="space-y-8"
      variants={timelineContainer}
      initial={experienceAnimated ? 'show' : 'hidden'}
      animate="show"
      onAnimationComplete={() => {
        if (!experienceAnimated) experienceHasAnimated?.();
      }}
    >
      {portfolioData.experience.map((job) => (
        <motion.div
          key={job.id}
          className="relative pl-8 border-l-2 border-accent/20 transition-colors"
          whileHover={{ borderColor: 'rgb(149, 147, 253)' }} 
        >
          {/* Timeline dot */}
          <div className="absolute -left-3.5 top-0 w-5 h-5 bg-accent rounded-full border-4 border-background" />

          <motion.div
            className="bg-card border border-border rounded-lg p-6 shadow-sm"
            variants={timelineItem}
            whileHover={{ y: -5, boxShadow: '0px 10px 20px rgba(0,0,0,0.1)' }}
            whileTap={{ y: -5, boxShadow: '0px 10px 20px rgba(0,0,0,0.1)' }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
              <div>
                <h3 className="text-2xl font-bold text-foreground">{job.title}</h3>
                <p className="text-lg text-accent font-semibold">{job.company}</p>
              </div>
              <span className="text-muted-foreground font-medium whitespace-nowrap">{job.period}</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">{job.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}