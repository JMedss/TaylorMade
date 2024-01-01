import axios from "axios"
import toast from "react-hot-toast"


const DeletePopUp = (props) => {
    const deleteModal = props.state 
    const setDeleteModal = props.setDeleteModel
    const barber = props.barber

    const closePopUp = (e) => {
        setDeleteModal(!deleteModal)
    }
    const deleteBarber = async (e) => {

         await axios.delete("/api/deleteBarber", {
            data: { id: barber.id },
          })
          .then(() => toast.success("Barber deleted"))
          .catch(() => toast.error("An error occured"))
          .finally(closePopUp)
    }

  return (
    <div className={`${deleteModal ? "flex" : "hidden"} fixed bg-black/70 h-full w-[50%] min-w-[300px] max-w-[500px] ml-[-16px] mt-[-16px]`}>
        <div className='bg-slate-200 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-md flex flex-col items-center p-8'>
            <p className='text-black text-[18px]'>Are you sure you want to delete your account?</p>
            <div className='flex justify-center gap-4 w-full mt-2'>
                <button onClick={deleteBarber} className='text-black w-[40%] min-w-[100px] border border-redprimary bg-redprimary hover:scale-125 transition-all'>Yes</button>
                <button onClick={closePopUp} className='text-black w-[40%] min-w-[100px] border border-redprimary hover:scale-125 transition-all'>No</button>
            </div>
        </div>
    </div>
  )
}

export default DeletePopUp
