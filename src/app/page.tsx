"use client";
import { useEffect } from "react";

import {
  buildPath,
  Button,
  Input,
  Password,
  Typography,
} from "@anhthi-projects/usy-ui";
import { redirect } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { Controller, useForm } from "react-hook-form";

import { SessionStorageKeys } from "@/constants/app";
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
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInForm>({
    reValidateMode: "onBlur",
  });

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      sessionStorage.setItem(
        SessionStorageKeys.ACCESS_TOKEN,
        sessionData.user.accessToken
      );
      sessionStorage.setItem(
        SessionStorageKeys.REFRESH_TOKEN,
        sessionData.user.refreshToken
      );

      redirect(
        buildPath(AppRoute.DASHBOARD, {
          section: DashboardSubRoute.PROFILE,
        })
      );
    }
  }, [sessionStatus, sessionData]);

  const onSubmit = (data: SignInForm) => {
    signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
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
        <Button type="submit" variant="primary">
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
