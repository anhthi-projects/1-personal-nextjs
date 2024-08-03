import NextAuth from "next-auth";

import { UserModel } from "@/models/user.model";

import { Tokens } from "./token";

declare module "next-auth" {
  interface Session {
    user: UserModel & Tokens;
  }
}
