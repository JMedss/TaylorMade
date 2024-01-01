"use client"
import { useState, useEffect } from "react"
import axios from "axios"
import toast from "react-hot-toast"
import { FaPlus } from "react-icons/fa"
import DeleteServicePopUp from "@/app/components/cms/DeleteServicePopUp"
import { useRouter } from "next/navigation"


const ViewAllServices = ({ params }) => {
    const router = useRouter()
    const barberId = params.barberId
    const [servicesData, setServicesData] = useState({
        name: "",
        price: "",
        duration: "",
        barberId: barberId,
    })
    const [isDisabled, setIsDisabled] = useState(true)
    const [active, setActive] = useState(false)
    const [services, setServices] = useState()
    const [editedServices, setEditedServices] = useState({})
    const [btnDisabled, setBtnDisabled] = useState(true)

    useEffect(() => {
        const getServices = async () => {
            const response = await axios.get("/api/getServices")
            const allServices = response.data
            const filteredServices = allServices.filter(service => service.barberId === barberId)
            setServices(filteredServices)
            setEditedServices(filteredServices)
        }
        getServices()
            
    },[barberId])

    const [deleteService, setDeleteService] = useState(false)

    const handleInputChange = (serviceId, field, value) => {
        let newValue = value;
    
        if (field === 'name') {
            // Allow only uppercase, lowercase letters, and parentheses
            newValue = value.replace(/[^a-zA-Z()\s]/g, '');
        } else if (field === 'price' || field === 'duration') {
            // Allow only numbers
            newValue = value.replace(/[^0-9]/g, '');
        }
    
        if (field === 'duration') {
            // Ensure duration is between 1 and 120
            const parsedValue = parseInt(value, 10);
            if (!isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= 120) {
                newValue = parsedValue.toString();
            } else {
                // Value is not within the valid range, you can handle this as needed
                newValue = ''; // Clear the input or display an error message
            }
        }
    
        setEditedServices(prevState => ({
            ...prevState,
            [serviceId]: {
                ...prevState[serviceId],
                [field]: newValue,
            },
        }));
        setIsDisabled(false);
    }

    const handleServicesDataChange = (field, value) => {
        let newValue = value;
        
        if (field === 'name') {
            // Allow only uppercase, lowercase letters, parentheses, and spaces
            newValue = value.replace(/[^a-zA-Z()\s]/g, '');
        } else if (field === 'price') {
            // Allow only numbers
            newValue = value.replace(/[^0-9]/g, '');
        } else if (field === 'duration') {
            // Allow only numbers between 1 and 120
            const parsedValue = parseInt(value, 10);
            if (!isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= 120) {
                newValue = parsedValue.toString();
            } else {
                // Value is not within the valid range, you can handle this as needed
                newValue = ''; // Clear the input or display an error message
            }
        }
    
        setServicesData(prevState => ({
            ...prevState,
            [field]: newValue,
        }));
    }

    const handleUpdateService = async (e) => {
        e.preventDefault()
        const lastPart = Object.keys(editedServices).pop()
        const editedPart = editedServices[lastPart]
        const response = await axios.put("/api/updateService", { editedPart, lastPart })
        .then(() => toast.success("Service Updated"))
        .catch(() => toast.error("Something went wrong"))
        setIsDisabled(true)
    }

    const handleAddService = (e) => {
        e.preventDefault() 
        axios.post("/api/createService", servicesData)
        .then(() => toast.success("Service created"))
        .catch(() => toast.error("Error"))
        setServicesData({
            name: "",
            price: "",
            duration: "",
            barberId: barberId
        })
    }

    const activateService = (e) => {
        e.preventDefault()
        setActive(!active)
        setServicesData({
                name: "",
                price: "",
                duration: "",
                barberId: barberId
        })
    }
    const [serviceID, setServiceID] = useState()
    const handleDeleteService = (serviceId) => {
        setDeleteService(!deleteService)
        setServiceID(serviceId)
    }
    const handleGoBack = () => {
        router.push("/admin/add-barbers")
    }


  return (
    <main className='mt-[120px] w-screen relative'> 
        <div className="container flex flex-col items-center w-full">
            <h1 className="my-[60px]">Edit Services</h1>
            <form action="submit" className="w-[200px] sm:w-[300px] md:w-[325px] lg:w-[350px]" onSubmit={handleUpdateService}>
                {services && services.map((service, index) => (
                    <div key={service.id} className="w-full flex flex-col">

                        <label htmlFor="name"  className=' text-sm font-medium leading-6 text-redprimary'>Service Name</label>
                        <input
                        id="name"
                        onChange={(e) => handleInputChange(service.id, 'name', e.target.value)}
                        value={editedServices[service.id]?.name !== undefined ? editedServices[service.id]?.name : service.name}
                        className='outline-redprimary mt-1 pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-redprimary sm:text-sm sm:leading-6 dark:bg-white bg-slate-300' />

                        <div className="flex w-full">
                            <div className="flex flex-col w-full">
                                <label htmlFor="price"  className=' text-sm font-medium leading-6 text-redprimary'>Price</label>
                                <input
                                onChange={(e) => handleInputChange(service.id, 'price', e.target.value)}
                                id="price"
                                value={editedServices[service.id]?.price !== undefined ? editedServices[service.id]?.price : service.price}
                                className='outline-redprimary mt-1 pl-3 w-[50%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-redprimary sm:text-sm sm:leading-6 dark:bg-white bg-slate-300' />
                            </div>


                            <div className="flex flex-col w-full">
                                <label htmlFor="duration"  className=' text-sm font-medium leading-6 text-redprimary'>Duration</label>
                                <input
                                id="duration"
                                onChange={(e) => handleInputChange(service.id, 'duration', e.target.value)}
                                value={editedServices[service.id]?.duration !== undefined ? editedServices[service.id]?.duration : service.duration}
                                className='outline-redprimary block mt-1 pl-3 w-[50%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-redprimary sm:text-sm sm:leading-6 dark:bg-white bg-slate-300' />
                            </div>
                        </div>
                        <button 
                        type="submit"
                        disabled={isDisabled}
                        className="text-white bg-blueprimary w-full py-1 my-1 mt-5 rounded-md disabled:opacity-60">Update Service</button>          
                        <button type="button" onClick={(e) => handleDeleteService(service.id)} className="text-white bg-redprimary w-full py-1 my-1 mb-10 rounded-md disabled:opacity-60">DELETE SERVICE</button>          
                    </div>
                ))}  
            </form>

            <div className="flex justify-between w-[200px] sm:w-[300px] md:w-[325px] lg:w-[350px]">
                <p className='text-[18px] my-5 font-bold'>Add Services</p>
                <button
                onClick={activateService}
                className="text-redprimary"
                ><FaPlus size={15}/></button>
            </div>

            <form action="submit" className={`${active ? "block" : "hidden"} w-[200px] sm:w-[300px] md:w-[325px] lg:w-[350px]`} onSubmit={handleAddService}>
                <label className="text-redprimary">Service Name</label>
                <div className="flex flex-col">
                    <div>
                        <input
                        required
                        value={servicesData ? servicesData.name : ""}
                        onChange={e => handleServicesDataChange('name', e.target.value)}
                        className='outline-redprimary pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-redprimary sm:text-sm sm:leading-6 dark:bg-white bg-slate-300'
                        />
                    </div>
                <label className="text-redprimary">Service Price</label>
                    <div>
                        <input 
                        placeholder="Numbers Only"
                        value={servicesData ? servicesData.price : ""}
                        required
                        onChange={e => handleServicesDataChange('price', e.target.value)}
                        className='outline-redprimary  pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-redprimary sm:text-sm sm:leading-6 dark:bg-white bg-slate-300'
                        />
                    </div>
                <label className="text-redprimary">Service Duration - Minutes</label>
                    <div>
                        <input 
                        placeholder="1-120"
                        value={servicesData ? servicesData.duration : ""}
                        required
                        onChange={e => handleServicesDataChange('duration', e.target.value)}
                        className='outline-redprimary pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-redprimary sm:text-sm sm:leading-6 dark:bg-white bg-slate-300'
                        />
                    </div>
                    <button
                    type="submit"
                    className="bg-blueprimary w-full my-2 py-1 rounded-md disabled:opacity-60">Add Service</button>
                </div>
            </form>
            <DeleteServicePopUp state={deleteService} setDeleteService={setDeleteService} serviceId={serviceID}/>
            <button onClick={handleGoBack} className="bg-redprimary w-[200px] sm:w-[300px] md:w-[325px] lg:w-[350px]  py-1 rounded-md">Go Back</button>
        </div>
    </main>
  )
}
 
export default ViewAllServices
