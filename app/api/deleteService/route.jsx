import { NextResponse } from "next/server"
import prisma from "@/app/libs/prismadb"


export async function DELETE(request) {
    const { id } = await request.json()

    const service = await prisma.service.delete({
        where: { id: id }
    })

    return NextResponse.json({ message: "Success" })
} 