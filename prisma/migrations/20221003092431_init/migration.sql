/*
  Warnings:

  - You are about to drop the column `discovered` on the `Evidence` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Evidence" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "x" REAL NOT NULL,
    "y" REAL NOT NULL,
    "z" REAL NOT NULL,
    "type" TEXT NOT NULL,
    "scene_id" TEXT,
    "event_id" TEXT,
    CONSTRAINT "Evidence_scene_id_fkey" FOREIGN KEY ("scene_id") REFERENCES "Scene" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Evidence_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "Event" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Evidence" ("event_id", "id", "scene_id", "type", "x", "y", "z") SELECT "event_id", "id", "scene_id", "type", "x", "y", "z" FROM "Evidence";
DROP TABLE "Evidence";
ALTER TABLE "new_Evidence" RENAME TO "Evidence";
CREATE UNIQUE INDEX "Evidence_id_key" ON "Evidence"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
