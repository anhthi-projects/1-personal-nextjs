import { Toast } from "@usy-ui/themes";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { StyledComponentsRegistry } from "@/app-core/registry";
import { StoreProvider } from "@/app-core/store-provider";
import { AuthProvider } from "@/providers/auth.provider";

import "@usy-ui/themes/dist/styles.css";
import "./globals.css";

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
        <AuthProvider>
          <StoreProvider>
            <StyledComponentsRegistry>
              <Toast />
              {children}
            </StyledComponentsRegistry>
          </StoreProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
