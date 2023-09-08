-- AlterEnum
ALTER TYPE "LogType" ADD VALUE 'PROFILE_UPDATED';

-- DropIndex
DROP INDEX "ActivityLog_createdAt_idx";

-- DropIndex
DROP INDEX "ActivityLog_recipientId_key";

-- DropIndex
DROP INDEX "User_name_idx";

-- AlterTable
ALTER TABLE "ActivityLog" ADD COLUMN     "isRead" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE INDEX "ActivityLog_recipientId_isRead_createdAt_idx" ON "ActivityLog"("recipientId", "isRead", "createdAt" DESC);
