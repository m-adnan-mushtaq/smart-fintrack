-- AlterTable
ALTER TABLE "User" ADD COLUMN     "googelId" TEXT,
ALTER COLUMN "picUrl" SET DEFAULT '/assets/avatar.svg',
ALTER COLUMN "currency" SET DEFAULT 'USD';
