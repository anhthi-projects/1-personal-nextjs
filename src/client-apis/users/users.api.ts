import { createApi } from "@reduxjs/toolkit/query/react";

import { UserModel } from "@/models/user.model";

import { createRtkFetchBase } from "../fetch-base";

import { UpdateUserRequest } from "./users.types";

export const usersApi = createApi({
  reducerPath: "users",
  baseQuery: createRtkFetchBase(),
  endpoints: (builder) => ({
    updateUser: builder.mutation<UserModel, UpdateUserRequest>({
      query: ({ id, payload }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: payload,
      }),
    }),
  }),
});

export const { useUpdateUserMutation } = usersApi;
