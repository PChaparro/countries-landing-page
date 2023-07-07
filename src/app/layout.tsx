import { Header } from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
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
        className={`${nunito.className} bg-neutral-100/50 dark:bg-gray-700`}
      >
        <ClientLayout>
          <>
            <Header />
            {children}
          </>
        </ClientLayout>
      </body>
    </html>
  );
}
