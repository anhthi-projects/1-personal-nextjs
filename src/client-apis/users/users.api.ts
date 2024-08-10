import { createApi } from "@reduxjs/toolkit/query/react";

import { UserModel } from "@/models/user.model";
import { AppException } from "@/types/exception";

import { createRtkFetchBase } from "../fetch-base";

import { ChangeUsernameRequest, UpdateUserRequest } from "./users.types";

export const usersApi = createApi({
  reducerPath: "users",
  baseQuery: createRtkFetchBase(),
  endpoints: (builder) => ({
    updateUserById: builder.mutation<UserModel, UpdateUserRequest>({
      query: ({ userId, payload }) => ({
        url: `/users/${userId}/update`,
        method: "PUT",
        body: payload,
      }),
    }),
    changeUsername: builder.mutation<
      UserModel | AppException,
      ChangeUsernameRequest
    >({
      query: ({ userId, payload }) => ({
        url: `/users/${userId}/change-username`,
        method: "PUT",
        body: payload,
      }),
    }),
  }),
});

export const { useUpdateUserByIdMutation, useChangeUsernameMutation } =
  usersApi;
