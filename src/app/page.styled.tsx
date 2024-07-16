"use client";
import { usyColors, usySpacing } from "@anhthi-projects/usy-ui";
import Link from "next/link";
import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(9, 71, 59);
  background: linear-gradient(
    312deg,
    rgba(9, 71, 59, 1) 0%,
    rgba(14, 131, 108, 1) 54%,
    rgba(28, 205, 170, 1) 100%
  );
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
  padding: 120px ${usySpacing.px32} ${usySpacing.px32};
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  background-color: ${usyColors.white};
  border-top-left-radius: 60px;
  border-bottom-left-radius: 60px;
`;

export const SignInFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${usySpacing.px28};
`;

export const SignUpLink = styled(Link)`
  color: ${usyColors.primaryDark};
`;
