import { usyColors, usyFontSizes, usySpacing } from "@usy-ui/themes";
import styled, { css } from "styled-components";

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
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
  font-size: ${usyFontSizes.md};
  position: relative;
  cursor: pointer;

  ${({ $isActive }) =>
    $isActive &&
    css`
      font-weight: bold;
      border-right: 5px solid ${usyColors.primaryLight};
    `};

  &:hover {
    font-weight: bold;
  }

  svg {
    margin-right: ${usySpacing.px32};
  }
`;
