import { Toast } from "@anhthi-projects/usy-ui";
import type { Metadata } from "next";
import { Poppins, Playfair } from "next/font/google";

import "@anhthi-projects/usy-ui/dist/styles.css";

import "./globals.css";
import { StyledComponentsRegistry } from "@/app-core/registry";
import { StoreProvider } from "@/app-core/store-provider";

const poppins = Poppins({ subsets: ["latin"], weight: "300" });
const playfair = Playfair({ subsets: ["latin"], weight: "400" });

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
      <body className={(playfair.className, poppins.className)}>
        <StoreProvider>
          <StyledComponentsRegistry>
            <Toast />
            {children}
          </StyledComponentsRegistry>
        </StoreProvider>
      </body>
    </html>
  );
}
