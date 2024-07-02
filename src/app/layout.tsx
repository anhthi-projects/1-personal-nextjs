import { Toast } from "@anhthi-projects/usy-ui";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "@anhthi-projects/usy-ui/dist/styles.css";
import { StyledComponentsRegistry } from "@/lib/registry";

import "./globals.css";
import StoryProvider from "./store-provider";

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
        <StoryProvider>
          <StyledComponentsRegistry>
            <Toast />
            {children}
          </StyledComponentsRegistry>
        </StoryProvider>
      </body>
    </html>
  );
}
