"use client";
import { useEffect } from "react";

import {
  Box,
  BrandFacebookIcon,
  BrandGithubIcon,
  BrandInstagramIcon,
  BrandLinkedinIcon,
  ReplyIcon,
  Flex,
  Input,
  Select,
  SelectItemType,
  Typography,
  Button,
  toastIns,
} from "@anhthi-projects/usy-ui";
import { useSession } from "next-auth/react";
import { Controller, useForm } from "react-hook-form";

import { useCreateSocialNetworkMutation } from "@/client-apis/social-networks/social-networks.api";
import { ValidateRules } from "@/constants/validate";

import { StyledSubmitButton } from "./social-networks.styled";

type SocialNetworkValue = { type: string; url: string };

type SocialNetworkForm = {
  socialType: SelectItemType<SocialNetworkValue>;
  socialUsername: string;
};

const socialNetworkItems: SelectItemType<SocialNetworkValue>[] = [
  {
    label: <BrandFacebookIcon />,
    value: {
      type: "facebook",
      url: "https://facebook.com",
    },
  },
  {
    label: <BrandLinkedinIcon />,
    value: {
      type: "linkedin",
      url: "https://www.linkedin.com/in",
    },
  },
  {
    label: <BrandGithubIcon />,
    value: { type: "github", url: "https://github.com" },
  },
  {
    label: <BrandInstagramIcon />,
    value: {
      type: "instagram",
      url: "https://www.instagram.com",
    },
  },
];

export const SocialNetworks = () => {
  const { data: session } = useSession();
  const [createSocialNetwork, { isSuccess: isCreateSocialNetworkSuccess }] =
    useCreateSocialNetworkMutation();
  const {
    control,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm<SocialNetworkForm>({
    reValidateMode: "onBlur",
    values: {
      socialType: socialNetworkItems[0],
      socialUsername: "",
    },
  });

  useEffect(() => {
    if (isCreateSocialNetworkSuccess) {
      toastIns.success("Create social network success");
    }
  }, [isCreateSocialNetworkSuccess]);

  const submitForm = (values: SocialNetworkForm) => {
    if (!session?.user.id) {
      return;
    }

    createSocialNetwork({
      payload: {
        name: values.socialType.value.type,
        url: `${values.socialType.value.url}/${values.socialUsername}`,
        userId: session.user.id,
      },
    });
  };

  /**
   * Render input form
   */

  const renderInputForm = () => {
    const socialUrl = watch("socialType").value.url;
    const socialUsername = watch("socialUsername");

    return (
      <form onSubmit={handleSubmit(submitForm)}>
        <Flex gap="4px">
          <Controller
            name="socialType"
            control={control}
            render={({ field }) => (
              <Box widthProps={{ width: "90px", minWidth: "80px" }}>
                <Select {...field} items={socialNetworkItems} />
              </Box>
            )}
          />
          <Controller
            name="socialUsername"
            control={control}
            rules={{ required: ValidateRules.required }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="<your_username>"
                iconRight={
                  <StyledSubmitButton variant="invisible" type="submit">
                    <ReplyIcon />
                  </StyledSubmitButton>
                }
                hasError={Boolean(errors["socialUsername"]?.message)}
                description={errors["socialUsername"]?.message}
              />
            )}
          />
        </Flex>
        <Typography size="extra-small">{`${socialUrl}/${socialUsername}`}</Typography>
      </form>
    );
  };

  return <>{renderInputForm()}</>;
};
