import { UsyProvider } from "@anhthi-projects/usy-ui";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "@anhthi-projects/usy-ui/dist/styles.css";
import StyledComponentsRegistry from "@/registries/styled-comps.registry";

import "./globals.css";

const montserrat = Poppins({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "Thi Nguyen | Personal site",
  description: "A personal site for portfolios",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <UsyProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </UsyProvider>
      </body>
    </html>
  );
}
