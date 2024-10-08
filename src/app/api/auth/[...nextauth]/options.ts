import { toastIns } from "@usy-ui/themes";
import axios, { HttpStatusCode } from "axios";
import type { AuthOptions } from "next-auth";
import CredentialsContainer from "next-auth/providers/credentials";

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

        const payload = JSON.stringify({
          email: credentials?.email,
          password: credentials?.password,
        });

        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        try {
          const userRes = await axios.post(
            `${process.env.SERVICE_URL}/auth/signin`,
            payload,
            config
          );
          return userRes.status === HttpStatusCode.Ok ? userRes.data : null;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, trigger, session }) => {
      return trigger === "update"
        ? {
            ...token,
            ...session,
          }
        : { ...token, ...user };
    },
    session: async ({ session, token }) => {
      session.user = token as any;
      return session;
    },
  },
  session: {
    maxAge: 24 * 60 * 60, // 24 hours
  },
  pages: {
    signIn: "/",
    signOut: "/dashboard",
  },
};
