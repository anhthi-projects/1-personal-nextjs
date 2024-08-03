import axios, { HttpStatusCode } from "axios";
import type { AuthOptions } from "next-auth";
import CredentialsContainer from "next-auth/providers/credentials";

import { UserModel } from "@/models/user.model";
import { Tokens } from "@/types/token";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsContainer({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "text",
        },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const userRes = await axios.post(
            "http://localhost:4000/api/auth/signin",
            JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          return userRes.status === HttpStatusCode.Ok ? userRes.data : null;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      return { ...token, ...user };
    },
    session: async ({ session, token }) => {
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: "/",
    signOut: "/dashboard",
  },
};
