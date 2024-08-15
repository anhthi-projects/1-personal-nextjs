"use client";
import { usyColors, Scrollable } from "@usy-ui/themes";
import styled from "styled-components";

import { MAX_WIDTH } from "@/styles/constants";

export const PersonalWrapper = styled.div`
  max-width: ${MAX_WIDTH};
  margin: 0 auto;
  display: flex;
  overflow: hidden auto;
  background-color: #fff;
`;

export const SideBarContainer = styled.div`
  min-width: 280px;
  max-width: 280px;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 100px 40px 70px 50px;
  border-right: 1px solid ${usyColors.light1};
`;

export const ContentScrollable = styled(Scrollable)`
  flex-grow: 1;
  border-right: 1px solid ${usyColors.light1};
`;
