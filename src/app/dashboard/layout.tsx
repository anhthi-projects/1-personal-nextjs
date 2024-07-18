"use client";
import { FC, ReactNode } from "react";

import { SideBar } from "@/app-pages/dashboard/sidebar";
import { TopBar } from "@/app-pages/dashboard/topbar";

import { LayoutContainer, MainContainer, MenuContainer } from "./layout.styled";

interface DashboardLayoutProps {
  children: ReactNode;
  params: {
    section: string;
  };
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <MenuContainer>
        <SideBar />
      </MenuContainer>
      <MainContainer>
        <TopBar />
        {children}
      </MainContainer>
    </LayoutContainer>
  );
};

export default DashboardLayout;
