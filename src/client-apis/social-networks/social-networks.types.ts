import { SocialNetworkModel } from "@/models/social-network.model";

export type CreateSocialNetworkRequest = {
  payload: Partial<Omit<SocialNetworkModel, "id" | "user">>;
};

export type DeleteSocialNetworkRequest = {
  id: string;
};
