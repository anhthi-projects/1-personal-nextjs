"use client";
import { useEffect } from "react";

import { Button, Input, Password, Typography } from "@anhthi-projects/usy-ui";
import { Controller, useForm } from "react-hook-form";

import { useSignInMutation } from "@/client-apis/auth/auth.api";
import { ValidateRules } from "@/constants/validate";

import {
  HomeContainer,
  Illustration,
  SidePanel,
  SignInFormContainer,
  SignUpLink,
} from "./page.styled";

type SignInForm = {
  username: string;
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

  const [signIn, { isSuccess, data }] = useSignInMutation();

  useEffect(() => {
    if (isSuccess) {
      sessionStorage.setItem("__access_token__", data.access_token);
      sessionStorage.setItem("__refresh_token__", data.refresh_token);
    }
  }, [isSuccess, data]);

  const onSubmit = (data: SignInForm) => {
    signIn(data);
  };

  const renderSignInForm = () => {
    return (
      <>
        <Typography size="large" weight="bold">
          Sign In
        </Typography>
        <Controller
          name="username"
          control={control}
          rules={{ required: ValidateRules.isRequired }}
          render={({ field }) => (
            <Input
              {...field}
              title="Username"
              hasError={Boolean(errors["username"]?.message)}
              description={errors["username"]?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: ValidateRules.isRequired }}
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
        <Typography align="center">
          {`Don't have an account?`}
          {`  `}
          <SignUpLink href="sign-up">Sign Up</SignUpLink>
        </Typography>
      </>
    );
  };

  return (
    <HomeContainer>
      <Illustration />
      <SidePanel>
        <SignInFormContainer onSubmit={handleSubmit(onSubmit)}>
          {renderSignInForm()}
        </SignInFormContainer>
      </SidePanel>
    </HomeContainer>
  );
};

export default Home;
