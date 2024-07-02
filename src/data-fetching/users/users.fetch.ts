import { UserModel } from "@/models/user.model";

import { createPureFetchBase } from "../base";

export const getUserByUsername = (username: string) => {
  return createPureFetchBase<UserModel>(`/users/${username}`);
};
