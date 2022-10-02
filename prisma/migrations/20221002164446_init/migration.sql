/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Evidence` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Evidence_scene_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "Evidence_id_key" ON "Evidence"("id");
