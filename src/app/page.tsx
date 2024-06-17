import {
  EmailIcon,
  FacebookSquareThinIcon,
  Flex,
  LinkedinThinIcon,
  MobileIcon,
  Typography,
} from "@anhthi-projects/usy-ui";

import { Introduce } from "@/screens/home/introduce";

import {
  Content,
  HomeWrapper,
  SideBar,
  Navigator,
  SocialNetworks,
  NavigatorItem,
  Info,
} from "./page.styled";

const Home = () => {
  return (
    <HomeWrapper>
      <SideBar>
        <Flex direction="column">
          <Info>
            <Typography size="large" weight="semibold" isNoMargin>
              @anhthing
            </Typography>
            <Typography size="extraSmall">Senior Developer</Typography>
            <Typography size="extraSmall" isNoMargin>
              Typescript | ReactJS | NextJS | NodeJS
            </Typography>
          </Info>
          <Navigator>
            <NavigatorItem href="#">Home</NavigatorItem>
            <NavigatorItem href="#">Articles</NavigatorItem>
            <NavigatorItem href="#">Portfolios</NavigatorItem>
            <NavigatorItem href="#">Experience</NavigatorItem>
            <NavigatorItem href="#">Skills</NavigatorItem>
          </Navigator>
        </Flex>
        <SocialNetworks>
          <EmailIcon />
          <MobileIcon />
          <FacebookSquareThinIcon />
          <LinkedinThinIcon />
        </SocialNetworks>
      </SideBar>
      <Content>
        <Introduce />
      </Content>
    </HomeWrapper>
  );
};

export default Home;
