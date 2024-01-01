import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ConfirmEmail } from '@/app/components/ConfirmEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json() 

    const { confirmed } = body
    const { customerName, customerEmail, date, time, location } = body[0]

    const data = await resend.emails.send({
      from: `Taylor-Made ${location} <appointments@taylormadebarbershop.com>`,
      to: customerEmail,
      subject: `Appointment ${confirmed ? "Confirmed" : "Denied"}`,
      react: ConfirmEmail({ name: customerName, date: date, time: time, confirmed: confirmed }),
    });

    if(data.status === "success") {
        return NextResponse.json({ message: "Email successfully sent" })
    }

        return NextResponse.json(data);

  } catch (error) {
    return NextResponse.json({ error });
  }
}