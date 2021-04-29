-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMELE', 'UNSPECIFIED');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "dateOfBirth" TIMESTAMP(3),
ADD COLUMN     "gender" "Gender" NOT NULL DEFAULT E'UNSPECIFIED';
