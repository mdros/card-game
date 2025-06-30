-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "attack" INTEGER NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Starship" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "crew" INTEGER NOT NULL,
    "model" TEXT NOT NULL,

    CONSTRAINT "Starship_pkey" PRIMARY KEY ("id")
);
