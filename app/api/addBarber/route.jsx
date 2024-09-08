import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"


export async function POST(request) {
    const body = await request.json()
    const { name, link, location, secret } = body
    const trimmedName = name.trim()

        const barber = await prisma.barber.create({
            data: {
                 name: trimmedName,
                 link: link,
                 location: location
             } 
         })
    

    return NextResponse.json(barber, {status: 201})
}