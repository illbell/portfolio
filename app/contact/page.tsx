import { portfolioData } from "@/lib/portfolio-data";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { getSocialIcon } from "@/lib/social-icons";
import { motion } from 'motion/react';
import ContactInfo from "@/components/contact/contact";

export const metadata = {
  title: "Contact - Andre Alonzo",
  description: "Get in touch with me",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Let's Connect
          </h1>
          <p className="text-lg text-muted-foreground">
            Feel free to reach out for opportunities.
          </p>
        </div>

        <ContactInfo />

        {/* Call to Action */}
        <div className="mt-16 bg-accent/5 border border-accent/20 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Ready to Work Together?
          </h3>
          <p className="text-muted-foreground mb-6">
            Whether you have a question or want to start a project, I'd love to hear from you.
          </p>
          <Link
            href={`mailto:${portfolioData.contact.email}`}
            className="inline-block px-8 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Send me an Email
          </Link>
        </div>
      </div>
    </div>
  );
}
