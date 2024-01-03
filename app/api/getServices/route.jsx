import { NextResponse } from "next/server"
import prisma from "@/app/libs/prismadb"


export async function GET(request) {
  

    const response = await prisma.service.findMany()
    
    return NextResponse.json(response)
}

export const dynamic = "force-dynamic"
