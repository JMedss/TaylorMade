import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"


export async function DELETE(request) {
    const body = await request.json()
    const { id } = body

    const appointmentsToDelete = await prisma.appointment.findMany({
      where: {
        barberId: id, 
      },
    })

    if(appointmentsToDelete && appointmentsToDelete.length > 0) {
      await prisma.appointment.deleteMany({
          where: {
            barberId: id,
          },
        });
  }
  

    const servicesToDelete = await prisma.service.findMany({
        where: {
          barberId: id, 
        },
      })
    
    if(servicesToDelete && servicesToDelete.length > 0) {
        await prisma.service.deleteMany({
            where: {
              barberId: id,
            },
          });
    }

    const barber = await prisma.barber.delete({
        where: {
            id: id
        }
    })

    return NextResponse.json({ message: "Successfully Deleted" })
}
  