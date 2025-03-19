/*
  Warnings:

  - You are about to drop the column `createdAt` on the `tecnologias` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `tecnologias` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "tecnologias" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";
