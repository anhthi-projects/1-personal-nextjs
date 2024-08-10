import { createApi } from "@reduxjs/toolkit/query/react";

import { SocialNetworkModel } from "@/models/social-network.model";

import { createRtkFetchBase } from "../fetch-base";

import {
  CreateSocialNetworkRequest,
  DeleteSocialNetworkRequest,
} from "./social-networks.types";

export const socialNetworksApi = createApi({
  reducerPath: "social-networks",
  baseQuery: createRtkFetchBase(),
  endpoints: (builder) => ({
    createSocialNetwork: builder.mutation<
      SocialNetworkModel,
      CreateSocialNetworkRequest
    >({
      query: ({ payload }) => ({
        url: "/social-networks/create",
        method: "POST",
        body: payload,
      }),
    }),
    deleteSocialNetwork: builder.mutation<
      SocialNetworkModel,
      DeleteSocialNetworkRequest
    >({
      query: ({ id }) => ({
        url: `/social-networks/${id}/delete`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateSocialNetworkMutation,
  useDeleteSocialNetworkMutation,
} = socialNetworksApi;
