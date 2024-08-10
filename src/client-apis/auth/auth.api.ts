import { createApi } from "@reduxjs/toolkit/query/react";

import { UserModel } from "@/models/user.model";

import { createRtkFetchBase } from "../fetch-base";

import { CreateUserRequest } from "./auth.types";

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: createRtkFetchBase(),
  endpoints: (builder) => ({
    signUp: builder.mutation<UserModel, CreateUserRequest>({
      query: (payload) => ({
        url: "/auth/signup",
        method: "POST",
        body: payload,
      }),
    }),
    signOut: builder.mutation<null, void>({
      query: () => ({
        url: "/auth/signout",
        method: "POST",
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignOutMutation } = authApi;
