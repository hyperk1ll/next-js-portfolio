import { Metadata } from "next";

import { PortfolioList } from "@/components/portfolio";
import { Container } from "@/components/container";

import { portfolioData } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of Muhammad Hilmy Tsany",
};

export default function Portfolio() {
  return (
    <Container>
      <section className="mb-12">
        <h2 className="mb-4 text-5xl font-bold">Portfolio</h2>
        <p>
          Here are some of my works. I have worked on various projects, from
          mobile apps to web apps. I have experience in using various
          technologies such as Next.js, Express.js, Laravel, Flutter, MySQL, PostgreSQL, Firebase, and etc.
        </p>
      </section>

      <PortfolioList portfolioData={portfolioData} />
    </Container>
  );
}
