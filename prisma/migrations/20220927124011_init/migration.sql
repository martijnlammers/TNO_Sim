/*
  Warnings:

  - You are about to drop the `Sim_event` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sim_history` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Sim_event";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Sim_history";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "duration" DATETIME
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "addition" TEXT,
    "role" TEXT NOT NULL DEFAULT 'TRAINEE',
    "session_id" TEXT NOT NULL,
    "event_id" TEXT NOT NULL,
    CONSTRAINT "User_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "Session" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "User_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "Event" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Scene" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "session_id" TEXT NOT NULL,
    CONSTRAINT "Scene_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "Session" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Evidence" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "x" INTEGER NOT NULL,
    "y" INTEGER NOT NULL,
    "z" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "discovered" BOOLEAN NOT NULL,
    "scene_id" TEXT NOT NULL,
    "event_id" TEXT NOT NULL,
    CONSTRAINT "Evidence_scene_id_fkey" FOREIGN KEY ("scene_id") REFERENCES "Scene" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Evidence_scene_id_fkey" FOREIGN KEY ("scene_id") REFERENCES "Event" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "session_id" TEXT NOT NULL,
    "glasses" TEXT,
    "filter" TEXT,
    CONSTRAINT "Event_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "Session" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Session_id_key" ON "Session"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_session_id_key" ON "User"("session_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_event_id_key" ON "User"("event_id");

-- CreateIndex
CREATE UNIQUE INDEX "Scene_id_key" ON "Scene"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Scene_session_id_key" ON "Scene"("session_id");

-- CreateIndex
CREATE UNIQUE INDEX "Evidence_scene_id_key" ON "Evidence"("scene_id");

-- CreateIndex
CREATE UNIQUE INDEX "Event_id_key" ON "Event"("id");
