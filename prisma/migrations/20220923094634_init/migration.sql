/*
  Warnings:

  - The primary key for the `Sim_event` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `event_id` on the `Sim_event` table. All the data in the column will be lost.
  - Added the required column `action` to the `Sim_event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `history_id` to the `Sim_event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Sim_event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timestamp` to the `Sim_event` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Sim_history" (
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL PRIMARY KEY
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Sim_event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "timestamp" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "history_id" TEXT NOT NULL,
    CONSTRAINT "Sim_event_history_id_fkey" FOREIGN KEY ("history_id") REFERENCES "Sim_history" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Sim_event" ("user_id") SELECT "user_id" FROM "Sim_event";
DROP TABLE "Sim_event";
ALTER TABLE "new_Sim_event" RENAME TO "Sim_event";
CREATE UNIQUE INDEX "Sim_event_history_id_id_key" ON "Sim_event"("history_id", "id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Sim_history_id_key" ON "Sim_history"("id");
