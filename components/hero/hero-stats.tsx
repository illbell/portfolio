"use client"

import { motion } from "framer-motion"
import HeroTypeWriter from "../typewriter"
import { portfolioData } from "@/lib/portfolio-data"
import { CountUp } from "../count-up"
import { useAnimateStore } from "@/providers/animate-store-provider"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Stats() {
  const { heroAnimated, heroHasAnimated } = useAnimateStore((state) => state)

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-border pt-12"
      variants={container}
      initial={heroAnimated ? "show" : "hidden"}
      animate="show"
      onAnimationComplete={() => {
        if (!heroAnimated) heroHasAnimated()
      }}
    >
      {/* Years Experience */}
      <motion.div variants={item}>
        <p className="text-4xl font-bold text-accent">
          <CountUp to={2} animateOnce={heroAnimated} />+
        </p>
        <p className="text-muted-foreground text-sm">Years Experience</p>
      </motion.div>

      {/* Technologies */}
      <motion.div variants={item}>
        <p className="text-4xl font-bold text-accent">
          <CountUp to={portfolioData.skills.length} animateOnce={heroAnimated} />+
        </p>
        <p className="text-muted-foreground text-sm">Technologies</p>
      </motion.div>

      {/* Typewriter */}
      <motion.div variants={item} className="col-span-2 md:col-span-1">
        <p className="text-muted-foreground text-sm">I Know</p>
        <HeroTypeWriter />
      </motion.div>
    </motion.div>
  )
}