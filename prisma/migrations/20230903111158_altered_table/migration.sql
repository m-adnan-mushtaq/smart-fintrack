/*
  Warnings:

  - Added the required column `entityId` to the `ActivityLog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ActivityLog" ADD COLUMN     "entityId" TEXT NOT NULL;
