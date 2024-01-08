import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"


export async function DELETE(request) {
    const body = await request.json()
    const { id } = body

    const barber = await prisma.barber.delete({
        where: {
            id: id
        }
    })

    return NextResponse.json({ message: "Successfully Deleted" })
}
  