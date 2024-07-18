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
  width: 340px;
  min-height: calc(100vh - 24px);
`;

export const BrandTypography = styled.h3`
  margin: 40px auto auto -${usySpacing.px16};
  text-align: center;
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 240px;
  margin-top: 80px;
`;

export const MenuItem = styled.button<{ isActive?: boolean }>`
  height: ${usySpacing.px32};
  color: ${usyColors.primaryDark};
  background-color: transparent;
  display: inline-flex;
  align-items: center;
  margin: ${usySpacing.px10} 0;
  padding-left: ${usySpacing.px32};
  border: none;
  outline: none;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  position: relative;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }

  svg {
    margin-right: ${usySpacing.px20};
  }
`;

/**
 * Main
 */

export const MainContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const TopBar = styled.div`
  background-color: ${usyColors.white};
  height: 60px;
  margin: ${usySpacing.px12};
  border: 1px solid ${usyColors.light1};
  border-radius: 6px;
`;

export const Content = styled.div`
  flex-grow: 1;
  background-color: ${usyColors.white};
  margin: ${usySpacing.px12};
  border: 1px solid ${usyColors.light1};
  border-radius: 6px;
  overflow: hidden auto;
`;
