import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import { Header } from "@/components/Header";
import type { Metadata } from "next";
import { ClientLayout } from "@/context/ClientLayout";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Countries app",
  description: "A web application to search for countries details",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} bg-neutral-100/50 dark:bg-dark-dark`}
      >
        <ClientLayout>
          <Header />
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
