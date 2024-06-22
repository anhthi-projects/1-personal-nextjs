import { UserModel } from "./user.model";

export interface SocialNetwork {
  id: string;
  name: string;
  url: string;
  userId: string;
  owner: UserModel;
}
