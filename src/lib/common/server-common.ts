import { env } from "../config";

export type PrismaOperation="findFirst" | "findFirstOrThrow" | "findUnique" | "findUniqueOrThrow" | "findMany" | "create" | "createMany" | "update" | "updateMany" | "upsert" | "delete" | "deleteMany" | "aggregate" | "count" | "groupBy"

export const BUDGET_ENDPOINT = env.LOCAL_URL + "/api/budget";
export const cacheMethods: PrismaOperation[] = [
  "findUnique",
  "findUniqueOrThrow",
  "findFirst",
  "findFirstOrThrow",
  "findMany",
  "count",
];

export const invalidateMethods: PrismaOperation[] = [
  "create",
  "update",
  "upsert",
  "delete",
  "createMany",
  "updateMany",
  "deleteMany",
];
