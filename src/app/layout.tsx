import { Toast } from "@anhthi-projects/usy-ui";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "@anhthi-projects/usy-ui/dist/styles.css";

import "./globals.css";
import { StyledComponentsRegistry } from "@/app-core/registry";
import { StoreProvider } from "@/app-core/store-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

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
      <body className={poppins.className}>
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
