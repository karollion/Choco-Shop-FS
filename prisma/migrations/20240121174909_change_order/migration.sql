/*
  Warnings:

  - You are about to drop the column `size` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `order` ADD COLUMN `size` ENUM('S', 'M', 'L', 'XL', 'XXL') NOT NULL DEFAULT 'S';

-- AlterTable
ALTER TABLE `product` DROP COLUMN `size`;
