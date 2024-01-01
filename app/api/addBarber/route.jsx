import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"


export async function POST(request) {
    const body = await request.json()
    const { name, email, location } = body

    //check if barber exists
    const barberExists = await prisma.barber.findUnique({
        where: { email: email, location: location }
    })
    if(barberExists) {
        return NextResponse.json({ message: "Barber Already Exists" }, { status: 403 })
    } 

        const barber = await prisma.barber.create({
            data: {
                 name: name,
                 email: email,
                 location: location
             } 
         })
    

    return NextResponse.json(barber, {status: 201})
}