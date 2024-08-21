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
    monthStart: 1,
    companyName: "PT. Mahir Tekno Utama",
    yearEnd: 2023,
    monthEnd: 2,
    companyLogo: logoMtu.src,
    jobTitle: "Fullstack Developer",
  },
  {
    yearStart: 2023,
    monthStart: 7,
    companyName: "Calorify Indonesia",
    companyLogo: logoCalorify.src,
    jobTitle: "Cloud Engineer & Backend Developer",
  },
  // {
  //   yearStart: 2018,
  //   monthStart: 3,
  //   yearEnd: 2019,
  //   monthEnd: 0,
  //   companyName: "",
  //   companyLogo: calorify.src,
  //   jobTitle: "Cloud Engineer & Backend Developer",
  // },
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
