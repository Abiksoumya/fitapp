/*
  Warnings:

  - A unique constraint covering the columns `[userId,loggedAt]` on the table `StepLog` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "StepLog_userId_loggedAt_key" ON "StepLog"("userId", "loggedAt");
