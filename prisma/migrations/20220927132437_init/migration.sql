-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "addition" TEXT,
    "role" TEXT NOT NULL DEFAULT 'TRAINEE',
    "session_id" TEXT,
    "event_id" TEXT,
    CONSTRAINT "User_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "Session" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "User_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "Event" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_User" ("addition", "event_id", "firstname", "id", "lastname", "role", "session_id") SELECT "addition", "event_id", "firstname", "id", "lastname", "role", "session_id" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
CREATE UNIQUE INDEX "User_session_id_key" ON "User"("session_id");
CREATE UNIQUE INDEX "User_event_id_key" ON "User"("event_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
