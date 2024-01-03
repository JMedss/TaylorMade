"use client"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Popup from "@/app/components/cms/Popup"
import EditPopup from "@/app/components/cms/EditPopup"

export default function AddBarbers() {
  const session = useSession()
  const router = useRouter()
  const [active, setActive] = useState(false)
  const [edit, setEdit] = useState(false)
  const [barbers, setBarbers] = useState([])
  const [barber, setBarber] = useState()


  useEffect(() => {
    if (session?.status === "unauthenticated") {
      router.push("/")
    }
  })

  async function getBarbers() {
    const res = await fetch('http://localhost:3000/api/getBarbers', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }, 
      cache: 'no-store'
    })

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    const data = await res.json()
    setBarbers(data)
  }

  useEffect(() => {
    getBarbers()
  }, [])

  const handleAddBarber = (e) => {
    e.preventDefault()
    setActive(!active)
  }
  const handleEdit = (e) => {
    e.preventDefault()
    setEdit(!edit)
    const btnTxt = e.currentTarget.textContent
    const unformattedBtnTxt = btnTxt.split(" ")
    const jcExists = btnTxt.indexOf("Johnson City")
    let location = jcExists !== -1 ? "Johnson City" : "Greeneville"
    const unformmatedBarberName = location === "Johnson City" ? unformattedBtnTxt.slice(0, -2) : unformattedBtnTxt.slice(0, -1)
    const barberName = unformmatedBarberName.join(" ")
    barbers.map((barb) => {
      if(barberName === barb.name && location === barb.location) {
        setBarber(barb)
      }
    })
  }

  return (
    <main className="mt-[120px] w-screen h-full min-w-screen relative">
      <div className="container flex flex-col items-center">
        <h1 className="mt-[60px]">Barbers</h1>
        {barbers && barbers.map((barber) => (
          <button onClick={handleEdit} key={barber.id} className="flex items-center justify-around w-[60%] min-w-[350px] bg-slate-300 my-2">
            <div className="py-2 text-redprimary font-bold text-[16px] md:text-[18px] lg:text-[20px] flex px-1">{barber.name}</div>
            <div className="py-2 text-redprimary font-bold text-[16px] md:text-[18px] lg:text-[20px] flex px-1"> {barber.location}</div>
            <div className="py-2 text-redprimary font-bold text-[16px] md:text-[18px] lg:text-[20px] flex px-1"></div>
          </button>
        ))}
          <button
          onClick={handleAddBarber}
          className="bg-redprimary w-[300px] py-2 text-white mt-[24px]">
            ADD BARBER
          </button>
          <Popup state={active} closePopUp={handleAddBarber}/>
          <EditPopup state={edit} setEdit={setEdit} barber={barber} />
      </div>
    </main>
  )
}
