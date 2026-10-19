import {
  BookOpen,
  CalendarDays,
  GraduationCap,
  Monitor,
  Settings,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

type NavigationItem = {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Settings, isContentType: true },
  { key: "tutorial", path: "/tutorial", icon: GraduationCap, isContentType: true },
  { key: "features", path: "/features", icon: Sparkles, isContentType: true },
  { key: "release", path: "/release", icon: CalendarDays, isContentType: true },
  { key: "community", path: "/community", icon: Users, isContentType: true },
  { key: "platforms", path: "/platforms", icon: Monitor, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.key);
