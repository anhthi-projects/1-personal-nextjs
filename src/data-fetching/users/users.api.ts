import { createApi } from "@reduxjs/toolkit/query/react";

import { UserModel } from "@/models/user.model";

import { createRtkFetchBase } from "../base";

import { CreateUserDto } from "./users.types";

export const usersApi = createApi({
  reducerPath: "users",
  baseQuery: createRtkFetchBase(),
  endpoints: (builder) => ({
    createUser: builder.mutation<UserModel, CreateUserDto>({
      query: (payload) => ({
        url: "/auth/sign-up",
        method: "POST",
        body: payload,
      }),
    }),
    updateUser: builder.mutation<
      UserModel,
      { id: string; payload: Partial<UserModel> }
    >({
      query: ({ id, payload }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: payload,
      }),
    }),
  }),
});

export const { useCreateUserMutation, useUpdateUserMutation } = usersApi;
