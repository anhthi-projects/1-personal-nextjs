"use client";
import { FC, useEffect } from "react";

import {
  Button,
  Flex,
  Input,
  Select,
  SelectItemType,
  Tags,
  TextArea,
  toastIns,
  usySpacing,
} from "@usy-ui/themes";
import { useSession } from "next-auth/react";
import { Controller, useForm } from "react-hook-form";

import { useUpdateUserByIdMutation } from "@/client-apis/users/users.api";
import { ValidateRules } from "@/constants/validate";
import { UserModel } from "@/models/user.model";

import { FormContainer } from "./user-info.styled";

type FormFields = Pick<
  UserModel,
  "name" | "email" | "phone" | "jobPosition" | "briefIntro" | "tags" | "aboutMe"
> & {
  yearOfExp: SelectItemType;
};

type UserInfoProps = {
  user?: UserModel;
};

export const UserInfo: FC<UserInfoProps> = ({ user }) => {
  const { data: session, update: updateSession } = useSession();
  const [updateUserById, { data: updatedUser, isLoading, isSuccess }] =
    useUpdateUserByIdMutation();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFields>({
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
      jobPosition: user?.jobPosition || "",
      yearOfExp: {
        label: user?.yearOfExp || 0,
        value: (user?.yearOfExp || 0).toString(),
      },
      briefIntro: user?.briefIntro || "",
      tags: user?.tags || [],
      aboutMe: user?.aboutMe || "",
    },
    reValidateMode: "onBlur",
  });

  useEffect(() => {
    if (isSuccess) {
      updateSession(updatedUser);
      toastIns.success({
        title: "Update success",
        description: "Your new data was saved",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  const onSubmit = (formData: FormFields) => {
    if (!user?.id) {
      return null;
    }

    updateUserById({
      userId: user?.id,
      payload: {
        ...formData,
        yearOfExp: parseInt(formData.yearOfExp.value.toString()),
      },
    });
  };

  const onReset = () => {
    reset();
  };

  /**
   * Render
   */

  const renderMainColumn = () => {
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

  const renderExtraColumn = () => {
    return (
      <Flex direction="column" gap="18px" grow={1}>
        <Controller
          name="jobPosition"
          control={control}
          render={({ field }) => <Input {...field} title="Job Position" />}
        />
        <Controller
          name="yearOfExp"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              items={[
                { id: "2-years", label: "2 years", value: 2 },
                { id: "5-years", label: "5 years", value: 5 },
                { id: "7-years", label: "7 years", value: 7 },
                { id: "10-years", label: "10 years", value: 10 },
              ]}
              value={field.value}
              title="Year of Experience"
            />
          )}
        />
        <Controller
          name="briefIntro"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              value={field.value.toString()}
              title="Brief Intro"
            />
          )}
        />
      </Flex>
    );
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Flex gap={usySpacing.px32}>
        {renderMainColumn()}
        {renderExtraColumn()}
      </Flex>
      <Flex
        direction="column"
        gap="18px"
        marginProps={{
          marginTop: usySpacing.px20,
          marginBottom: usySpacing.px32,
        }}
      >
        <Controller
          name="tags"
          control={control}
          render={({ field }) => (
            <Tags
              title="Tags"
              tags={field.value}
              onAdd={(tags) => field.onChange(tags)}
              onRemove={(tags) => field.onChange(tags)}
            />
          )}
        />
        <Controller
          name="aboutMe"
          control={control}
          render={({ field }) => (
            <TextArea
              {...field}
              minHeight="150px"
              maxHeight="300px"
              title="About Me"
            />
          )}
        />
      </Flex>
      <Flex gap={usySpacing.px20} justifyContent="center">
        <Button
          type="submit"
          variant="filled"
          width="100px"
          isLoading={isLoading}
        >
          Update
        </Button>
        <Button variant="outline" onClick={onReset} width="100px">
          Reset
        </Button>
      </Flex>
    </FormContainer>
  );
};
