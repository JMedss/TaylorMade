"use client"
import { useState, useEffect } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import Link from "next/link"
import toast from "react-hot-toast"
const CustomerForm = (props) => {
    const router = useRouter()
    const date = props.date
    const time = props.time

    const [isDisabled, setIsDisabled] = useState(true)
    const [data, setData] = useState({
        customerName: "",
        customerEmail: "",
        customerPhone: "",
        location: "",
        duration: "",
        date: date,
        time: time,
        service: "",
        barberId: "",
        barberName: "",
        barberEmail: ""
    })

    useEffect(() => {
        if (typeof window !== 'undefined') { // Corrected the check here
            let currentUrl = window.location.href;
            let location = currentUrl.includes("johnsoncity") ? "Johnson City" : "Greeneville";
    
            const splitCurrentUrl = currentUrl.split("/");
            splitCurrentUrl.pop(); // firstPop is not used, so just pop without assigning
            const durationBarberName = splitCurrentUrl.pop();

            const durationBarberArray = durationBarberName.split("-");
            
            const duration = durationBarberArray[0];
            const unformattedBarberName = durationBarberArray[1];
            const barberName = unformattedBarberName.replace(/%20/g, " ")

            const unformattedService = durationBarberArray[2];
            const service = unformattedService.replace(/%20/g, " ");
            let barber = {}
            const getBarbers = async () => {
                try {
                  const response = await axios.get("/api/getBarbers");
                  const barbers = response.data;

                  const foundBarber = barbers.find((barber) => barberName === barber.name &&  barber.location === location);
                  console.log(foundBarber)
                  if (foundBarber) {
                    setData((prevData) => ({
                      ...prevData,
                      location: location,
                      duration: duration,
                      barberId: foundBarber.id,
                      service: service,
                      barberName: foundBarber.name,
                      barberEmail: foundBarber.email
                    }));
                  }
                } catch (error) {
                  console.error("Error fetching data:", error);
                }
              };
          
              getBarbers()
        }
    }, [])



    

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("/api/create", data)
        axios.post("/api/send", data)
        .then(() => {
            toast.success("Appointment Created.")
            const currentUrl = window.location.href
            const url = `${currentUrl}/confirmation`
            router.push(url)
        })
        .catch(() => toast.error("Appointment Failed To Create"))
        setData({})
        
    }

    const handleName = (e) => {
        const value = e.target.value.replace(/[^a-zA-Z ]/g, '')
        setData({...data, customerName: value})
    }
    const handlePhone = (e) => {
        const value = e.target.value.replace(/[^0-9]/g, '')
        setData({...data, customerPhone: value})
    }

    const handleEmailChange = (e) => {
        // Allow only characters valid in email addresses
        const emailChars = e.target.value.replace(/[^a-zA-Z0-9@._-]/g, '');
        setData({ ...data, customerEmail: emailChars });
    }

    const handlePrivacy = (e) => {
        setIsDisabled(!isDisabled)
    }

    console.log(data)
  return (
    <div className='bg-gradient-to-b from-[#FFFFFF] to-[#636363] dark:from-[#2B2828] dark:to-[#181717] p-8'>
      <div className='flex flex-col items-center w-[250px] md:w-[400px]'>
        <h1 className='text-center'>Please Fill Out The <span className='abrilh1'>Form</span></h1>
            <form className="space-y-6 w-full" action="submit" onSubmit={handleSubmit}>
                <div className="w-full">
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-redprimary">
                        Full Name
                    </label>
                    <div className="mt-2 w-full">
                        <input
                        value={data.customerName}
                        onChange={handleName}
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-redprimary outline-redprimary sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="w-full">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-redprimary">
                        Email
                    </label>
                    <div className="mt-2 w-full">
                        <input
                        value={data.customerEmail}
                        onChange={handleEmailChange}
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-redprimary outline-redprimary sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="w-full">
                    <label htmlFor="tel" className="block text-sm font-medium leading-6 text-redprimary">
                        Phone Number
                    </label>
                    <div className="mt-2 w-full">
                        <input
                        value={data.customerPhone}
                        onChange={handlePhone}
                        id="tel"
                        name="tel"
                        type="tel"
                        maxLength={10}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-redprimary outline-redprimary sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="privacy">
                        <input 
                        id="privacy"
                        onChange={handlePrivacy}
                        className="mr-4 opacity-50"
                        type="checkbox"
                        />
                        By checking this box, you acknowledge that you have read and agree to our <Link href="/privacy" className="text-redprimary">Privacy Policy.</Link> Your privacy is important to us, and we are committed to protecting your personal information.
                    </label>
                </div>
                <div>
                <button
                    disabled={isDisabled}
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-redprimary px-3 py-1.5 text-sm font-bold leading-6 text-white shadow-sm hover:bg-redprimary/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-redprimary outline-black disabled:opacity-60"
                >
                    BOOK APPOINTMENT
                </button>
                </div>
            </form>
      </div>
    </div>
  )
}

export default CustomerForm
