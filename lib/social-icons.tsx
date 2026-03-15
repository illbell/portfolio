import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  LucideIcon,
} from "lucide-react";

const socialIconMap: Record<string, LucideIcon> = {
  Github: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Email: Mail,
};

export function getSocialIcon(name: string): LucideIcon {
  return socialIconMap[name] || Mail;
}
