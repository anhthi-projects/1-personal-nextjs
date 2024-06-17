"use client";
import {
  usyColors,
  usyFontSizes,
  usyFontWeights,
  usySpacing,
} from "@anhthi-projects/usy-ui";
import styled from "styled-components";

import { MAX_WIDTH } from "@/styles/constants";

const PADDING_TOP = "100px";

export const HomeWrapper = styled.div`
  max-width: ${MAX_WIDTH};
  margin: 0 auto;
  display: flex;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  overflow: hidden auto;
  background-color: #fff;
`;

/**
 * SideBar
 */

export const SideBar = styled.div`
  width: 300px;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: ${PADDING_TOP} 30px 70px 80px;
  border-right: 1px solid #ccc;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Navigator = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

export const NavigatorItem = styled.a`
  text-transform: uppercase;
  font-size: ${usyFontSizes.sm};
  color: ${usyColors.dark3};
  margin: 10px 0;
  letter-spacing: 2px;
  font-weight: 600;
`;

export const SocialNetworks = styled.div`
  display: flex;
  flex-direction: row;
`;

/**
 * Content
 */

export const Content = styled.div`
  flex-grow: 1;
  min-height: 100vh;
  max-height: 100vh;
  padding: ${PADDING_TOP} 30px 30px 120px;
  overflow: hidden auto;
`;
