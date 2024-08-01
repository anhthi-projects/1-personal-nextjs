"use client";
import {
  Box,
  Button,
  Flex,
  Input,
  TextArea,
  usySpacing,
} from "@anhthi-projects/usy-ui";
import { Controller, useForm } from "react-hook-form";

import { ValidateRules } from "@/constants/validate";
import { UserModel } from "@/models/user.model";

import { FormContainer } from "./user-info.styled";

type FormFields = Omit<
  UserModel,
  | "id"
  | "username"
  | "password"
  | "avatarUrl"
  | "cvUrl"
  | "refreshToken"
  | "projects"
  | "socialNetworks"
>;

export const UserInfo = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFields>({
    reValidateMode: "onBlur",
  });

  console.log(errors);

  const onSubmit = (data: FormFields) => {
    console.log(data);
  };

  const onReset = () => {
    reset();
  };

  /**
   * Render
   */

  const renderLeftColumn = () => {
    return (
      <Flex direction="column" gap="18px" grow={1}>
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
          name="phone"
          control={control}
          rules={{
            required: ValidateRules.required,
            pattern: ValidateRules.phonePattern,
          }}
          render={({ field }) => (
            <Input
              {...field}
              title="Phone"
              hasError={Boolean(errors["phone"]?.message)}
              description={errors["phone"]?.message}
            />
          )}
        />
      </Flex>
    );
  };

  const renderRightColumn = () => {
    return (
      <Flex direction="column" gap="18px" grow={1}>
        <Controller
          name="jobPosition"
          control={control}
          rules={{ required: ValidateRules.required }}
          render={({ field }) => (
            <Input
              {...field}
              title="Job Position"
              hasError={Boolean(errors["jobPosition"]?.message)}
              description={errors["jobPosition"]?.message}
            />
          )}
        />
        <Controller
          name="yearOfExp"
          control={control}
          rules={{ required: ValidateRules.required }}
          render={({ field }) => (
            <Input
              {...field}
              title="Year of Experience"
              hasError={Boolean(errors["yearOfExp"]?.message)}
              description={errors["yearOfExp"]?.message}
            />
          )}
        />
      </Flex>
    );
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Flex gap={usySpacing.px32}>
        {renderLeftColumn()}
        {renderRightColumn()}
      </Flex>
      <Box
        marginProps={{
          marginTop: usySpacing.px20,
          marginBottom: usySpacing.px32,
        }}
      >
        <Controller
          name="aboutMe"
          control={control}
          rules={{ required: ValidateRules.required }}
          render={({ field }) => (
            <TextArea
              {...field}
              minHeight="200px"
              title="About Me"
              hasError={Boolean(errors["aboutMe"]?.message)}
              description={errors["aboutMe"]?.message}
            />
          )}
        />
      </Box>
      <Flex gap={usySpacing.px20} justifyContent="center">
        <Button type="submit" variant="primary" width="100px">
          Update
        </Button>
        <Button variant="outline" onClick={onReset} width="100px">
          Reset
        </Button>
      </Flex>
    </FormContainer>
  );
};
