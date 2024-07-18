"use client";
import { FC, ReactNode } from "react";

import {
  BookOutlineIcon,
  UserCircleOutlineIcon,
  ObjectsColumnOutlineIcon,
  BadgeCheckedOutlineIcon,
  ShieldCheckedOutlineIcon,
} from "@anhthi-projects/usy-ui";
import { redirect, usePathname, useRouter } from "next/navigation";

import { DashboardSubRoute } from "@/constants/routes";

import {
  BrandTypography,
  Content,
  LayoutContainer,
  MainContainer,
  MenuContainer,
  MenuItem,
  MenuList,
  TopBar,
} from "./layout.styled";

interface DashboardLayoutProps {
  children: ReactNode;
  params: {
    section: string;
  };
}

interface MenuItemProps {
  label: string;
  icon: ReactNode;
  section: string;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children, params }) => {
  const pathname = usePathname();
  const router = useRouter();
  const renderMenuItem = ({ label, icon, section }: MenuItemProps) => {
    return (
      <MenuItem
        isActive={pathname.endsWith(section)}
        onClick={() => {
          router.push(`/dashboard/${section}`);
        }}
      >
        {icon}
        {label}
      </MenuItem>
    );
  };

  return (
    <LayoutContainer>
      <MenuContainer>
        <BrandTypography>Dashboard</BrandTypography>
        <MenuList>
          {renderMenuItem({
            label: "Profile",
            icon: <UserCircleOutlineIcon />,
            section: DashboardSubRoute.PROFILE,
          })}
          {renderMenuItem({
            label: "Articles",
            icon: <BookOutlineIcon />,
            section: DashboardSubRoute.ARTICLES,
          })}
          {renderMenuItem({
            label: "Portfolios",
            icon: <ObjectsColumnOutlineIcon />,
            section: DashboardSubRoute.PORTFOLIOS,
          })}
          {renderMenuItem({
            label: "Experience",
            icon: <BadgeCheckedOutlineIcon />,
            section: DashboardSubRoute.EXPERIENCE,
          })}
          {renderMenuItem({
            label: "Skills",
            icon: <ShieldCheckedOutlineIcon />,
            section: DashboardSubRoute.SKILLS,
          })}
        </MenuList>
      </MenuContainer>
      <MainContainer>
        <TopBar />
        <Content>{children}</Content>
      </MainContainer>
    </LayoutContainer>
  );
};

export default DashboardLayout;
