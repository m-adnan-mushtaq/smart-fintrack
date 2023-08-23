import { Prisma } from "@prisma/client";

export interface TourObject extends Prisma.JsonObject {
  viewed: boolean;
  skipped?: boolean;
  completedAt?: string;
  skippedAt?: string;
}
