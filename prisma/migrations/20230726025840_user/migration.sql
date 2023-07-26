-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "picUrl" TEXT NOT NULL DEFAULT '/media/avatar.svg',
    "currency" TEXT NOT NULL DEFAULT 'usd',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
