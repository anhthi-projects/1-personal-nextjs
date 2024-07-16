import { UserModel } from "@/models/user.model";

export type UpdateUserRequest = { id: string; payload: Partial<UserModel> };
