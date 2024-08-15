"use client";
import { useEffect } from "react";

import { Button, Input, Password, Typography, toastIns } from "@usy-ui/themes";
import { omit } from "lodash";
import { redirect } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

import { useSignUpMutation } from "@/client-apis/auth/auth.api";
import { AppRoute } from "@/constants/routes";
import { ValidateRules } from "@/constants/validate";
import { UserModel } from "@/models/user.model";
import {
  AppException,
  HttpErrorCode,
  PrismaErrorCode,
} from "@/types/exception";

import {
  Illustration,
  SidePanel,
  SignInLink,
  SignUpContainer,
  SignUpFormContainer,
  SignUpTypography,
} from "./sign-up.styled";

type SignUpForm = Pick<UserModel, "password" | "name" | "email">;

const SignUp = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpForm>({
    reValidateMode: "onBlur",
  });
  const [createUser, { isSuccess, error: signUpError }] = useSignUpMutation();

  useEffect(() => {
    if (isSuccess) {
      toastIns.success({
        title: "Success",
        description: "Your registration has been done",
      });
      redirect(AppRoute.HOME);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (!signUpError) {
      return;
    }

    if ("data" in signUpError) {
      const errorMessage = (signUpError.data as AppException)?.message[0];

      switch (errorMessage.details.code) {
        case PrismaErrorCode.DUPLICATED: {
          toastIns.error({
            title: "Error",
            description: `The ${errorMessage.fieldName} is already existed`,
          });
        }
      }
    }
  }, [signUpError]);

  const onSubmit = (data: SignUpForm) => {
    createUser(data);
  };

  /**
   * Render
   */

  const renderForm = () => {
    return (
      <SignUpFormContainer onSubmit={handleSubmit(onSubmit)}>
        <SignUpTypography>Sign Up</SignUpTypography>

        <Controller
          name="name"
          control={control}
          rules={{ required: ValidateRules.required }}
          render={({ field }) => (
            <Input
              {...field}
              title="Name"
              hasError={Boolean(errors["name"]?.message)}
              description={errors["name"]?.message}
            />
          )}
        />
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
          Register
        </Button>
        <Typography size="small" align="center">
          {`Already has an account?`}
          <SignInLink href="/">Sign In</SignInLink>
        </Typography>
      </SignUpFormContainer>
    );
  };

  return (
    <SignUpContainer>
      <Illustration />
      <SidePanel>{renderForm()}</SidePanel>
    </SignUpContainer>
  );
};

export default SignUp;
