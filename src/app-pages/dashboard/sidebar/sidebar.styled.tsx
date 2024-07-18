import { usyColors, usySpacing } from "@anhthi-projects/usy-ui";
import styled from "styled-components";

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

export const MenuItem = styled.button<{ $isActive?: boolean }>`
  height: ${usySpacing.px32};
  color: ${usyColors.primaryDark};
  background-color: transparent;
  display: inline-flex;
  align-items: center;
  margin: ${usySpacing.px10} 0;
  padding-left: ${usySpacing.px32};
  border: none;
  outline: none;
  font-weight: ${({ $isActive }) => ($isActive ? "bold" : "normal")};
  position: relative;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }

  svg {
    margin-right: ${usySpacing.px20};
  }
`;
