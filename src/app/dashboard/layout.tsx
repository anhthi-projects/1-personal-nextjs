"use client";
import { FC, ReactNode } from "react";

import { Brand } from "./_layouts/left-bar/brand";
import { Menu } from "./_layouts/left-bar/menu";
import { HiLoggedUser } from "./_layouts/right-bar/hi-logged-user";
import { SignOut } from "./_layouts/right-bar/signout";
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
      <MainContainer>{children}</MainContainer>
      <RightBarContainer>
        <HiLoggedUser />
        <SignOut />
      </RightBarContainer>
    </LayoutContainer>
  );
};

export default DashboardLayout;
