import fetch from "node-fetch";
import { PrismaClient } from "@prisma/client";

interface Law {
  id: number;
  typeid: number;
  kategoriid: number;
  statusid: number;
  titel: string;
  titelkort: string;
  offentlighedskode: string;
  nummer: string | null;
  nummerprefix: string;
  nummernumerisk: string;
  nummerpostfix: string;
  resume: string;
  afstemningskonklusion: string;
  periodeid: number;
  afgørelsesresultatkode: string;
  baggrundsmateriale: string | null;
  opdateringsdato: string;
  statsbudgetsag: boolean;
  begrundelse: string;
  paragrafnummer: number | null;
  paragraf: string;
  afgørelsesdato: string | null;
  afgørelse: string;
  rådsmødedato: string | null;
  lovnummer: string;
  lovnummerdato: string | null;
  retsinformationsurl: string | null;
  fremsatundersagid: number | null;
  deltundersagid: number | null;
}

interface ApiResponse {
  value: Law[];
}

const prisma = new PrismaClient();

async function fetchLaws() {
  const url =
    "https://oda.ft.dk/api/Sag?$filter=(typeid eq 3 or typeid eq 5 or typeid eq 9) and periodeid eq 160";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error!!! status:${response.status}`);
    } else {
      const data = (await response.json()) as ApiResponse;
      console.log(data); //test to see it

      for (const law of data.value) {
        await prisma.lawProposal.create({
          data: {
            typeid: law.typeid,
            kategoriid: law.kategoriid,
            statusid: law.statusid,
            titel: law.titel,
            titelkort: law.titelkort,
            offentlighedskode: law.offentlighedskode,
            nummer: law.nummer,
            nummerprefix: law.nummerprefix,
            nummernumerisk: law.nummernumerisk,
            nummerpostfix: law.nummerpostfix,
            resume: law.resume,
            afstemningskonklusion: law.afstemningskonklusion,
            periodeid: law.periodeid,
            afgoerelsesresultatkode: law["afgørelsesresultatkode"], 
            baggrundsmateriale: law.baggrundsmateriale,
            opdateringsdato: new Date(law.opdateringsdato),
            statsbudgetsag: law.statsbudgetsag,
            begrundelse: law.begrundelse,
            paragrafnummer: law.paragrafnummer,
            paragraf: law.paragraf,
            afgoerelsesdato: law["afgørelsesdato"]
              ? new Date(law["afgørelsesdato"])
              : null, 
            afgoerelse: law["afgørelse"], 
            raadsmoededato: law["rådsmødedato"]
              ? new Date(law["rådsmødedato"])
              : null, 
            lovnummer: law.lovnummer,
            lovnummerdato: law.lovnummerdato
              ? new Date(law.lovnummerdato)
              : null,
            retsinformationsurl: law.retsinformationsurl,
            fremsatundersagid: law.fremsatundersagid,
            deltundersagid: law.deltundersagid,
          },
        });
      }

      console.log("Data successfully saved to DB");

      return data;
    }
  } catch (error) {
    console.error("Error while fetching data:", error);
    return null;
  } finally {
    await prisma.$disconnect();
  }
}

//fetchLaws();
