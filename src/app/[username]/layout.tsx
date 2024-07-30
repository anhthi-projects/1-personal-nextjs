import { FC, ReactNode, Suspense } from "react";

import { SideBar } from "@/app-pages/[username]/_layouts/sidebar";

import {
  ContentContainer,
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
      <ContentContainer>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </ContentContainer>
    </PersonalWrapper>
  );
};

export default PersonalLayout;
