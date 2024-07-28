"use client";
import { useEffect } from "react";

import {
  Button,
  Input,
  Password,
  Typography,
  toastIns,
} from "@anhthi-projects/usy-ui";
import { omit } from "lodash";
import { redirect } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

import { useSignUpMutation } from "@/client-apis/auth/auth.api";
import { AppRoute } from "@/constants/routes";
import { ValidateRules } from "@/constants/validate";
import { UserModel } from "@/models/user.model";
import { AppException } from "@/types/exception";
import { PrismaErrorCode } from "@/types/prisma";

import {
  Illustration,
  SidePanel,
  SignInLink,
  SignUpContainer,
  SignUpFormContainer,
  SignUpTypography,
} from "./sign-up.styled";
type SignUpForm = Pick<UserModel, "username" | "password" | "name" | "email">;

const SignUp = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpForm>({
    reValidateMode: "onBlur",
  });
  const [createUser, { isSuccess, error }] = useSignUpMutation();

  useEffect(() => {
    if (isSuccess) {
      toastIns.success({
        title: "Success",
        content: "Your registration has been done",
      });
      redirect(AppRoute.HOME);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (!error) {
      return;
    }

    if ("data" in error) {
      const errorMessage = (error.data as AppException)?.message[0];

      switch (errorMessage.details.code) {
        case PrismaErrorCode.DUPLICATED: {
          toastIns.error({
            title: "Error",
            content: `The ${errorMessage.fieldName} is already existed`,
          });
        }
      }
    }
  }, [error]);

  const onSubmit = (data: SignUpForm) => {
    createUser(omit(data, "confirmPassword"));
  };

  /**
   * Render
   */

  const renderForm = () => {
    return (
      <SignUpFormContainer onSubmit={handleSubmit(onSubmit)}>
        <SignUpTypography>Sign Up</SignUpTypography>
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
        <Controller
          name="name"
          control={control}
          rules={{ required: ValidateRules.isRequired }}
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
            required: ValidateRules.isRequired,
            pattern: ValidateRules.isEmailPattern,
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

        <Button type="submit" variant="primary">
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
