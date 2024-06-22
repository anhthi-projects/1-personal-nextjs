"use client";
import { Button, Input, Password, Typography } from "@anhthi-projects/usy-ui";
import { Controller, useForm } from "react-hook-form";

import { ValidateRules } from "@/constants/validate";
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
  const {
    handleSubmit,
    getValues,
    control,
    formState: { errors },
  } = useForm<SignUpForm>({
    reValidateMode: "onSubmit",
  });

  const onSubmit = (data: SignUpForm) => {
    console.log(data);
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
        <Typography align="center">
          {`Already has an account?`}
          {`  `}
          <SignInLink href="/">Sign In</SignInLink>
        </Typography>
      </SignUpFormContainer>
    </SignUpContainer>
  );
};

export default SignUp;
