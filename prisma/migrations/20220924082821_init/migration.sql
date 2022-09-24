/*
  Warnings:

  - You are about to alter the column `timestamp` on the `Sim_event` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Sim_event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "history_id" TEXT NOT NULL,
    CONSTRAINT "Sim_event_history_id_fkey" FOREIGN KEY ("history_id") REFERENCES "Sim_history" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Sim_event" ("action", "history_id", "id", "timestamp", "user_id") SELECT "action", "history_id", "id", "timestamp", "user_id" FROM "Sim_event";
DROP TABLE "Sim_event";
ALTER TABLE "new_Sim_event" RENAME TO "Sim_event";
CREATE UNIQUE INDEX "Sim_event_history_id_id_key" ON "Sim_event"("history_id", "id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
