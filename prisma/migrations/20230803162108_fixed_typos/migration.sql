/*
  Warnings:

  - You are about to drop the column `googelId` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "googelId",
ADD COLUMN     "googleId" TEXT;
