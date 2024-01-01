import { NextResponse } from "next/server"
import prisma from "@/app/libs/prismadb"


export async function PUT(request) {
    const { editedPart, lastPart }  = await request.json()
    const { name, price, duration } = editedPart
    console.log(lastPart)
    const service = await prisma.service.update({
        where: { id: lastPart },
        data: {
            name,
            duration,
            price
        }
    })

    return NextResponse.json(service)
}