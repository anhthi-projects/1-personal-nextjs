import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { UserModel } from "@/models/user.model";

export const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.SERVICE_URL }),
  endpoints: (builder) => ({
    getUserById: builder.query<UserModel, string>({
      query: (id: string) => `/users/${id}`,
    }),
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

export const {
  useGetUserByIdQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
} = usersApi;
