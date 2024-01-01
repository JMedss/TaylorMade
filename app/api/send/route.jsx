import { InitCustEmail } from '@/app/components/InitCustEmail';
import { InitBarberEmail } from '@/app/components/InitBarberEmail';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json()

    const { customerName, customerEmail, customerPhone, date, time, duration, barberId, location, service, barberName, barberEmail } = body
    console.log(customerName, customerEmail, customerPhone, date, time, duration, barberId, location, service, barberName, barberEmail)

    let newLocation = location === "Johnson City" ? "johnsoncity" : "greeneville"

    console.log(newLocation)
    const data = await resend.emails.send({
      from: `Taylor-Made ${location} <appointments@taylormadebarbershop.com>`,
      to: customerEmail,
      subject: "Appointment Information",
      react: InitCustEmail({ name: customerName, barber: barberName, date: date, time: time, }),
    });

    const dataTwo = await resend.emails.send({
        from: `Taylor-Made ${location} <appointments@taylormadebarbershop.com>`,
      to: barberEmail,
      subject: "Confirm/Deny Appointment",
      react: InitBarberEmail({ name: customerName, barber: barberName, date: date, time: time, service: service, location: newLocation }),
    })
 
    if(data.status === "success") {
        return NextResponse.json({ message: "Email successfully sent" })
    }

    return NextResponse.json(data, dataTwo);
  } catch (error) {
    return NextResponse.json({ error });
  }
}