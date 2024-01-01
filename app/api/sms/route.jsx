import { NextResponse } from "next/server";
import Twilio from "twilio/lib/rest/Twilio";
import prisma from "@/app/libs/prismadb";   

export async function POST(request) {
    const accountSID = process.env.TWILIO_ACCOUNT_SID
    const authToken = process.env.TWILIO_AUTH_TOKEN
    const client = require("twilio")(accountSID, authToken)
    const body = await request.json() 
    const { confirmed } = body
    const { customerEmail, customerPhone, customerName, time, date } = body[0]

    if(customerPhone) {
        const result = await client.messages.create({
            body: `${customerName}, your appointment at ${time} on ${date} with Taylor-Made has been ${confirmed ? "confirmed" : "denied"}.`,
            from: '+18445870261',
            to: `+1${customerPhone}`
        })
    }

    if(!confirmed) {
        const deleteAppointment = await prisma.appointment.deleteMany({
            where: { date: date, customerName: customerName, customerEmail: customerEmail }
        })
        return NextResponse.json({ message: "Appointment successfully deleted." })
    }

    return NextResponse.json({ message: "Success" })
}