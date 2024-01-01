import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function GET(request) {
    const response = await prisma.barber.findMany()


    return NextResponse.json(response)
}