"use client";
import { FC, useEffect, useState } from "react";

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
  CloseIcon,
  usySpacing,
  LoadingCircleIcon,
} from "@anhthi-projects/usy-ui";
import { useSession } from "next-auth/react";
import { Controller, useForm } from "react-hook-form";

import {
  useCreateSocialNetworkMutation,
  useDeleteSocialNetworkMutation,
} from "@/client-apis/social-networks/social-networks.api";
import { ValidateRules } from "@/constants/validate";
import { SocialNetworkModel } from "@/models/social-network.model";

import { StyledSubmitButton } from "./social-networks.styled";

type SocialNetworkValue = { name: string; url: string };

type SocialNetworkForm = {
  socialType: SelectItemType<SocialNetworkValue>;
  socialUsername: string;
};

type SocialNetworksProps = {
  socialNetworks?: SocialNetworkModel[];
};

const socialNetworkItems: SelectItemType<SocialNetworkValue>[] = [
  {
    label: <BrandFacebookIcon />,
    value: {
      name: "facebook",
      url: "https://facebook.com",
    },
  },
  {
    label: <BrandLinkedinIcon />,
    value: {
      name: "linkedin",
      url: "https://www.linkedin.com/in",
    },
  },
  {
    label: <BrandGithubIcon />,
    value: { name: "github", url: "https://github.com" },
  },
  {
    label: <BrandInstagramIcon />,
    value: {
      name: "instagram",
      url: "https://www.instagram.com",
    },
  },
];

export const SocialNetworks: FC<SocialNetworksProps> = ({
  socialNetworks: initSocialNetworks,
}) => {
  const { data: session } = useSession();
  const [socialNetworks, setSocialNetworks] = useState(
    initSocialNetworks || []
  );

  const [
    createSocialNetwork,
    {
      isLoading: isCreateSocialNetworkLoading,
      isSuccess: isCreateSocialNetworkSuccess,
      data: createdSocialNetwork,
    },
  ] = useCreateSocialNetworkMutation();
  const [
    deleteSocialNetwork,
    {
      isLoading: isDeleteSocialNetworkLoading,
      isSuccess: isDeleteSocialNetworkSuccess,
      data: deletedSocialNetwork,
    },
  ] = useDeleteSocialNetworkMutation();

  const {
    control,
    formState: { errors },
    reset,
    watch,
    handleSubmit,
  } = useForm<SocialNetworkForm>({
    defaultValues: {
      socialType: socialNetworkItems[0],
      socialUsername: "",
    },
  });

  const watchingSocialType = watch("socialType").value;
  const watchingSocialUsername = watch("socialUsername");

  useEffect(() => {
    if (isCreateSocialNetworkSuccess && createdSocialNetwork) {
      setSocialNetworks([...socialNetworks, createdSocialNetwork]);
      toastIns.success(`Your ${createdSocialNetwork.name} was added`);
      reset();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCreateSocialNetworkSuccess, createdSocialNetwork]);

  useEffect(() => {
    if (isDeleteSocialNetworkSuccess && deletedSocialNetwork) {
      const updatedSocialNetworks = [...socialNetworks].filter(
        (cn) => cn.id !== deletedSocialNetwork.id
      );
      setSocialNetworks(updatedSocialNetworks);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDeleteSocialNetworkSuccess]);

  const submitForm = ({ socialType, socialUsername }: SocialNetworkForm) => {
    if (!session?.user.id) {
      return;
    }

    const isCurrentSnExisted = !!socialNetworks.find(
      (cn) => cn.name === watchingSocialType.name
    );

    if (isCurrentSnExisted) {
      toastIns.warning({
        title: `The ${watchingSocialType.name} is existed`,
        description: "You can remove and add a new one",
      });
      return;
    }

    createSocialNetwork({
      payload: {
        name: socialType.value.name,
        url: `${socialType.value.url}/${socialUsername}`,
        userId: session.user.id,
      },
    });
  };

  /**
   * Render input form
   */

  const renderInputForm = () => {
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
                    {isCreateSocialNetworkLoading ? (
                      <LoadingCircleIcon />
                    ) : (
                      <ReplyIcon />
                    )}
                  </StyledSubmitButton>
                }
                hasError={Boolean(errors["socialUsername"]?.message)}
                description={errors["socialUsername"]?.message}
              />
            )}
          />
        </Flex>
        <Typography size="extra-small">{`${watchingSocialType.url}/${watchingSocialUsername}`}</Typography>
      </form>
    );
  };

  const renderList = () => {
    return (
      <Box marginProps={{ marginTop: usySpacing.px28 }}>
        <Typography size="medium" weight="semibold" noMargin>
          Your current networks
        </Typography>
        {(socialNetworks || []).map(({ id, url }) => (
          <Flex
            key={id}
            justifyContent="space-between"
            alignItems="center"
            marginProps={{ margin: `${usySpacing.px6} 0` }}
          >
            <a href={url}>
              <Typography size="extra-small" noMargin>
                {url}
              </Typography>
            </a>
            {isDeleteSocialNetworkLoading ? (
              <LoadingCircleIcon />
            ) : (
              <CloseIcon
                width={usySpacing.px16}
                height={usySpacing.px16}
                onClick={() => {
                  deleteSocialNetwork({ id });
                }}
              />
            )}
          </Flex>
        ))}
      </Box>
    );
  };

  return (
    <>
      {renderInputForm()}
      {renderList()}
    </>
  );
};
