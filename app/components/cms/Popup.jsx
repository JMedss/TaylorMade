"use client"
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

const Popup = (props) => {
    const [data, setData] = useState({
        name: "",
        link: "",
        location: "Johnson City"
    })
    const active = props.state
    const closePopUp = props.closePopUp

    

    
    const addBarber = async (e) => {
        e.preventDefault()
        const response = await axios.post("/api/addBarber", data)
        .then(() => toast.success("Barber successfully created"))
        .catch(() => toast.error("An error occured"))
    }

    

    const handleNameChange = (e) => {
        // Allow only letter characters
        const onlyLetters = e.target.value.replace(/[^a-zA-Z\s]/g, '')
        setData({ ...data, name: onlyLetters });
    }

    const handleLinkChange = (e) => {
        setData({ ...data, link: e.target.value });
    }

    console.log(data)
  return (
    <div className={`fixed top-0 left-0 z-40 bg-black/60 w-screen h-screen flex-col items-center justify-center ${active ? "flex" : "hidden"}`}>
        <div className='w-[60%] min-w-[300px] h-[500px] bg-slate-200 shadow-xl flex flex-col items-center mt-40 p-4'>
            <div className='flex justify-end w-full'>
                <button className='text-black' onClick={closePopUp}>
                    X
                </button>
            </div>
            
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 w-full">
                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" onSubmit={addBarber}>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-redprimary">
                                       Full Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                        id="name"
                                        name="name"
                                        type="name"
                                        autoComplete="name"
                                        value={data.name}
                                        onChange={handleNameChange}
                                        placeholder="John Smith"
                                        required
                                        className="outline-redprimary block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:redprimary sm:text-sm sm:leading-6 bg-white"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="link" className="block text-sm font-medium leading-6 text-redprimary">
                                        Link
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                        id="link"
                                        name="link"
                                        type="text"
                                        value={data.link}
                                        onChange={handleLinkChange}
                                        required
                                        className="outline-redprimary block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-redprimary sm:text-sm sm:leading-6 bg-white"
                                        />
                                    </div>
                                </div>
                                <label htmlFor="location" className="block text-sm font-medium leading-6 text-redprimary">
                                        Location
                                </label>
                                <select 
                                onChange={e => setData({...data, location: e.target.value})}
                                id='location' 
                                className='outline-redprimary block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-redprimary sm:text-sm sm:leading-6 bg-white'>
                                    <option value="Johnson City">Johnson City</option>
                                    <option value="Greeneville">Greeneville</option>
                                </select>

                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-redprimary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-redprimary outline-black"
                                    >
                                        ADD BARBER
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
        </div>
    </div>
  )
}

export default Popup
