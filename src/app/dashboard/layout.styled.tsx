"use client";
import { usyColors, usySpacing } from "@anhthi-projects/usy-ui";
import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #f2f2f2;
`;

/**
 * Menu
 */

export const MenuContainer = styled.div`
  min-width: 300px;
  max-width: 300px;
  min-height: calc(100vh - 24px);
`;

/**
 * Main
 */

export const MainContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-right: ${usySpacing.px12};
`;
