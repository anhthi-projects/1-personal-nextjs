"use client";
import { useEffect, useRef } from "react";

import {
  buildPath,
  Button,
  Input,
  Password,
  toastIns,
  Typography,
} from "@usy-ui/themes";
import { redirect } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { Controller, useForm } from "react-hook-form";

import { StorageKeys } from "@/constants/app";
import { AppRoute, DashboardSubRoute } from "@/constants/routes";
import { ValidateRules } from "@/constants/validate";

import {
  HomeContainer,
  Illustration,
  SidePanel,
  SignInFormContainer,
  SignInTypography,
  SignUpLink,
} from "./page.styled";

type SignInForm = {
  email: string;
  password: string;
};

const Home = () => {
  const { status: sessionStatus, data: sessionData } = useSession();
  const isSubmitted = useRef(false);
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInForm>({
    reValidateMode: "onBlur",
  });

  useEffect(() => {
    if (sessionStatus === "authenticated" && isSubmitted.current) {
      localStorage.setItem(
        StorageKeys.ACCESS_TOKEN,
        sessionData.user.accessToken
      );
      localStorage.setItem(
        StorageKeys.REFRESH_TOKEN,
        sessionData.user.refreshToken
      );

      redirect(
        buildPath(AppRoute.DASHBOARD, {
          section: DashboardSubRoute.PROFILE,
        })
      );
    }
  }, [sessionStatus, sessionData]);

  const onSubmit = async (data: SignInForm) => {
    const signInRes = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    isSubmitted.current = true;

    if (!signInRes?.ok) {
      toastIns.warning({
        title: "Sign in failed",
        description: "Your email or password are incorrect",
      });
    }
  };

  const renderSignInForm = () => {
    return (
      <SignInFormContainer onSubmit={handleSubmit(onSubmit)}>
        <SignInTypography>Sign In</SignInTypography>
        <Controller
          name="email"
          control={control}
          rules={{
            required: ValidateRules.required,
            pattern: ValidateRules.emailPattern,
          }}
          render={({ field }) => (
            <Input
              {...field}
              title="Email"
              hasError={Boolean(errors["email"]?.message)}
              description={errors["email"]?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: ValidateRules.required }}
          render={({ field }) => (
            <Password
              {...field}
              title="Password"
              hasError={Boolean(errors["password"]?.message)}
              description={errors["password"]?.message}
            />
          )}
        />
        <Button type="submit" variant="filled">
          Sign In
        </Button>
        <Typography size="small" align="center">
          {`Don't have an account?`}
          {`  `}
          <SignUpLink href="sign-up">Sign Up</SignUpLink>
        </Typography>
      </SignInFormContainer>
    );
  };

  return (
    <HomeContainer>
      <Illustration />
      <SidePanel>{renderSignInForm()}</SidePanel>
    </HomeContainer>
  );
};

export default Home;
