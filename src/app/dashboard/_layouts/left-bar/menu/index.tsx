import { ReactNode } from "react";

import {
  BadgeCheckIcon,
  BookIcon,
  ObjectsColumnIcon,
  ShieldCheckIcon,
  UserCircleIcon,
} from "@usy-ui/themes";
import { usePathname, useRouter } from "next/navigation";

import { DashboardSubRoute } from "@/constants/routes";

import { MenuItem, MenuList } from "./menu.styled";

interface MenuItemProps {
  label: string;
  icon: ReactNode;
  section: string;
}

export const Menu = () => {
  const pathname = usePathname();
  const router = useRouter();

  const renderMenuItem = ({ label, icon, section }: MenuItemProps) => {
    return (
      <MenuItem
        $isActive={pathname.endsWith(section)}
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
    <>
      <MenuList>
        {renderMenuItem({
          label: "Profile",
          icon: <UserCircleIcon />,
          section: DashboardSubRoute.PROFILE,
        })}
        {renderMenuItem({
          label: "Articles",
          icon: <BookIcon />,
          section: DashboardSubRoute.ARTICLES,
        })}
        {renderMenuItem({
          label: "Portfolios",
          icon: <ObjectsColumnIcon />,
          section: DashboardSubRoute.PORTFOLIOS,
        })}
        {renderMenuItem({
          label: "Experience",
          icon: <BadgeCheckIcon />,
          section: DashboardSubRoute.EXPERIENCE,
        })}
        {renderMenuItem({
          label: "Skills",
          icon: <ShieldCheckIcon />,
          section: DashboardSubRoute.SKILLS,
        })}
      </MenuList>
    </>
  );
};
