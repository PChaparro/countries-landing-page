"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const BackButton = () => {
  const router = useRouter();

  return (
    <button
      className="flex gap-2 px-8 py-2 my-12 bg-white shadow-md dark:bg-dark-soft dark:shadow-slate-800/20"
      onClick={() => router.back()}
    >
      <ArrowLeft />
      Back
    </button>
  );
};
