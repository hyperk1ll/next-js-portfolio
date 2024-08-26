export type PortfolioType = {
  url?: string;
  urlMissingReason?: string;
  role: string;
  year: number;
  title: string;
  description: string[];
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
    role: "Fullstack Developer",
    year: 2024,
    title: "Sistem Manajemen Dinar",
    description: [
      "Designed and developed features for tracking transactions, calculating profits and losses, and generating monthly reports.",
      "Implemented filtering options that allow users to view data based on specific time periods, enhancing financial management capabilities.",
      "Addressed and resolved challenges related to transaction data accuracy and system performance."
    ],
    image: dinarkrImage.src,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Express.js", "PostgreSQL"],
  },
  {
    url: "https://calorify.id/",
    role: "Fullstack Developer",
    year: 2024,
    title: "Calorify Web",
    description: [
      "Transformed design concepts into a fully functional and interactive website, ensuring every aspects aligned with the original designs.",
      "Ensuring that the website is fully responsive, providing an optimal user experience across different screen sizes.",
      "Developed and integrated a search feature that allows users to efficiently find specific food items and articles."
    ],
    image: calorifywebImage.src,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Express.js", "Typesense"],
  },
  {
    url: "https://apps.apple.com/id/app/calorify/id6476380738",
    role: "Cloud & Backend Developer",
    year: 2023,
    title: "Calorify Mobile",
    description: [
      "Architected and maintained a scalable cloud infrastructure using Google Cloud.",
      "Contributing to the app's selection in the top 20 of Bangkit 2023 and securing Rp. 140.000.000 in incubation funds.",
      "Implemented data security measures and optimized performance to handle high traffic and large data."
    ],
    image: calorifymobileImage.src,
    tags: ["Flutter", "Express.js", "Firebase", "Google Cloud", "Typesense"],
  },
  // {
  //   url: "https://play.google.com/store/apps/details?id=com.calorify.app",
  //   year: 2023,
  //   title: "Calorify Android",
  //   description: [
  //     "Designed and implemented an admin dashboard that facilitates efficient product and brand management.",
  //     "Developed a search and filter functionality that improved user experience and reduced time spent finding products.",
  //     "Overcame challenges with integrating diverse data sources and ensured the platform's responsiveness across devices."
  //   ],
  //   image: calorifymobileImage.src,
  //   tags: ["Flutter", "Express.js", "Firebase", "Google Cloud", "Typesense"],
  // },
  {
    urlMissingReason: "Only available for internal use",
    role: "Fullstack Developer",
    year: 2023,
    title: "MTU-Catalog",
    description: [
      "Designed and implemented an admin dashboard that facilitates efficient product and brand management.",
      "Developed a search and filter functionality that improved user experience and reduced time spent finding products.",
      "Overcame challenges with integrating diverse data sources and ensured the platform's responsiveness across devices."
    ],
    image: mtuCatalogImage.src,
    tags: ["Laravel", "Bootstrap", "PHP", "MySQL", "Livewire"],
  }
];
