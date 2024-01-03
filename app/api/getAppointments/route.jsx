import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function GET(request) {
    const appointments = await prisma.appointment.findMany()
    return NextResponse.json(appointments)
}

export const dynamic = "force-dynamic"
