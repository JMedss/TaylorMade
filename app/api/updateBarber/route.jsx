import { NextResponse } from "next/server"
import prisma from "@/app/libs/prismadb"


export async function PUT(request) {
    const body = await request.json()
    const { name, email, location, benefitOne, benefitTwo, benefitThree, benefitFour, instagram, facebook, tiktok, youtube, id, daysOff } = body
    console.log(daysOff)
    const barber = await prisma.barber.update({
        where: { id: id },
        data: {
            name,
            location,
            email,
            benefitOne,
            benefitTwo,
            benefitThree,
            benefitFour,
            instagram,
            youtube,
            tiktok,
            facebook,
            daysOff
        }
    })


    return NextResponse.json(barber)
}