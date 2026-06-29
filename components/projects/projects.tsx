'use client';

import { motion } from 'motion/react';
import { useAnimateStore } from '@/providers/animate-store-provider';
import { portfolioData } from '@/lib/portfolio-data';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProjectsGrid() {
  const { projectsAnimated, projectsHasAnimated } = useAnimateStore((state) => state);

  return (
    <motion.div
      className="grid sm:grid-cols-2 gap-6"
      variants={container}
      initial={projectsAnimated ? 'show' : 'hidden'}
      animate="show"
      onAnimationComplete={() => {
        if (!projectsAnimated) projectsHasAnimated();
      }}
    >
      {portfolioData.projects.map((project) => (
        <motion.a
          key={project.id}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          variants={item}
          className="group bg-card border border-border rounded-lg overflow-hidden hover:border-accent hover:shadow-lg transition-all"
          whileHover={{ y: -4 }}
          whileTap={{ y: -4 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        >
          <div className="relative w-full aspect-video overflow-hidden">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-5">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-lg font-bold text-foreground">{project.name}</h3>
              <ExternalLink className="w-4 h-4 text-accent flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
}
