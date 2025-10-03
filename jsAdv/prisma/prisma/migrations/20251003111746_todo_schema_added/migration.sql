-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "titile" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
