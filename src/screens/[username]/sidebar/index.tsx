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
} from "./styled";

export const SideBar = () => {
  const renderInfo = () => {
    return (
      <Info>
        <NameTypography size="large" weight="semibold">
          ⇒ anhthing
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
        <NavigatorItem href="#">Home</NavigatorItem>
        <NavigatorItem href="#">Articles</NavigatorItem>
        <NavigatorItem href="#">Portfolios</NavigatorItem>
        <NavigatorItem href="#">Experience</NavigatorItem>
        <NavigatorItem href="#">Skills</NavigatorItem>
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
