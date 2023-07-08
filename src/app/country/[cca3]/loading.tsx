"use client";
import { BackButton } from "@/components/BackButton";
import { Container } from "@/components/layout/Container";
import { useIsMounted } from "@/hooks/useIsMounted";
import { useTheme } from "next-themes";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function Loading() {
  const { theme } = useTheme();

  const { mounted } = useIsMounted();
  if (!mounted) {
    return (
      <Container>
        <p className="my-8 text-lg text-center">Loading...</p>
      </Container>
    );
  }

  return (
    <SkeletonTheme
      baseColor={theme === "light" ? "#eaeaea" : "#19252C"}
      highlightColor={theme === "light" ? "#fcfcfc" : "#2B3743"}
    >
      <Container>
        <BackButton />
        <div className="grid items-center gap-20 my-2 md:grid-cols-2">
          <Skeleton className="w-full aspect-[4/3]" />
          <div className="flex flex-col justify-center gap-8">
            <Skeleton height={40} className="w-2/3" />
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <Skeleton count={5} />
              </div>
              <div>
                <Skeleton count={3} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SkeletonTheme>
  );
}
