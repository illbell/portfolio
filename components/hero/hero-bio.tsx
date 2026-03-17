"use client"

import { motion } from "motion/react"
import Image from "next/image"
import HeroButtons from "./hero-buttons"
import { portfolioData } from "@/lib/portfolio-data"
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function HeroSection() {
  const { heroAnimated, heroHasAnimated } = useAnimateStore((state) => state)

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

      {/* LEFT SIDE */}
      <motion.div
        className="flex flex-col gap-8"
        variants={container}
        initial={heroAnimated ? "show" : "hidden"}
        animate="show"
        onAnimationComplete={() => {
          if (!heroAnimated) heroHasAnimated()
        }}
      >
        <div>
          <motion.h1
            className="text-5xl font-bold text-foreground mb-4 text-balance"
            variants={item}
          >
            {portfolioData.name}
          </motion.h1>

          <motion.p
            className="text-xl text-accent font-semibold mb-4"
            variants={item}
          >
            {portfolioData.title}
          </motion.p>
        </div>

        <motion.p
          className="text-lg text-muted-foreground leading-relaxed"
          variants={item}
        >
          {portfolioData.bio}
        </motion.p>

        <motion.div variants={item}>
          <HeroButtons />
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        className="flex justify-center"
        initial={heroAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/profile.jpg"
          alt={portfolioData.name}
          width={400}
          height={400}
          className="rounded-lg shadow-lg object-cover w-full max-w-sm"
          priority
        />
      </motion.div>
    </div>
  )
}