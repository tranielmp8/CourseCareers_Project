-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('ADMIN');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "email2fa" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "roles" "Roles"[];

-- CreateTable
CREATE TABLE "Password" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "hash" TEXT NOT NULL,

    CONSTRAINT "Password_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Password_userId_key" ON "Password"("userId");

-- AddForeignKey
ALTER TABLE "Password" ADD CONSTRAINT "Password_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
