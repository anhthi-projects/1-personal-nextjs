import { UserModel } from "@/models/user.model";

export type CreateUserRequest = {
  payload: Partial<UserModel>;
};

export type UpdateUserRequest = {
  userId: string;
  payload: Partial<UserModel>;
};
