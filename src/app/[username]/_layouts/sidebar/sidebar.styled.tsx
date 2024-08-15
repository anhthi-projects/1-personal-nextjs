"use client";
import {
  Typography,
  usyColors,
  usyFontSizes,
  usySpacing,
} from "@usy-ui/themes";
import Link from "next/link";
import styled from "styled-components";

/**
 * SideBar
 */

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameTypography = styled(Typography)`
  margin: 0 0 ${usySpacing.px12};
`;

export const JobTitleTypography = styled(Typography)`
  margin: 0 0 ${usySpacing.px8};
`;

export const Navigator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 100px;
`;

export const NavigatorItem = styled(Link)`
  text-transform: uppercase;
  font-size: ${usyFontSizes.sm};
  color: ${usyColors.dark3};
  margin: 10px 0;
  letter-spacing: 2px;
  font-weight: 600;
  position: relative;

  &::after {
    content: "";
    width: 0;
    height: ${usySpacing.px4};
    background-color: ${usyColors.primary};
    position: absolute;
    bottom: -${usySpacing.px4};
    left: 0;
    transition: 0.2s ease-in-out;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

export const SocialNetworks = styled.div`
  display: flex;
  flex-direction: row;

  svg {
    width: 26px;
    height: 26px;
    margin-right: ${usySpacing.px8};
    fill: ${usyColors.dark5};
  }
`;
