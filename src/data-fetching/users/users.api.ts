import { createApi } from "@reduxjs/toolkit/query/react";

import { createBaseQuery } from "../base-fetching";

export const usersApi = createApi({
  reducerPath: "users",
  baseQuery: createBaseQuery(),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: ({ payload }) => ({
        url: "/users",
        method: "POST",
        body: payload,
      }),
    }),
    updateUser: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: payload,
      }),
    }),
  }),
});

export const { useCreateUserMutation, useUpdateUserMutation } = usersApi;
