"use client";
import { FC, ReactNode } from "react";

import { LeftBar } from "./_layouts/left-bar";
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
      <RightBarContainer>Right bar</RightBarContainer>
    </LayoutContainer>
  );
};

export default DashboardLayout;
