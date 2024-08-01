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
    login: builder.mutation<SignInResponse, SignInRequest>({
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useSignUpMutation, useLoginMutation } = authApi;
