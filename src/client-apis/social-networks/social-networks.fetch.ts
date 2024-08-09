import { SocialNetworkModel } from "@/models/social-network.model";

import { createNativeFetchBase } from "../fetch-base";

export const getSocialNetworkByUserId = (userId: string) => {
  return createNativeFetchBase<SocialNetworkModel[]>(
    `social-networks/users/${userId}`
  );
};
