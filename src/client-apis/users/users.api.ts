import { createApi } from "@reduxjs/toolkit/query/react";

import { UserModel } from "@/models/user.model";

import { createRtkFetchBase } from "../fetch-base";

import { UpdateUserRequest } from "./users.types";

export const usersApi = createApi({
  reducerPath: "users",
  baseQuery: createRtkFetchBase(),
  endpoints: (builder) => ({
    updateUserById: builder.mutation<UserModel, UpdateUserRequest>({
      query: ({ userId, payload }) => ({
        url: `/users/${userId}`,
        method: "PUT",
        body: payload,
      }),
    }),
  }),
});

export const { useUpdateUserByIdMutation } = usersApi;
