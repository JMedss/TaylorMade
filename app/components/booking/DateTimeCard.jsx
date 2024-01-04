"use client"
import { DateCalendar } from "@mui/x-date-pickers"
import { useState, useEffect } from "react"
import NoTime from "./NoTime"
import { useRouter } from "next/navigation"
import dayjs from "dayjs"

const DateTimeCard = (props) => {
    const allTimes = props.times
    const appointments = props.appointments
    const barber = props.barber
    const stringDuration = props.duration
    const router = useRouter()
    const [selectedDate, setSelectedDate] = useState()
    const [active, setActive] = useState(true)
    const [availableTimes, setAvailableTimes] = useState(allTimes)

    const handleDatePicked = (newDate) => {
        setSelectedDate(newDate);
        setActive(false);
    }




    useEffect(() => {
        if(selectedDate !== undefined) {
            const date = dayjs(selectedDate).format("YYYY-MM-DD")
            const dayOfWeek = dayjs(date).format("dddd").toString()
           const daysOff = barber.daysOff !== null ? barber.daysOff : ""
           const daysOffArray = daysOff.split(", ") 

            if (daysOffArray.includes(dayOfWeek) || dayOfWeek === "Sunday") {
                setAvailableTimes([])
            } else {
                const filteredAppointments = appointments.filter((appointment) => appointment.date === date);
                const unformattedBookedTimes = [];
                filteredAppointments.forEach((appointment) => unformattedBookedTimes.push(appointment.time))
    
                const bookedTimes = unformattedBookedTimes.map((time) => dayjs(time, 'h:mm A').format("h:mm A"))
                const duration = parseInt(stringDuration, 10);
                const slotsNeeded = Math.ceil(duration / 30);
                const newTimes = allTimes.filter((time) => !bookedTimes.includes(time))
                const newAvailableTimes = updateAvailableTimes(date, bookedTimes, slotsNeeded, newTimes)
                setAvailableTimes(newAvailableTimes)
            }

        }
    }, [selectedDate, appointments, allTimes, barber.daysOff, stringDuration])

        const updateAvailableTimes = (date, bookedTimes, slotsNeeded, newTimes) => {
            let continuousAvailableTimes = []
            const timeNeeded = 30 * slotsNeeded
            const formattedTimes = newTimes.map((time) => dayjs(time, "h:mm A"))
    
            const minutesSinceStartOfDay = formattedTimes.map(time => time.hour() * 60 + time.minute())
    
            for (let i = 0; i < minutesSinceStartOfDay.length; i++) {
                let start = minutesSinceStartOfDay[i];
                let end = start + timeNeeded
                let isContinuousSlotAvailable = true
                
                for (let booked of bookedTimes) {
                    let bookedTime = dayjs(booked, 'h:mm A');
                    let bookedMinutes = bookedTime.hour() * 60 + bookedTime.minute()
                    if (bookedMinutes >= start && bookedMinutes < end) {
                        isContinuousSlotAvailable = false;
                        break;
                    }
                }
                if (isContinuousSlotAvailable) {
                    continuousAvailableTimes.push(dayjs().startOf('day').add(start, 'minutes').format('h:mm A'));
                }
        }
        return continuousAvailableTimes
    }

    const handleNext = (e) => {
        e.preventDefault()
        const currentUrl = window.location.href
        const date = dayjs(selectedDate).format("YYYY-MM-DD")
        const time = e.currentTarget.textContent
        const url = `${currentUrl}/${date} ${time}`
        router.push(url)
    } 


      return (
    <div className='bg-gradient-to-b from-[#FFFFFF] to-[#636363] shadow-lg  p-6 w-[60%] min-w-[300px]'>
            <h1 className="w-full text-center text-black">Please Select A <span className="abrilh1">Date & Time.</span></h1>
        <div className='flex flex-col items-center md:flex-row justify-center gap-32'>
            <div>
                <DateCalendar 
                disablePast
                value={selectedDate}
                onChange={handleDatePicked}
                />
            </div>
            <NoTime state={active}/>
            <div className={active ? "hidden" : "flex flex-col items-center"}>
                <h4 className="mb-6">Times</h4>
                <div className="flex flex-col items-center w-[200px] h-[200px] overflow-y-scroll">
                    {availableTimes && availableTimes.map((time) => (
                        <button onClick={handleNext} key={time.id} className="text-[20px] text-redprimary bg-white w-[140px] my-1 shadow-md hover:scale-110">
                            {time}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default DateTimeCard
