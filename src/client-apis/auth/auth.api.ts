import { createApi } from "@reduxjs/toolkit/query/react";

import { UserModel } from "@/models/user.model";

import { createRtkFetchBase } from "../fetch-base";

import { CreateUserRequest, SignInRequest, SignInResponse } from "./auth.types";

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: createRtkFetchBase(),
  endpoints: (builder) => ({
    signUp: builder.mutation<UserModel, CreateUserRequest>({
      query: (payload) => ({
        url: "/auth/sign-up",
        method: "POST",
        body: payload,
      }),
    }),
    signIn: builder.mutation<SignInResponse, SignInRequest>({
      query: (payload) => ({
        url: "/auth/sign-in",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = authApi;
