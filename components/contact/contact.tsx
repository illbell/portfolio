'use client';

import { motion } from 'motion/react';
import { portfolioData } from '@/lib/portfolio-data';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { getSocialIcon } from '@/lib/social-icons';
import { useAnimateStore } from '@/providers/animate-store-provider';

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

export default function ContactInfoMotion() {
  const { contactAnimated, contactHasAnimated } = useAnimateStore((state) => state);

  return (
    <motion.div
      className="grid md:grid-cols-2 gap-12"
      variants={container}
      initial={contactAnimated ? 'show' : 'hidden'}
      animate="show"
      onAnimationComplete={() => {
        if (!contactAnimated) contactHasAnimated?.();
      }}
    >
      {/* Contact Information */}
      <motion.div className="space-y-8" variants={item}>
        {/* Email */}
        <motion.div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow" whileHover={{ scale: 1.02 }}>
          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Email</h3>
              <Link
                href={`mailto:${portfolioData.contact.email}`}
                className="text-accent hover:text-accent/80 transition-colors break-all"
              >
                {portfolioData.contact.email}
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Phone */}
        <motion.div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow" whileHover={{ scale: 1.02 }}>
          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Phone</h3>
              <Link
                href={`tel:${portfolioData.contact.phone}`}
                className="text-accent hover:text-accent/80 transition-colors"
              >
                {portfolioData.contact.phone}
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Location */}
        <motion.div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow" whileHover={{ scale: 1.02 }}>
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Location</h3>
              <p className="text-muted-foreground">{portfolioData.contact.location}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Social Links */}
      <motion.div variants={item}>
        <h2 className="text-2xl font-bold text-foreground mb-6">Socials</h2>
        <motion.div className="space-y-4">
          {portfolioData.contact.social.map((social) => {
            const Icon = getSocialIcon(social.icon);
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-accent hover:shadow-lg transition-all group"
                whileHover={{ scale: 1.02 }}
              >
                <Icon className="w-6 h-6 text-accent group-hover:text-accent/80 transition-colors" />
                <span className="font-medium text-foreground group-hover:text-accent transition-colors">
                  {social.name}
                </span>
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}