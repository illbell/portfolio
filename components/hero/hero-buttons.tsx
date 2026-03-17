"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const MotionArrow = motion(ArrowRight)

export default function HeroButtons() {
    return (
        <div className="flex gap-4 flex-wrap">
            <motion.div whileHover="hover" whileTap="hover" animate="rest" className="inline-block" variants={{ hover: { scale: 1.1 } }}>
                <Link
                    href="/skills"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                    View Skills
                    <MotionArrow
                        className="w-4 h-4"
                        variants={{
                            rest: { x: 0 },
                            hover: {
                                x: [0, 6, 0],
                                transition: {
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                            },
                        }}
                    />
                </Link>
            </motion.div>

            <motion.div whileHover="hover" whileTap="hover" animate="rest" className="inline-block" variants={{ hover: { scale: 1.1 } }}>
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
                >
                    Get in Touch
                    <MotionArrow
                        className="w-4 h-4"
                        variants={{
                            rest: { x: 0 },
                            hover: {
                                x: [0, 6, 0],
                                transition: {
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                            },
                        }}
                    />
                </Link>
            </motion.div>
        </div>
    )
}