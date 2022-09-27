-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Evidence" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "x" INTEGER NOT NULL,
    "y" INTEGER NOT NULL,
    "z" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "discovered" BOOLEAN NOT NULL,
    "scene_id" TEXT NOT NULL,
    "event_id" TEXT,
    CONSTRAINT "Evidence_scene_id_fkey" FOREIGN KEY ("scene_id") REFERENCES "Scene" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Evidence_scene_id_fkey" FOREIGN KEY ("scene_id") REFERENCES "Event" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Evidence" ("discovered", "event_id", "id", "scene_id", "type", "x", "y", "z") SELECT "discovered", "event_id", "id", "scene_id", "type", "x", "y", "z" FROM "Evidence";
DROP TABLE "Evidence";
ALTER TABLE "new_Evidence" RENAME TO "Evidence";
CREATE UNIQUE INDEX "Evidence_scene_id_key" ON "Evidence"("scene_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
