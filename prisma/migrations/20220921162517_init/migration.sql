/*
  Warnings:

  - You are about to drop the `Sim_history_record` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `action` on the `Sim_event` table. All the data in the column will be lost.
  - You are about to drop the column `record_id` on the `Sim_event` table. All the data in the column will be lost.
  - You are about to drop the column `sim_timestamp` on the `Sim_event` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Sim_history_record_sim_id_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Sim_history_record";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Sim_event" (
    "event_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" TEXT NOT NULL
);
INSERT INTO "new_Sim_event" ("event_id", "user_id") SELECT "event_id", "user_id" FROM "Sim_event";
DROP TABLE "Sim_event";
ALTER TABLE "new_Sim_event" RENAME TO "Sim_event";
CREATE UNIQUE INDEX "Sim_event_event_id_key" ON "Sim_event"("event_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
