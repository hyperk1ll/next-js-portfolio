export type PortfolioType = {
  url?: string;
  urlMissingReason?: string;
  year: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
};


import calorifywebImage from "@/assets/portfolio/calorify-web.webp";
import calorifymobileImage from "@/assets/portfolio/calorify-mobile.webp";
import mtuCatalogImage from "@/assets/portfolio/mtu-catalog.webp";
import dinarkrImage from "@/assets/portfolio/dinarkr.webp";

export const portfolioData: PortfolioType[] = [
  {
    url: "https://dinarkr-fe.vercel.app/",
    year: 2024,
    title: "Sistem Manajemen Dinar KR",
    description:
      "Web app for managing dinar transactions with advanced financial reporting",
    image: dinarkrImage.src,
    tags: ["Next.js", "Tailwind CSS", "Express.js", "PostgreSQL"],
  },
  {
    url: "https://calorify.id/",
    year: 2024,
    title: "Calorify Web",
    description: "Website for Calorify",
    image: calorifywebImage.src,
    tags: ["Next.js", "Tailwind CSS", "Express.js", "Typesense"],
  },
  {
    url: "https://apps.apple.com/id/app/calorify/id6476380738",
    year: 2023,
    title: "Calorify Mobile",
    description: "A personalized calorie-tracking mobile app that promotes healthy eating.",
    image: calorifymobileImage.src,
    tags: ["Flutter", "Express.js", "Firebase", "Google Cloud", "Typesense"],
  },
  {
    urlMissingReason: "Only available for internal use",
    year: 2023,
    title: "MTU-Catalog",
    description:
      "An e-catalog website platform that streamlined product management and enhanced customer interaction",
    image: mtuCatalogImage.src,
    tags: ["Laravel", "Bootstrap", "PHP", "MySQL", "Livewire"],
  },
];
