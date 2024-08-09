import { UserModel } from "@/models/user.model";

import { createNativeFetchBase } from "../fetch-base";

export const getUserByUsername = (username: string) => {
  return createNativeFetchBase<UserModel>(`users/${username}`);
};
