import { UserModel } from "@/models/user.model";

export type CreateUserRequest = Pick<
  UserModel,
  "username" | "password" | "name" | "email"
>;

export type SignInRequest = {
  username: string;
  password: string;
};

export type SignInResponse = {
  access_token: string;
  refresh_token: string;
};
