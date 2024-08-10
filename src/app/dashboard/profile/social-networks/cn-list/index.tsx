import { FC, useEffect } from "react";

import { Box, Flex, Typography, usySpacing } from "@anhthi-projects/usy-ui";

import { useDeleteSocialNetworkMutation } from "@/client-apis/social-networks/social-networks.api";
import { SocialNetworkModel } from "@/models/social-network.model";

import { StyledTrashBinIcon } from "./cn-list.styled";

type CnListProps = {
  socialNetworks: SocialNetworkModel[];
  setSocialNetworks: (socialNetworks: SocialNetworkModel[]) => void;
};

export const CnList: FC<CnListProps> = ({
  socialNetworks,
  setSocialNetworks,
}) => {
  const [
    deleteSocialNetwork,
    {
      isLoading: isDeleteSocialNetworkLoading,
      isSuccess: isDeleteSocialNetworkSuccess,
      data: deletedSocialNetwork,
    },
  ] = useDeleteSocialNetworkMutation();

  useEffect(() => {
    if (isDeleteSocialNetworkSuccess && deletedSocialNetwork) {
      const updatedSocialNetworks = [...socialNetworks].filter(
        (cn) => cn.id !== deletedSocialNetwork.id
      );
      setSocialNetworks(updatedSocialNetworks);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDeleteSocialNetworkSuccess]);

  /**
   * Render
   */

  const renderList = () => {
    if ((socialNetworks || []).length === 0) {
      return <Typography size="extra-small">The list is empty</Typography>;
    }

    return (socialNetworks || []).map(({ id, url }) => (
      <Flex
        key={id}
        justifyContent="space-between"
        alignItems="center"
        marginProps={{ margin: `${usySpacing.px6} 0` }}
      >
        <a href={url} target="_blank">
          <Typography size="extra-small" noMargin>
            {url}
          </Typography>
        </a>
        <StyledTrashBinIcon
          width={usySpacing.px16}
          height={usySpacing.px16}
          onClick={() => {
            deleteSocialNetwork({ id });
          }}
        />
      </Flex>
    ));
  };

  return (
    <Box marginProps={{ marginTop: usySpacing.px28 }}>
      <Typography size="medium" weight="semibold" noMargin>
        Your networks
      </Typography>
      {renderList()}
    </Box>
  );
};
