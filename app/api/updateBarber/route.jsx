import { NextResponse } from "next/server"
import prisma from "@/app/libs/prismadb"


export async function PUT(request) {
    const body = await request.json()
    const { name, link, location, benefitOne, benefitTwo, benefitThree, benefitFour, instagram, facebook, tiktok, youtube, id } = body
    const trimmedName = name.trim()
    const barber = await prisma.barber.update({
        where: { id: id },
        data: {
            name: trimmedName,
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