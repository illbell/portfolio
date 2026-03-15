"use client"

import { portfolioData } from "@/lib/portfolio-data"
import Typewriter from "typewriter-effect"

export default function HeroTypeWriter() {
      const skillNames = portfolioData.skills.map(skill => skill.name)

  return (
      <h1 className="text-4xl font-bold">
        <Typewriter
          options={{
            strings: skillNames,
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            delay: 75,
            cursor: "|",
          }}
        />
      </h1>
  )
}