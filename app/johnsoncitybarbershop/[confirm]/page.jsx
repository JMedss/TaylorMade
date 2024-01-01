"use client"
import axios from "axios"
import { useState, useEffect } from "react"
import toast from "react-hot-toast"

const JCConfirm = () => {
    const [data, setData] = useState({
        name: "",
        time: "",
        date: "",
        location: ""
    })
    const [appointment, setAppointment] = useState()
    const [isDisabled, setIsDisabled] = useState(true)

    useEffect(() => {
        if(typeof window !== undefined) {
            const url = window.location.href 
            const dateTimeName = url.split("/").pop()
            const location = url.indexOf("johnsoncity") !== -1 ? "Johnson City" : "Greeneville"
            const date = dateTimeName.slice(0, 10)
            const unformattedArray = dateTimeName.split("-")
            const unformattedName = unformattedArray.pop()
            const unformattedTime = unformattedArray.pop()
            const time = unformattedTime.replace(/%20/g, " ")
            const name = unformattedName.replace(/%20/g, " ")
            setData({
                name,
                time,
                date,
                location
            })
        }
    },[])

    useEffect(() => {
        if (data.name !== "" && data.date !== "" && data.time !== "" && data.location  !== "" ) {
            const getAppointments = async () => {
                const response = await axios.get("/api/getAppointments")
                const appointments = response.data
                const filteredAppointment = appointments.filter((appointment) => {
                    return data.time === appointment.time && 
                           data.date === appointment.date &&
                           data.location === appointment.location &&
                           data.name === appointment.customerName;
                })
                setAppointment(filteredAppointment)
                setIsDisabled(false)
            }
            getAppointments()
        }
    }, [data])


    const handleConfirm = (e) => {
        e.preventDefault()
        const updatedAppointment = { ...appointment, confirmed: true }
        // axios.post("/api/sms", updatedAppointment)
        axios.post("/api/confirmEmail", updatedAppointment)
        .then(() => toast.success("Appointment Confirmed"))
        .catch(() => toast.error("Something went wrong. Try again."))
        setIsDisabled(true)
    }
    const handleDeny = (e) => {
        e.preventDefault()
        const updatedAppointment = { ...appointment, confirmed: false }
        axios.post("/api/sms", updatedAppointment)
        axios.post("/api/confirmEmail", updatedAppointment)
        .then(() => toast.success("Appointment Denied"))
        .catch(() => toast.error("Something went wrong. Try again."))
        setIsDisabled(true)
    }



  return (
    <main className='mt-[120px] h-[80vh] w-screen flex justify-center items-center'>
        <div className="container">
            <div className="flex flex-col items-center ">
                <h1 className="text-center">Please Confirm or Deny The Appointment</h1>
                <ul className="flex flex-col items-center text-redprimary my-10">
                    <li><p>Customer Name: {data && data.name}</p></li>
                    <li><p>Date: {data && data.date}</p></li>
                    <li><p>Time: {data && data.time}</p></li>
                </ul>
                <div className='flex flex-col items-center gap-4'>
                    <button disabled={isDisabled} className="disabled:opacity-50 bg-blueprimary w-[200px] py-2 hover:opacity-80 text-white font-bold" onClick={handleConfirm}>Confirm</button>
                    <button disabled={isDisabled} className="disabled:opacity-50 bg-redprimary w-[200px] py-2 hover:opacity-80 text-white font-bold" onClick={handleDeny}>Deny</button>
                </div>
            </div>
        </div>
    </main>
  )
}

export default JCConfirm
