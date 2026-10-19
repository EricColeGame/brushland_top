export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Brushland Wiki",
  shortName: "Brushland",
  logoText: "B",
  tagline: "Guides, Gameplay & Release News",
  description: "Explore Brushland, a cozy sandbox kingdom-building game. Discover terrain painting, kingdom building, villagers, release news and guides.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://brushland.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://brushland.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/5163450/Brushland/",
  heroVideoId: "Qbi4fKsKdSg", // Brushland official announcement trailer
  social: {
    youtube: "https://www.youtube.com/@TranshumanDesign",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
