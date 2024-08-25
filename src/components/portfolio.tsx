"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Pill } from "@mantine/core";
import { IconLink, IconLinkOff } from "@tabler/icons-react";

import { SearchBar } from "@/components/search-bar";
import { PortfolioType } from "@/data/portfolio-data";
import { cn } from "@/utils/cn";

export function PortfolioCard({
  portfolio,
  className,
}: {
  portfolio: PortfolioType;
  className?: string;
}) {
  const truncatedDescription = portfolio.description
  .map((point) => point.substring(0, 100) + (point.length > 100 ? "..." : ""))
  .join(" "); // Adjust the number to control the length

  return (
    <Link
      href={portfolio.url ?? "#"}
      target={portfolio.url ? "_blank" : undefined}
      rel={portfolio.url ? "noopener noreferrer" : undefined}
      className={portfolio.url ? undefined : "pointer-events-none"}
    >
      <div
        className={cn(
          "min-h-[32rem] rounded-lg border-2 border-[#eaeaea] bg-zinc-50 p-4 dark:border dark:border-neutral-600 dark:bg-zinc-900",
          portfolio.url
            ? "hover:ring-2 hover:ring-yellow-500"
            : "cursor-default",
          className,
        )}
      >
        <div className="relative mb-4 aspect-video overflow-clip rounded-lg">
          <Image
            src={portfolio.image}
            alt={"image of " + portfolio.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="mb-6 flex flex-wrap gap-1">
          {portfolio.tags.map((tag) => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          {portfolio.year}
        </p>
        <h3 className="mb-4 text-xl font-semibold">{portfolio.title}</h3>

        <ul className="text-sm list-disc pl-5">
          {portfolio.description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        {portfolio.url && (
          <div className="mt-6 flex flex-nowrap items-center gap-2 break-all">
            <IconLink size={20} className="flex-shrink-0" />
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {portfolio.url}
            </div>
          </div>
        )}

        {!portfolio.url && portfolio.urlMissingReason && (
          <div className="mt-6 flex flex-nowrap items-center gap-2 break-all">
            <IconLinkOff size={20} className="flex-shrink-0" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {portfolio.urlMissingReason}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}

export function PortfolioList({
  portfolioData,
}: {
  portfolioData: PortfolioType[];
}) {
  const [search, setSearch] = useState("");

  const filteredPortfolioList = useMemo(() => {
    let portfolioFiltered = portfolioData.filter((portfolio) => {
      let portfolioString =
        portfolio.title +
        portfolio.tags.join(" ") +
        portfolio.year +
        portfolio.description;

      return portfolioString.toLowerCase().includes(search.toLowerCase());
    });

    if (portfolioFiltered.length === 0) {
      return <div>No portfolio found</div>;
    }

    return portfolioFiltered.map((portfolio) => (
      <PortfolioCard key={portfolio.title} portfolio={portfolio} />
    ));
  }, [search, portfolioData]);

  return (
    <>
      <SearchBar
        className="w-full lg:w-1/2"
        placeholder="Search portfolio"
        onChange={(e) => setSearch(e.currentTarget.value)}
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-y-6 lg:grid-cols-3">
        {filteredPortfolioList}
      </div>
    </>
  );
}
