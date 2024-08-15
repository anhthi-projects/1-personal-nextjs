"use client";
import { FC, useEffect } from "react";

import { Button, Flex, Input, toastIns, usySpacing } from "@usy-ui/themes";
import { useSession } from "next-auth/react";
import { Controller, useForm } from "react-hook-form";

import { useChangeUsernameMutation } from "@/client-apis/users/users.api";
import { ValidateRules } from "@/constants/validate";
import { UserModel } from "@/models/user.model";
import {
  AppException,
  HttpErrorCode,
  ValidationErrorCode,
} from "@/types/exception";

type ChangeUsernameForm = {
  username: string;
};

type ChangeUsernameProps = {
  user?: UserModel;
};

export const ChangeUsername: FC<ChangeUsernameProps> = ({ user }) => {
  const { update: updateSession } = useSession();
  const [
    changeUsername,
    {
      data: updatedUser,
      error: updatedUserError,
      isLoading: isChangeUsernameLoading,
      isSuccess: isChangeUsernameSuccess,
      isError: isChangeUsernameError,
    },
  ] = useChangeUsernameMutation();

  useEffect(() => {
    if (isChangeUsernameSuccess && updatedUser) {
      toastIns.success("Your username was changed");
      updateSession(updatedUser);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChangeUsernameSuccess, updatedUser]);

  useEffect(() => {
    if (isChangeUsernameError && "data" in updatedUserError) {
      const errorMessage = (updatedUserError.data as AppException)?.message[0];
      const errorCode = errorMessage.details.code;
      console.log("errorCode", errorCode);

      switch (errorCode) {
        case ValidationErrorCode.MIN_LENGTH: {
          toastIns.warning("Should be more than 4 characters");
          break;
        }
        case ValidationErrorCode.MAX_LENGTH: {
          toastIns.warning("Should be less than 30 characters");
          break;
        }
        case HttpErrorCode.FORBIDDEN: {
          toastIns.warning("The username is existed");
          break;
        }
      }
    }
  }, [isChangeUsernameError, updatedUserError]);

  const {
    control,
    handleSubmit,
    formState: {
      errors: { username: usernameErrors },
    },
  } = useForm<ChangeUsernameForm>({
    defaultValues: {
      username: user?.username || "",
    },
  });

  const submitForm = (values: ChangeUsernameForm) => {
    changeUsername({
      userId: user?.id || "",
      payload: { username: values.username },
    });
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Flex justifyContent="space-between" gap={usySpacing.px10}>
        <Controller
          name="username"
          control={control}
          rules={{
            required: ValidateRules.required,
            pattern: ValidateRules.usernamePattern,
          }}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Your own username"
              hasError={Boolean(usernameErrors?.message)}
              description={usernameErrors?.message}
            />
          )}
        />
        <Button
          type="submit"
          variant="outline"
          isLoading={isChangeUsernameLoading}
        >
          Change
        </Button>
      </Flex>
    </form>
  );
};
