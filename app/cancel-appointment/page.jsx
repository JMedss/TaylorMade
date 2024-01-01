'use client'
import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"


const Cancel = () => {
    const [isDisabled, setIsDisabled] = useState(true)
    const [data, setData] = useState({
        email: "",
        date: "",
        time: "",
        location: "Johnson City"
    })

    const validateInputs = (email, date, time) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        const timeRegex = /^(1[0-2]|0?[1-9]):[0-5][0-9] (AM|PM)$/;
    
        const isEmailValid = emailRegex.test(email);
        const isDateValid = dateRegex.test(date);
        const isTimeValid = timeRegex.test(time);
    
        setIsDisabled(!(isEmailValid && isDateValid && isTimeValid));
    }

    const handleEmailChange = (e) => {
        // Allow only characters valid in email addresses
        const emailChars = e.target.value.replace(/[^a-zA-Z0-9@._-]/g, '');
        setData({ ...data, email: emailChars });
        validateInputs(emailChars, data.date, data.time)
    }

    const handleDateChange = (e) => {
        let value = e.target.value;
        // Allow only digits and dashes
        value = value.replace(/[^0-9\-]/g, '');
      
        // Enforce the format: YYYY-MM-DD
        if (value.length > 4 && value[4] !== '-') {
          value = value.slice(0, 4) + '-' + value.slice(4);
        }
        if (value.length > 7 && value[7] !== '-') {
          value = value.slice(0, 7) + '-' + value.slice(7);
        }
      
        // Trim the value to the maximum length of the format
        value = value.slice(0, 10);
      
        setData({ ...data, date: value });
        validateInputs(data.email, value, data.time)
      }

      const handleTimeChange = (e) => {
        let value = e.target.value;
      
        // Allow only numbers, colons, spaces, and 'AM' or 'PM'
        value = value.replace(/[^0-9: AMPMampm]/g, '');
      
        // Convert to uppercase for AM/PM
        value = value.toUpperCase();
      
        // Handle the format and limit length
        const timeParts = value.split(':');
        if (timeParts.length > 2) {
          // Prevent more than one colon
          value = timeParts[0] + ':' + timeParts[1];
        }
      
        if (timeParts.length === 2) {
          // Handle AM/PM part
          let amPmPart = timeParts[1].split(' ')[1];
          if (amPmPart) {
            amPmPart = amPmPart.replace(/[^AMPM]/g, '');
            timeParts[1] = timeParts[1].split(' ')[0] + ' ' + amPmPart;
          }
      
          // Limit minutes to two digits
          timeParts[1] = timeParts[1].slice(0, 5);
          value = timeParts.join(':');
        }
      
        // Limit hours to two digits and remove leading zero
        if (timeParts[0].length > 2 || (timeParts[0].startsWith('0') && timeParts[0].length > 1)) {
          timeParts[0] = timeParts[0].replace(/^0/, '').slice(0, 2);
          value = timeParts.join(':');
        }
      
        setData({ ...data, time: value });
        validateInputs(data.email, data.date, value)
      }


      const handleSubmit = (e) => {
        e.preventDefault();
        axios.delete("/api/cancelAppointment", { data: data })
             .then(response => {
                 toast.success("Appointment canceled")
             })
             .catch(error => {
                 toast.error("Please try again")
             });
    }



    console.log(data)
  return (
    <main className='w-screen min-h-screen flex justify-center items-center mt-[120px]'>
            <div className='flex flex-col items-center'>
                <h1>Please fill out the form</h1>

                <form className="space-y-6 w-full" action="submit" onSubmit={handleSubmit}>
                <div className="w-full">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-redprimary">
                        Email
                    </label>
                    <div className="mt-2 w-full">
                        <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="example@example.com"
                        value={data.email}
                        onChange={handleEmailChange}
                        autoComplete
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-redprimary outline-redprimary sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="w-full">
                    <label htmlFor="date" className="block text-sm font-medium leading-6 text-redprimary">
                        Date
                    </label>
                    <div className="mt-2 w-full">
                        <input
                        id="date"
                        name="date"
                        placeholder="yyyy-mm-dd"
                        value={data.date}
                        onChange={handleDateChange}
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-redprimary outline-redprimary sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="w-full">
                    <label htmlFor="time" className="block text-sm font-medium leading-6 text-redprimary">
                        Time
                    </label>
                    <div className="mt-2 w-full">
                        <input
                        id="time"
                        name="time"
                        placeholder="1:00 PM"
                        value={data.time}
                        onChange={handleTimeChange}
                        maxLength={10}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-redprimary outline-redprimary sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <label htmlFor="location" className="block text-sm font-medium leading-6 text-redprimary">
                                        Location
                                </label>
                                <select 
                                onChange={e => setData({...data, location: e.target.value})}
                                id='location' 
                                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-redprimary outline-redprimary sm:text-sm sm:leading-6'>
                                    <option value="Johnson City">Johnson City</option>
                                    <option value="Greeneville">Greeneville</option>
                                </select>

                <div>
                <button
                    disabled={isDisabled}
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-redprimary px-3 py-1.5 text-sm font-bold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-redprimary outline-black disabled:opacity-60"
                >
                    CANCEL APPOINTMENT
                </button>
                </div>
            </form>
            </div>
    </main>
  )
}

export default Cancel
