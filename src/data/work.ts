export type WorkType = {
  yearStart: number;
  monthStart: number;
  yearEnd?: number;
  monthEnd?: number;
  companyName: string;
  companyLogo: string;
  jobTitle: string;
};

import freelancer from "@/assets/work/freelancer.webp";
import logoCalorify from "@/assets/work/logo_calorify.png";
import logoMtu from "@/assets/work/logo_mtu.png";
import logoBangkit from "@/assets/work/logo_bangkit.png";
import logoLateral from "@/assets/work/logo_lateralindo.png";
import logoLintasarta from "@/assets/work/logo_lintasarta.png";


export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Desember",
];

// NOTES: month is 0-based index, 0 = January, 11 = December
export const workData: WorkType[] = [
  {
    yearStart: 2023,
    monthStart: 0,
    companyName: "PT. Mahir Tekno Utama",
    yearEnd: 2023,
    monthEnd: 1,
    companyLogo: logoMtu.src,
    jobTitle: "Fullstack Developer",
  },
  {
    yearStart: 2023,
    monthStart: 1,
    yearEnd: 2023,
    monthEnd: 6,
    companyName: "Bangkit",
    companyLogo: logoBangkit.src,
    jobTitle: "Cloud Computing Cohort",
  },
  {
    yearStart: 2023,
    monthStart: 7,
    yearEnd: 2024,
    monthEnd: 11,
    companyName: "Calorify Indonesia",
    companyLogo: logoCalorify.src,
    jobTitle: "Cloud & Backend Developer",
  },
  {
    yearStart: 2024,
    monthStart: 8,
    yearEnd: 2025,
    monthEnd: 3,
    companyName: "Lateral Indonesia",
    companyLogo: logoLateral.src,
    jobTitle: "Cloud Engineer",
  },
  {
    yearStart: 2025,
    monthStart: 3,
    yearEnd: 2025,
    monthEnd: 8,
    companyName: "Lintasarta",
    companyLogo: logoLintasarta.src,
    jobTitle: "L1 Application & Cloud Security Engineer",
  },
    {
    yearStart: 2025,
    monthStart: 9,
    companyName: "Lintasarta",
    companyLogo: logoLintasarta.src,
    jobTitle: "L2 Application & Cloud Security Engineer",
  }
  // {
  //   yearStart: 2023,
  //   monthStart: 10,
  //   yearEnd: 2024,
  //   monthEnd: 1,
  //   companyName: "Freelancer",
  //   companyLogo: freelancer.src,
  //   jobTitle: "Freelance Developer",
  // },
];
