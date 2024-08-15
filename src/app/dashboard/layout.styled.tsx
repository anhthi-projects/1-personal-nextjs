"use client";
import { usyColors, usySpacing } from "@usy-ui/themes";
import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${usyColors.light0};
  gap: ${usySpacing.px16};
`;

export const LeftBarContainer = styled.div`
  min-width: 280px;
  max-width: 280px;
  background-color: ${usyColors.white};
  border-right: 2px solid ${usyColors.light1};
`;

export const MainContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: ${usySpacing.px32} 0;
`;

export const RightBarContainer = styled.div`
  min-width: 300px;
  max-width: 300px;
  background-color: ${usyColors.white};
  border-left: 2px solid ${usyColors.light1};
`;
