import { FC, useEffect } from "react";

import {
  Box,
  Flex,
  Input,
  LoadingCircleIcon,
  ReplyIcon,
  Select,
  SelectItemType,
  toastIns,
  Typography,
} from "@usy-ui/themes";
import { useSession } from "next-auth/react";
import { Controller, useForm } from "react-hook-form";

import { useCreateSocialNetworkMutation } from "@/client-apis/social-networks/social-networks.api";
import { ValidateRules } from "@/constants/validate";
import { SocialNetworkModel } from "@/models/social-network.model";

import {
  SocialNetworkItems,
  SocialNetworkValue,
} from "../social-networks.constants";

import { StyledSubmitButton } from "./cn-form.styled";

type SocialNetworkForm = {
  socialType: SelectItemType<SocialNetworkValue>;
  socialUsername: string;
};

type CnFormProps = {
  socialNetworks: SocialNetworkModel[];
  setSocialNetworks: (socialNetworks: SocialNetworkModel[]) => void;
};

export const CnForm: FC<CnFormProps> = ({
  socialNetworks,
  setSocialNetworks,
}) => {
  const { data: session } = useSession();

  const [
    createSocialNetwork,
    {
      isLoading: isCreateSocialNetworkLoading,
      isSuccess: isCreateSocialNetworkSuccess,
      data: createdSocialNetwork,
    },
  ] = useCreateSocialNetworkMutation();

  const {
    control,
    formState: { errors },
    reset,
    watch,
    handleSubmit,
  } = useForm<SocialNetworkForm>({
    defaultValues: {
      socialType: SocialNetworkItems[0],
      socialUsername: "",
    },
  });

  useEffect(() => {
    if (isCreateSocialNetworkSuccess && createdSocialNetwork) {
      setSocialNetworks([...socialNetworks, createdSocialNetwork]);
      toastIns.success(`Your ${createdSocialNetwork.name} was added`);
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCreateSocialNetworkSuccess, createdSocialNetwork]);

  const watchingSocialType = watch("socialType").value;
  const watchingSocialUsername = watch("socialUsername");

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

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Flex gap="4px">
        <Controller
          name="socialType"
          control={control}
          render={({ field }) => (
            <Box widthProps={{ width: "90px", minWidth: "80px" }}>
              <Select {...field} items={SocialNetworkItems} />
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
              placeholder="Your social username"
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
