/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Game` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Score` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Score" DROP CONSTRAINT "Score_gameId_fkey";

-- DropForeignKey
ALTER TABLE "Score" DROP CONSTRAINT "Score_userId_fkey";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "password" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Game";

-- DropTable
DROP TABLE "Score";

-- CreateTable
CREATE TABLE "Facturas" (
    "id" SERIAL NOT NULL,
    "numero" TEXT NOT NULL,
    "razonSocial" TEXT NOT NULL,
    "ruc" TEXT NOT NULL,
    "tipo" CHAR(1) NOT NULL,
    "cantidadDias" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Facturas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacturaDetalles" (
    "id" SERIAL NOT NULL,
    "facturaId" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "monto" INTEGER NOT NULL,
    "exenta" INTEGER NOT NULL,
    "iva5" INTEGER NOT NULL,
    "iva10" INTEGER NOT NULL,

    CONSTRAINT "FacturaDetalles_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FacturaDetalles" ADD CONSTRAINT "FacturaDetalles_facturaId_fkey" FOREIGN KEY ("facturaId") REFERENCES "Facturas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
