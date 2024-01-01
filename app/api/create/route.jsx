import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"
import dayjs from "dayjs"
import customParseFormat from 'dayjs/plugin/customParseFormat'



export async function POST(request) {
    const body = await request.json()
    const { customerName, customerEmail, customerPhone, date, time, duration, barberId, location, service } = body

    dayjs.extend(customParseFormat)


    const numericDuration = parseInt(duration, 10);
    console.log(time)
    const slots = Math.ceil(numericDuration / 30)
    const startTimeInMinutes = dayjs(time, 'h:mm A').hour() * 60 + dayjs(time, "h:mm A").minute()
    const times = []
    const slotDuration = 30
    
    for (let i = 0; i < slots; i++) {
        const slotStartTimeInMinutes = startTimeInMinutes + (i * slotDuration);
        const slotTime = dayjs().startOf('day').add(slotStartTimeInMinutes, 'minute').format('h:mm A');
        times.push(slotTime);
    }

    if (numericDuration <= 30) {


        const appointment = await prisma.appointment.create({
            data : {
                customerName,
                customerEmail,
                customerPhone,
                location,
                duration,
                date,
                time,
                service,
                barberId
            }
        })
        return NextResponse.json({ message: "One slot booked successfully", appointment })
    }  else if (numericDuration > 30 && numericDuration <= 60) {


        const appointment = await prisma.appointment.create({
            data : {
                customerName,
                customerEmail,
                customerPhone,
                location,
                duration,
                date,
                time: times[0].toString(),
                service,
                barberId
            }
        })

        const appointmentTwo = await prisma.appointment.create({
            data : {
                customerName,
                customerEmail,
                customerPhone,
                location,
                duration,
                date,
                time: times[1].toString(),
                service,
                barberId
            }
        })
        return NextResponse.json({ message: "Two Slots booked successfully", appointment, appointmentTwo })

    } else if (numericDuration > 60 && numericDuration <= 90) {


        const appointment = await prisma.appointment.create({
            data : {
                customerName,
                customerEmail,
                customerPhone,
                location,
                duration,
                date,
                time: times[0].toString(),
                service,
                barberId
            }
        })

        const appointmentTwo = await prisma.appointment.create({
            data : {
                customerName,
                customerEmail,
                customerPhone,
                location,
                duration,
                date,
                time: times[1].toString(),
                service,
                barberId
            }
        })

        const appointmentThree = await prisma.appointment.create({
            data : {
                customerName,
                customerEmail,
                customerPhone,
                location,
                duration,
                date,
                time: times[2].toString(),
                service,
                barberId
            }
        })
        return NextResponse.json({ message: "Two Slots booked successfully", appointment, appointmentTwo, appointmentThree })

    } else if (numericDuration > 90 && numericDuration <= 120) {


        const appointment = await prisma.appointment.create({
            data : {
                customerName,
                customerEmail,
                customerPhone,
                location,
                duration,
                date,
                time: times[0].toString(),
                service,
                barberId
            }
        })

        const appointmentTwo = await prisma.appointment.create({
            data : {
                customerName,
                customerEmail,
                customerPhone,
                location,
                duration,
                date,
                time: times[1].toString(),
                service,
                barberId
            }
        })

        const appointmentThree = await prisma.appointment.create({
            data : {
                customerName,
                customerEmail,
                customerPhone,
                location,
                duration,
                date,
                time: times[2].toString(),
                service,
                barberId
            }
        })

        const appointmentFour = await prisma.appointment.create({
            data : {
                customerName,
                customerEmail,
                customerPhone,
                location,
                duration,
                date,
                time: times[3].toString(),
                service,
                barberId
            }
        })
        return NextResponse.json({ message: "Two Slots booked successfully", appointment, appointmentTwo, appointmentThree, appointmentFour })
    }
}