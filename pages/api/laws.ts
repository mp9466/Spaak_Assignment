import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req:NextApiRequest, res:NextApiResponse) {

    try{
        const laws = await prisma.lawProposal.findMany();
        res.status(200).json(laws);
    }catch(error){
        res.status(500).json({error: "failed to fetch law proposals"});
    }finally{
        await prisma.$disconnect();
    }
    
}