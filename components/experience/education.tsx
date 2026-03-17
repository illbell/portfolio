'use client';

import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';
import { useAnimateStore } from '@/providers/animate-store-provider';

const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function EducationTimeline() {
    const { experienceAnimated } = useAnimateStore(
        (state) => state
    );

    return (
        <motion.div
            className="border-t border-border pt-20"
            variants={containerVariants}
            initial={experienceAnimated ? 'show' : 'hidden'}
            animate="show"
        >
            {/* Header */}
            <div className="flex items-center gap-3 mb-12">
                <BookOpen className="w-6 h-6 text-accent" />
                <h2 className="text-4xl font-bold text-foreground">Education</h2>
            </div>

            {/* Education Cards */}
            <motion.div className="space-y-6" variants={containerVariants}>
                {portfolioData.education.map((edu) => (
                    <motion.div
                        key={edu.id}
                        className="bg-card border border-border rounded-lg p-6 cursor-pointer"
                        variants={itemVariants}
                        whileHover={{ y: -5, boxShadow: '0px 10px 20px rgba(0,0,0,0.1)' }}
                        whileTap={{ y: -5, boxShadow: '0px 10px 20px rgba(0,0,0,0.1)' }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                                <p className="text-lg text-accent font-semibold">{edu.field}</p>
                                <p className="text-muted-foreground">{edu.school}</p>
                            </div>
                            <span className="text-muted-foreground font-semibold whitespace-nowrap">
                                {edu.year}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}