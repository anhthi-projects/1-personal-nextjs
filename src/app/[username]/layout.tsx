import { FC, ReactNode, Suspense } from "react";

import { SideBar } from "./_layouts/sidebar";
import {
  ContentScrollable,
  PersonalWrapper,
  SideBarContainer,
} from "./layout.styled";
import Loading from "./loading";

interface PersonalLayoutProps {
  children: ReactNode;
  params: {
    username: string;
  };
}

const PersonalLayout: FC<PersonalLayoutProps> = ({ params, children }) => {
  return (
    <PersonalWrapper>
      <SideBarContainer>
        <SideBar username={params.username} />
      </SideBarContainer>
      <ContentScrollable
        heightProps={{ minHeight: "100vh", maxHeight: "100vh" }}
        paddingProps={{ padding: "90px 60px 30px 100px" }}
      >
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </ContentScrollable>
    </PersonalWrapper>
  );
};

export default PersonalLayout;
