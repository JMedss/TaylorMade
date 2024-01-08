import { NextResponse } from "next/server"
import prisma from "@/app/libs/prismadb"


export async function PUT(request) {
    const body = await request.json()
    const { name, link, location, benefitOne, benefitTwo, benefitThree, benefitFour, instagram, facebook, tiktok, youtube, id } = body

    const barber = await prisma.barber.update({
        where: { id: id },
        data: {
            name,
            location,
            link,
            benefitOne,
            benefitTwo,
            benefitThree,
            benefitFour,
            instagram,
            youtube,
            tiktok,
            facebook
        }
    })


    return NextResponse.json(barber)
}