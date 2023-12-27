/*
  Warnings:

  - You are about to drop the column `confirmId` on the `order` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_confirmId_fkey`;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `confirmId`,
    MODIFY `description` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `OrderOnConfirm` (
    `orderId` VARCHAR(191) NOT NULL,
    `confirmId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`orderId`, `confirmId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `OrderOnConfirm` ADD CONSTRAINT `OrderOnConfirm_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderOnConfirm` ADD CONSTRAINT `OrderOnConfirm_confirmId_fkey` FOREIGN KEY (`confirmId`) REFERENCES `ConfirmOrder`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
