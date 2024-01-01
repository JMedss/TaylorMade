"use client"
import axios from "axios"
import toast from "react-hot-toast"


const DeleteServicePopUp = (props) => {
    let state = props.state
    let setDeleteService = props.setDeleteService
    const serviceId = props.serviceId

    const closePopUp = () => {
        setDeleteService(!state)
    }

    const deleteService = async (e) => {
        await axios.delete("/api/deleteService", {
            data: { id: serviceId },
          })
          .then(() => toast.success("Service deleted"))
          .catch(() => toast.error("An error occured"))
          .finally(closePopUp)
    }
  return (
    <div className={`${state ? "flex" : "hidden"} bg-black/60 h-screen justify-center items-center flex-col fixed z-50 w-screen`}>
      <div className='flex bg-slate-200 flex-col p-4 min-w-[200px] '>
        <div className='w-full flex justify-end'>
            <button onClick={closePopUp} className='w-[10%] text-redprimary hover:scale-110 text-[18px]'>X</button>
        </div>
        <p className='my-4 text-black'>Are you sure you want to delete this service?</p>
        <div className='flex gap-2 mt-4 justify-between'>
            <button onClick={deleteService} className='py-1 border border-redprimary bg-redprimary w-[50%] text-black'>Yes</button>
            <button onClick={closePopUp} className='py-1 border border-redprimary w-[50%] text-black'>No</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteServicePopUp
