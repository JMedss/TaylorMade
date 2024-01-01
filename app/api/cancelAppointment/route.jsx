import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function DELETE(request) {
    const body = await request.json()
    const { date, time, location, email } = body
    console.log(body)

    try {
        const appointments = await prisma.appointment.deleteMany({
            where: {
                date: date,
                customerEmail: email,
                location: location
            }
        })

        return NextResponse.json({message: "Success"})
      
    } catch (error) {
        return NextResponse.json({ message: "Failed" })
    }
}