-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "nomeUser" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "perfilUser" TEXT NOT NULL,
    "criacao" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "alteracao" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
