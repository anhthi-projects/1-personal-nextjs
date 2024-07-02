"use client";
import { useEffect } from "react";

import {
  Button,
  Input,
  Password,
  Toast,
  Typography,
  toastIns,
} from "@anhthi-projects/usy-ui";
import { omit } from "lodash";
import { Controller, useForm } from "react-hook-form";

import { ValidateRules } from "@/constants/validate";
import { useCreateUserMutation } from "@/data-fetching/users/users.api";
import { UserModel } from "@/models/user.model";

import {
  SignInLink,
  SignUpContainer,
  SignUpFormContainer,
} from "./sign-up.styled";

type SignUpForm = Pick<
  UserModel,
  "username" | "password" | "name" | "email"
> & {
  confirmPassword: string;
};

const SignUp = () => {
  const [createUser, result] = useCreateUserMutation();

  console.log("result", result);

  useEffect(() => {
    if (!result) {
      return;
    }

    const { isSuccess, isError, error } = result;

    if (isSuccess) {
      toastIns.success({
        title: "Success",
        content: "Your registration has been done",
      });
    }

    const errorMessage = error?.data?.message;
    if (isError && typeof errorMessage === "object") {
      if (errorMessage.details.P2002) {
        toastIns.error({
          title: "Error",
          content: `The ${errorMessage.fields[0]} is already existed`,
        });
      }
    }
  }, [result]);

  const {
    handleSubmit,
    getValues,
    control,
    formState: { errors },
  } = useForm<SignUpForm>({
    reValidateMode: "onSubmit",
  });

  const onSubmit = (data: SignUpForm) => {
    createUser(omit(data, "confirmPassword"));
  };

  return (
    <SignUpContainer onSubmit={handleSubmit(onSubmit)}>
      <SignUpFormContainer>
        <Typography size="large" weight="bold">
          Sign Up
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
        <Controller
          name="confirmPassword"
          control={control}
          rules={{
            required: ValidateRules.isRequired,
            validate: (value: string) => {
              if (value !== getValues("password")) {
                return "Your password doesn't match";
              }
            },
          }}
          render={({ field }) => (
            <Password
              {...field}
              title="Confirm Password"
              hasError={Boolean(errors["confirmPassword"]?.message)}
              description={errors["confirmPassword"]?.message}
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
    </SignUpContainer>
  );
};

export default SignUp;
