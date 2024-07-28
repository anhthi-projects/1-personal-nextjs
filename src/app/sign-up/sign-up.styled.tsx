"use client";
import { usyColors, usySpacing } from "@anhthi-projects/usy-ui";
import Link from "next/link";
import styled from "styled-components";

export const SignUpContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${usyColors.primaryDark};
`;

export const Illustration = styled.div`
  flex-grow: 1;
`;

export const SidePanel = styled.div`
  width: 100%;
  max-width: 500px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 100px ${usySpacing.px40} ${usySpacing.px40};
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  background-color: ${usyColors.white};
`;

export const SignUpFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${usySpacing.px28};
`;

export const SignUpTypography = styled.h1`
  margin: 0 0 ${usySpacing.px48};
  font-weight: 500;
`;

export const SignInLink = styled(Link)`
  color: ${usyColors.primaryDark};
  margin-left: ${usySpacing.px4};
`;
