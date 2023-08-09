import prismaClient from "@/lib/db/client";
import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { env } from "./env.config";

export const authConfig: AuthOptions = {
  secret: env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 86400, //1day
  },
  pages: {
    signIn: "/auth",
    error: "/auth/error",
  },
  providers: [
    //credentials login
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        try {
          const userFound = await prismaClient.user.findUnique({
            where: { email: credentials?.email },
          });
          if (!userFound || !userFound.password)
            throw Error("Invalid Credentials!");
          const isMatchedPassword = await prismaClient.user.comparePassword(
            credentials?.password as string,
            userFound.password
          );
          if (!isMatchedPassword) throw Error("Invalid Credentials");
          return userFound;
        } catch (error) {
          throw error;
        }finally{
          await prismaClient.$disconnect()
        }
      },
    }),
    //google login
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ account, user }) {
      try {
        if (account?.provider === "google") {
          //create user in database if not exists
          const userExists = await prismaClient.user.count({
            where: { email: user.email as string },
          });
          if (userExists) return true;
          //else create new user to database
          await prismaClient.user.create({
            data: {
              picUrl: user.image as string,
              name: user.name!,
              email: user.email!,
              verified: true,
              googleId: user.id,
            },
          });
          return true;
        }

        return true;
      } catch (error) {
        console.log(error);
        throw error;
      } finally {
        await prismaClient.$disconnect();
      }
    },
    async session({ session }) {
      try {
        const foundUser = await prismaClient.user.findUnique({
          where: { email: session.user?.email as string },
        });
        if (!foundUser) throw Error("No user found!");
        const { password, ...rest } = foundUser;
        return {
          ...session,
          user: rest,
        };
      } catch (error) {
        throw error;
      } finally {
        await prismaClient.$disconnect();
      }
    },
  },
};
