"use client";
import { usyColors, usySpacing } from "@anhthi-projects/usy-ui";
import Link from "next/link";
import styled from "styled-components";

export const SignUpContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(9, 71, 59);
  background: linear-gradient(
    312deg,
    rgba(9, 71, 59, 1) 0%,
    rgba(14, 131, 108, 1) 54%,
    rgba(28, 205, 170, 1) 100%
  );
`;

export const SignUpFormContainer = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: ${usyColors.white};
  padding: 60px ${usySpacing.px32} 60px;
  border-radius: 10px;
`;

export const SignInLink = styled(Link)`
  color: ${usyColors.primaryDark};
`;
