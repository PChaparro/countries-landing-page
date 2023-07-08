"use client";
import { Container } from "@/components/layout/Container";
import { useTheme } from "next-themes";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function Loading() {
  const { theme } = useTheme();
  const placeholdersCount = Array.from({ length: 12 });

  return (
    <SkeletonTheme
      baseColor={theme === "light" ? "#eaeaea" : "#19252C"}
      highlightColor={theme === "light" ? "#fcfcfc" : "#2B3743"}
    >
      <Container>
        <div className="flex flex-wrap items-center justify-between my-6">
          <div className="w-full my-4 md:max-w-xs">
            <Skeleton className="w-full p-4" />
          </div>
          <div className="w-[10rem]">
            <Skeleton className="w-full p-4" />
          </div>
        </div>
        {/* Countries container */}
        <section className="grid content-center gap-16 mt-8 grid-cols-auto-fill-250">
          {placeholdersCount.map((_, index) => (
            <div
              className="relative pb-4 overflow-hidden bg-white rounded-lg shadow-md shadow-neutral-200/50 dark:bg-dark-soft dark:shadow-slate-800/20"
              key={`country-placeholder-${index}`}
            >
              {/* 
                Its needed to use position relative and absolute to counter the effect of the 
                "zero-width-no-joiner" of the skeleton library
              */}
              <Skeleton className="w-full rounded-none -top-1 aspect-video" />
              <div className="p-4">
                <Skeleton className="w-full mb-4" height={"1.5rem"} />
                <Skeleton className="w-1/2" count={3} />
              </div>
            </div>
          ))}
        </section>
      </Container>
    </SkeletonTheme>
  );
}
