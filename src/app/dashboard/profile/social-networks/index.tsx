"use client";
import { FC, useState } from "react";

import { SocialNetworkModel } from "@/models/social-network.model";

import { CnForm } from "./cn-form";
import { CnList } from "./cn-list";

type SocialNetworksProps = {
  socialNetworks?: SocialNetworkModel[];
};

export const SocialNetworks: FC<SocialNetworksProps> = ({
  socialNetworks: initSocialNetworks,
}) => {
  const [socialNetworks, setSocialNetworks] = useState(
    initSocialNetworks || []
  );

  return (
    <>
      <CnForm
        socialNetworks={socialNetworks}
        setSocialNetworks={setSocialNetworks}
      />
      <CnList
        socialNetworks={socialNetworks}
        setSocialNetworks={setSocialNetworks}
      />
    </>
  );
};
