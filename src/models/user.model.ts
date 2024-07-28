import { ProjectModel } from "./project.model";
import { SocialNetwork } from "./social-network.model";

export interface UserModel {
  id: string;
  username: string;
  password: string;
  name: string;
  email: string;
  phone: string;
  jobPosition: string;
  yearOfExp: string;
  aboutMe: string;
  avatarUrl: string;
  cvUrl: string;
  tags: string[];
  projects: ProjectModel[];
  socialNetworks: SocialNetwork[];
}
