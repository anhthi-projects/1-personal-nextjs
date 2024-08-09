import { UserModel } from "./user.model";

export interface SocialNetworkModel {
  id: string;
  name: string;
  url: string;
  userId: string;
  user: UserModel;
}
