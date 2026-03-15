import { portfolioData } from "@/lib/portfolio-data";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { getSocialIcon } from "@/lib/social-icons";

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
            Feel free to reach out for opportunities or just to chat about tech.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Email */}
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
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
            </div>

            {/* Phone */}
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
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
            </div>

            {/* Location */}
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Location
                  </h3>
                  <p className="text-muted-foreground">
                    {portfolioData.contact.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Follow Me
            </h2>
            <div className="space-y-4">
              {portfolioData.contact.social.map((social) => {
                const Icon = getSocialIcon(social.icon);
                return (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-accent hover:shadow-lg transition-all group"
                  >
                    <Icon className="w-6 h-6 text-accent group-hover:text-accent/80 transition-colors" />
                    <span className="font-medium text-foreground group-hover:text-accent transition-colors">
                      {social.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

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
