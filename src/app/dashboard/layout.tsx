"use client";
import { FC, ReactNode } from "react";

import { LeftBar } from "@/app-pages/dashboard/_layouts/left-bar";

import {
  LayoutContainer,
  MainContainer,
  LeftBarContainer,
  RightBarContainer,
} from "./layout.styled";

interface DashboardLayoutProps {
  children: ReactNode;
  params: {
    section: string;
  };
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <LeftBarContainer>
        <LeftBar />
      </LeftBarContainer>
      <MainContainer>{children}</MainContainer>
      <RightBarContainer>
        <RightBarContainer />
      </RightBarContainer>
    </LayoutContainer>
  );
};

export default DashboardLayout;
