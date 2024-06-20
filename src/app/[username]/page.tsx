import { Introduce } from "@/screens/[username]/introduce";
import { SideBar } from "@/screens/[username]/sidebar";

import { ContentContainer, HomeWrapper, SideBarContainer } from "./page.styled";

const Personal = ({ params }: { params: { username: string } }) => {
  console.log(params.username);

  return (
    <HomeWrapper>
      <p>{params.username}</p>
      <SideBarContainer>
        <SideBar />
      </SideBarContainer>
      <ContentContainer>
        <Introduce />
      </ContentContainer>
    </HomeWrapper>
  );
};

export default Personal;
