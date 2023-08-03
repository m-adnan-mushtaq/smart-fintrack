import prismaClient from "@/lib/db/client";
import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authConfig: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
    maxAge: 86400, //1day
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    //google login
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ account, user }) {
      try {
        await prismaClient.$connect();
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
        return false;
      } finally {
        await prismaClient.$disconnect();
      }
    },
    async session({ session }) {
      try {
        await prismaClient.$connect();
        const foundUser = await prismaClient.user.findUnique({
          where: { email: session.user?.email as string },
        });
        if (!foundUser) throw Error("No user found!");
        return {
          ...session,
          user: foundUser,
        };
      } catch (error) {
        throw error;
      } finally {
        await prismaClient.$disconnect();
      }
    },
  },
};
