import { UserModel } from "@/models/user.model";

import { createBaseFetch } from "../base-fetching";

export const getUserByUsername = (username: string) => {
  return createBaseFetch<UserModel>(`/users/${username}`);
};
