/*
  Warnings:

  - You are about to drop the column `user_id` on the `notifications` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[event_id]` on the table `Notifications` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `receiver_id` to the `Notifications` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `notifications` DROP FOREIGN KEY `Notifications_user_id_fkey`;

-- DropIndex
DROP INDEX `Notifications_user_id_fkey` ON `notifications`;

-- AlterTable
ALTER TABLE `notifications` DROP COLUMN `user_id`,
    ADD COLUMN `event_id` VARCHAR(191) NULL,
    ADD COLUMN `receiver_id` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Notifications_event_id_key` ON `Notifications`(`event_id`);

-- CreateIndex
CREATE INDEX `Notifications_receiver_id_is_read_created_at_idx` ON `Notifications`(`receiver_id`, `is_read`, `created_at`);

-- AddForeignKey
ALTER TABLE `Notifications` ADD CONSTRAINT `Notifications_receiver_id_fkey` FOREIGN KEY (`receiver_id`) REFERENCES `Users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
