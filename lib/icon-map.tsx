import {
  Database,
  Palette,
  GitBranch,
  Box,
  Network,
  Layers,
  Cloud,
  CheckCircle2,
  Zap,
  Server,
  Code,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  TypeScript: Code,
  React: Code,
  "Next.js": Zap,
  "Node.js": Server,
  PostgreSQL: Database,
  "Tailwind CSS": Palette,
  Git: GitBranch,
  Docker: Box,
  "REST APIs": Network,
  GraphQL: Layers,
  AWS: Cloud,
  Testing: CheckCircle2,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] || Code;
}
