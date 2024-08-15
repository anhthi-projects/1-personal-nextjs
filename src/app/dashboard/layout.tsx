"use client";
import { FC, ReactNode } from "react";

import { Scrollable } from "@usy-ui/themes";

import { Brand } from "./_layouts/left-bar/brand";
import { Menu } from "./_layouts/left-bar/menu";
import { HiLoggedUser } from "./_layouts/right-bar/hi-logged-user";
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
        <Brand />
        <Menu />
      </LeftBarContainer>
      <Scrollable heightProps={{ maxHeight: "100vh" }}>
        <MainContainer>{children}</MainContainer>
      </Scrollable>
      <RightBarContainer>
        <HiLoggedUser />
      </RightBarContainer>
    </LayoutContainer>
  );
};

export default DashboardLayout;
