import { UserModel } from "@/models/user.model";

export type CreateUserRequest = Pick<UserModel, "password" | "name" | "email">;

export type SignInRequest = {
  email: string;
  password: string;
};

export type SignInResponse = {
  access_token: string;
  refresh_token: string;
};
