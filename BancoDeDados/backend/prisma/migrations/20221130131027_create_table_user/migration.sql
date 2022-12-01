-- CreateTable
CREATE TABLE "users" (
    "idUser" SERIAL NOT NULL,
    "nomeUser" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "perfilUser" INTEGER NOT NULL,
    "criacao_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "alteracao_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("idUser")
);

-- CreateTable
CREATE TABLE "comandas" (
    "idComanda" SERIAL NOT NULL,
    "numeroMesa" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "pedido" TEXT,
    "idUser" INTEGER NOT NULL,
    "criacao_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "alteracao_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "comandas_pkey" PRIMARY KEY ("idComanda")
);

-- CreateTable
CREATE TABLE "cardapio" (
    "idPrato" SERIAL NOT NULL,
    "nomePrato" TEXT,
    "criacao_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "alteracao_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cardapio_pkey" PRIMARY KEY ("idPrato")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_idUser_key" ON "users"("idUser");

-- CreateIndex
CREATE UNIQUE INDEX "comandas_idComanda_key" ON "comandas"("idComanda");

-- CreateIndex
CREATE UNIQUE INDEX "cardapio_idPrato_key" ON "cardapio"("idPrato");

-- AddForeignKey
ALTER TABLE "comandas" ADD CONSTRAINT "comandas_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "users"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;
