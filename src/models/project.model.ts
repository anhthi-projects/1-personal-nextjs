import { UserModel } from "./user.model";

export interface ProjectModel {
  id: string;
  name: string;
  description: string;
  techStacks: string[];
  userId: string;
  user: UserModel;
}
