/*
  Warnings:

  - You are about to alter the column `name` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `googleId` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `currency` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(10)`.

*/
-- CreateEnum
CREATE TYPE "BudgetType" AS ENUM ('STUDENT', 'PERSONAL', 'FAMILY');

-- CreateEnum
CREATE TYPE "ExpenseCat" AS ENUM ('FIXED', 'VAIRABLE', 'BILL', 'FUN');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "productTour" JSONB,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "googleId" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "currency" SET DATA TYPE VARCHAR(10);

-- CreateTable
CREATE TABLE "Budget" (
    "id" TEXT NOT NULL,
    "type" "BudgetType" NOT NULL DEFAULT 'PERSONAL',
    "userId" TEXT NOT NULL,

    CONSTRAINT "Budget_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Income" (
    "id" TEXT NOT NULL,
    "source" VARCHAR(100) NOT NULL,
    "amount" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "budgetId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Income_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SavingGoal" (
    "id" TEXT NOT NULL,
    "target" VARCHAR(100) NOT NULL,
    "description" VARCHAR(200),
    "amount" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "budgetId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SavingGoal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Expense" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" VARCHAR(200),
    "category" "ExpenseCat" NOT NULL DEFAULT 'VAIRABLE',
    "amount" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "budgetId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Expense_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Budget_userId_key" ON "Budget"("userId");

-- CreateIndex
CREATE INDEX "Income_updatedAt_idx" ON "Income"("updatedAt" DESC);

-- CreateIndex
CREATE INDEX "Income_amount_idx" ON "Income"("amount" DESC);

-- CreateIndex
CREATE INDEX "Income_source_idx" ON "Income" USING HASH ("source");

-- CreateIndex
CREATE INDEX "SavingGoal_updatedAt_idx" ON "SavingGoal"("updatedAt" DESC);

-- CreateIndex
CREATE INDEX "SavingGoal_amount_idx" ON "SavingGoal"("amount" DESC);

-- CreateIndex
CREATE INDEX "SavingGoal_target_idx" ON "SavingGoal" USING HASH ("target");

-- CreateIndex
CREATE INDEX "Expense_updatedAt_idx" ON "Expense"("updatedAt" DESC);

-- CreateIndex
CREATE INDEX "Expense_amount_idx" ON "Expense"("amount");

-- CreateIndex
CREATE INDEX "Expense_category_idx" ON "Expense" USING HASH ("category");

-- CreateIndex
CREATE INDEX "Expense_title_idx" ON "Expense" USING HASH ("title");

-- CreateIndex
CREATE INDEX "User_name_idx" ON "User" USING HASH ("name");

-- AddForeignKey
ALTER TABLE "Budget" ADD CONSTRAINT "Budget_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Income" ADD CONSTRAINT "Income_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Income" ADD CONSTRAINT "Income_budgetId_fkey" FOREIGN KEY ("budgetId") REFERENCES "Budget"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SavingGoal" ADD CONSTRAINT "SavingGoal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SavingGoal" ADD CONSTRAINT "SavingGoal_budgetId_fkey" FOREIGN KEY ("budgetId") REFERENCES "Budget"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expense" ADD CONSTRAINT "Expense_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expense" ADD CONSTRAINT "Expense_budgetId_fkey" FOREIGN KEY ("budgetId") REFERENCES "Budget"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
