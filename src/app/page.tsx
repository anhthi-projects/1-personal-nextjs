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
import { Controller, useForm } from "react-hook-form";

import { useLoginMutation } from "@/client-apis/auth/auth.api";
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
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInForm>({
    reValidateMode: "onBlur",
  });

  const [signIn, { isSuccess, data }] = useLoginMutation();

  useEffect(() => {
    if (isSuccess) {
      sessionStorage.setItem("__access_token__", data.access_token);
      sessionStorage.setItem("__refresh_token__", data.refresh_token);
      redirect(
        buildPath(AppRoute.DASHBOARD, {
          section: DashboardSubRoute.PROFILE,
        })
      );
    }
  }, [isSuccess, data]);

  const onSubmit = (data: SignInForm) => {
    signIn(data);
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
