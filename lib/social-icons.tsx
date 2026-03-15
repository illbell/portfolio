import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  LucideIcon,
  Facebook,
} from "lucide-react";

const socialIconMap: Record<string, LucideIcon> = {
  Github: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Email: Mail,
  Facebook: Facebook
};

export function getSocialIcon(name: string): LucideIcon {
  return socialIconMap[name] || Mail;
}
