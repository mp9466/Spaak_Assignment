-- CreateTable
CREATE TABLE "LawProposal" (
    "id" SERIAL NOT NULL,
    "typeid" INTEGER,
    "kategoriid" INTEGER,
    "statusid" INTEGER,
    "titel" TEXT,
    "titelkort" TEXT,
    "offentlighedskode" TEXT,
    "nummer" TEXT,
    "nummerprefix" TEXT,
    "nummernumerisk" TEXT,
    "nummerpostfix" TEXT,
    "resume" TEXT,
    "afstemningskonklusion" TEXT,
    "periodeid" INTEGER,
    "afgoerelsesresultatkode" TEXT,
    "baggrundsmateriale" TEXT,
    "opdateringsdato" TIMESTAMP(3) NOT NULL,
    "statsbudgetsag" BOOLEAN NOT NULL,
    "begrundelse" TEXT,
    "paragrafnummer" INTEGER,
    "paragraf" TEXT,
    "afgoerelsesdato" TIMESTAMP(3),
    "afgoerelse" TEXT,
    "raadsmoededato" TIMESTAMP(3),
    "lovnummer" TEXT,
    "lovnummerdato" TIMESTAMP(3),
    "retsinformationsurl" TEXT,
    "fremsatundersagid" INTEGER,
    "deltundersagid" INTEGER,

    CONSTRAINT "LawProposal_pkey" PRIMARY KEY ("id")
);
