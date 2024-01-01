import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"



export async function POST(request) {
    const body = await request.json()
    const { barberId, duration, price, name } = body


    const service = await prisma.service.create({
        data: {
            barberId,
            name,
            price,
            duration
        }
    })

    return NextResponse.json(service)
}