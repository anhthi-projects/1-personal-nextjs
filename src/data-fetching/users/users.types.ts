import { UserModel } from "@/models/user.model";

export type CreateUserDto = Pick<
  UserModel,
  "username" | "password" | "name" | "email"
>;
