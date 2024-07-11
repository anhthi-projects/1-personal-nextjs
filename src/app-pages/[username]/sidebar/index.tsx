import { FC } from "react";

import {
  Badge,
  BrandFacebookIcon,
  BrandGithubIcon,
  BrandInstagramIcon,
  BrandLinkedinIcon,
  Flex,
} from "@anhthi-projects/usy-ui";

import {
  Info,
  JobTitleTypography,
  NameTypography,
  Navigator,
  NavigatorItem,
  SocialNetworks,
} from "./sidebar.styled";

interface SideBarProps {
  username: string;
}

export const SideBar: FC<SideBarProps> = ({ username }) => {
  const renderInfo = () => {
    return (
      <Info>
        <NameTypography size="large" weight="semibold">
          ⇒ {username}
        </NameTypography>
        <JobTitleTypography size="small" weight="semibold">
          Senior Developer
        </JobTitleTypography>
        <Flex gap="2px">
          <Badge size="small">ReactJS</Badge>
          <Badge size="small" color="primary-light">
            NodeJS
          </Badge>
          <Badge size="small" color="primary-light">
            Go
          </Badge>
          <Badge size="small">Docker</Badge>
          <Badge size="small" color="primary-light">
            AWS
          </Badge>
        </Flex>
      </Info>
    );
  };

  const renderNavigator = () => {
    return (
      <Navigator>
        <NavigatorItem href="intro">Intro</NavigatorItem>
        <NavigatorItem href="articles">Articles</NavigatorItem>
        <NavigatorItem href="portfolios">Portfolios</NavigatorItem>
        <NavigatorItem href="experience">Experience</NavigatorItem>
        <NavigatorItem href="skills">Skills</NavigatorItem>
      </Navigator>
    );
  };

  return (
    <>
      <Flex direction="column">
        {renderInfo()}
        {renderNavigator()}
      </Flex>
      <SocialNetworks>
        <BrandFacebookIcon />
        <BrandLinkedinIcon />
        <BrandInstagramIcon />
        <BrandGithubIcon />
      </SocialNetworks>
    </>
  );
};
