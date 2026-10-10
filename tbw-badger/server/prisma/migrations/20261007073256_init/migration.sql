-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL DEFAULT 0,
    "name" VARCHAR(50) NOT NULL,
    "email" CHAR NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id","email")
);
