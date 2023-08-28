import {  PrismaClient, User } from "@prisma/client";
import userExtension from "./extensions/user.extension";
import cacheExtension from "./extensions/cache.extension";


const prismaClientSingleton = () => {
  const client = new PrismaClient()
  return client.$extends(userExtension).$extends(cacheExtension)
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prismaClient = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production")
  globalForPrisma.prisma = prismaClient;

export type DbUser = User;

export default prismaClient;
