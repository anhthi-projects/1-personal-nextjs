import { ProjectModel } from "./project.model";
import { SocialNetworkModel } from "./social-network.model";

export interface UserModel {
  id: string;
  username: string;
  password: string;
  name: string;
  email: string;
  phone: string;
  jobPosition: string;
  yearOfExp: number;
  briefIntro: string;
  aboutMe: string;
  avatarUrl: string;
  cvUrl: string;
  tags: string[];
  projects: ProjectModel[];
  socialNetworks: SocialNetworkModel[];
}
