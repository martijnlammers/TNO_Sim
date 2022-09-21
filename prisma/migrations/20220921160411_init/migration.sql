-- CreateTable
CREATE TABLE "Sim_history_record" (
    "date" TEXT NOT NULL,
    "sim_id" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Sim_event" (
    "event_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sim_timestamp" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "record_id" TEXT NOT NULL,
    CONSTRAINT "Sim_event_record_id_fkey" FOREIGN KEY ("record_id") REFERENCES "Sim_history_record" ("sim_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Sim_history_record_sim_id_key" ON "Sim_history_record"("sim_id");

-- CreateIndex
CREATE UNIQUE INDEX "Sim_event_event_id_key" ON "Sim_event"("event_id");
