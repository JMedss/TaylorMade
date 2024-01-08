"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import DeletePopUp from "./DeletePopUp"
import toast from "react-hot-toast"


const EditPopup = (props) => {
    const barber = props.barber
    const edit = props.state
    const setEdit = props.setEdit

    const [data, setData] = useState({
        id: "",
        name: "",
        location: "",
        link: "",
        benefitOne: "",
        benefitTwo: "",
        benefitThree: "",
        benefitFour: "",
        instagram:  "",
        facebook: "",
        tiktok: "",
        youtube: "",
    })



    const [isDisabled, setIsDisabled] = useState(true)

 
    useEffect(() => {
        if(barber !== undefined) {
            setData({
                id: barber.id,
                name: barber.name,
                location: barber.location,
                link: barber.link,
                benefitOne: barber.benefitOne,
                benefitTwo: barber.benefitTwo,
                benefitThree: barber.benefitThree,
                benefitFour: barber.benefitFour,
                instagram:  barber.instagram,
                facebook: barber.facebook,
                tiktok: barber.tiktok,
                youtube: barber.youtube,
            })
        }
    }, [barber])


    const [deleteModal, setDeleteModal] = useState(false)

    const closePopUp = (e) => {
        setEdit(!edit)
        setIsDisabled(true)
    }

    const deleteBarber = async (e) => {
        e.preventDefault()
        setDeleteModal(!deleteModal)
    }

    const handleName = (e) => {
        const onlyLetters = e.target.value.replace(/[^a-zA-Z\s]/g, '')
        setData({...data, name: onlyLetters})
        setIsDisabled(false) 
    }
    const handleLocation = (e) => {
        setData({...data, location: e.target.value})
        setIsDisabled(false)
    }
    const handleLink = (e) => {
        setData({...data, link: e.target.value})
        setIsDisabled(false)
    }
    const handleBenefitOne = (e) => {
        const onlyLetters = e.target.value.replace(/[^a-zA-Z\s]/g, '')
        setData({...data, benefitOne: onlyLetters})
        setIsDisabled(false)
    }
    const handleBenefitTwo = (e) => {
        const onlyLetters = e.target.value.replace(/[^a-zA-Z\s]/g, '')
        setData({...data, benefitTwo: onlyLetters})
        setIsDisabled(false)
    }
    const handleBenefitThree = (e) => {
        const onlyLetters = e.target.value.replace(/[^a-zA-Z\s]/g, '')
        setData({...data, benefitThree: onlyLetters})
        setIsDisabled(false)
    }
    const handleBenefitFour = (e) => {
        const onlyLetters = e.target.value.replace(/[^a-zA-Z\s]/g, '')
        setData({...data, benefitFour: onlyLetters})
        setIsDisabled(false)
    }
    const handleInstagram = (e) => {
        setData({...data, instagram: e.target.value})
        setIsDisabled(false)
    }
    const handleFacebook = (e) => {
        setData({...data, facebook: e.target.value})
        setIsDisabled(false)
    }
    const handleTiktok = (e) => {
        setData({...data, tiktok: e.target.value})
        setIsDisabled(false)
    }
    const handleYoutube = (e) => {
        setData({...data, youtube: e.target.value})
        setIsDisabled(false)
    }


   console.log(data)



    const handleBasicInfo = (e) => {
        e.preventDefault()
        axios.put("/api/updateBarber", data)
        .then(() => toast.success("Barber Updated"))
        .catch(() => toast.error("Error"))
        .finally(() => setIsDisabled(true))
    }





  return (
    <div className={`fixed top-0 left-0 z-40 bg-black/60 w-screen h-screen flex-col items-center justify-center ${edit ? "flex" : "hidden"}`}>
        <div className='w-[50%] min-w-[300px] max-w-[500px] h-full bg-slate-200 shadow-xl flex flex-col mt-40 p-4  overflow-scroll relative'>
            <div className='flex items-center justify-end'>
                <button onClick={closePopUp} className='fixed text-redprimary hover:scale-150'>X</button>
            </div>
            <h2 className='w-full text-center text-black'>{barber && barber.name}</h2>
            <form action="submit" onSubmit={handleBasicInfo}>
                <div className='flex flex-col my-1'>
                    <label htmlFor="name" className='block text-sm font-medium leading-6 text-redprimary'>Full Name</label>
                    <input
                    className='outline-redprimary block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-redprimary sm:text-sm sm:leading-6 bg-white'
                    type='text'
                    id='name'
                    value={data && data.name}
                    onChange={handleName}
                    />
                </div>

                <div className='flex flex-col my-1'>
                    <label htmlFor="link" className='block text-sm font-medium leading-6 text-redprimary'>Link</label>
                    <input
                    className='outline-redprimary block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-redprimary sm:text-sm sm:leading-6 bg-white'
                    type='text'
                    id='link'
                    value={data && data.link}
                    onChange={handleLink}
                    />
                </div>

                <label htmlFor="location" className="block text-sm font-medium leading-6 text-redprimary mt-1">
                     Location
                </label>
                <select 
                    onChange={handleLocation}
                    id='location' 
                    value={data && data.location}
                    className='outline-redprimary block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-redprimary sm:text-sm sm:leading-6 bg-white mb-1'>
                        <option value="Johnson City">Johnson City</option>
                        <option value="Greeneville">Greeneville</option>
                </select>
                <p className='text-[18px] my-5 text-black'>The benefits will display when clients choose you.</p>
                <div className='flex flex-col my-1'>
                    <label className='block text-sm font-medium leading-6 text-redprimary'>Benefit One</label>
                    <input
                    className='outline-redprimary block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-redprimary sm:text-sm sm:leading-6 bg-white'
                    type='text'
                    placeholder="Master Barber"
                    value={data && data.benefitOne}
                    onChange={handleBenefitOne}
                    />
                </div>

                <div className='flex flex-col my-1'>
                    <label className='block text-sm font-medium leading-6 text-redprimary'>Benefit Two</label>
                    <input
                    className='outline-redprimary block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-redprimary sm:text-sm sm:leading-6 bg-white'
                    type='text'
                    placeholder="Master Barber"
                    value={data && data.benefitTwo}
                    onChange={handleBenefitTwo}
                    />
                </div>

                <div className='flex flex-col my-1'>
                    <label className='block text-sm font-medium leading-6 text-redprimary'>Benefit Three</label>
                    <input
                    className='outline-redprimary block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-redprimary sm:text-sm sm:leading-6 bg-white'
                    type='text'
                    placeholder="Master Barber"
                    value={data && data.benefitThree}
                    onChange={handleBenefitThree}
                    />
                </div>

                <div className='flex flex-col my-1'>
                    <label  className='block text-sm font-medium leading-6 text-redprimary'>Benefit Four</label>
                    <input
                    className='outline-redprimary block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-redprimary sm:text-sm sm:leading-6 bg-white'
                    type='text'
                    placeholder="Master Barber"
                    value={data && data.benefitFour}
                    onChange={handleBenefitFour}
                    />
                </div>

                <p className='text-[18px] my-5 text-black'>Socials</p>

                <div className='flex flex-col my-1'>
                    <label className='block text-sm font-medium leading-6 text-redprimary'>Instagram</label>
                    <input
                    className='outline-redprimary block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-redprimary sm:text-sm sm:leading-6 bg-white'
                    type='text'
                    value={data && data.instagram}
                    onChange={handleInstagram}
                    />
                </div>

                <div className='flex flex-col my-1'>
                    <label className='block text-sm font-medium leading-6 text-redprimary'>Facebook</label>
                    <input
                    className='outline-redprimary block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-redprimary sm:text-sm sm:leading-6 bg-white'
                    type='text'
                    value={data && data.facebook}
                    onChange={handleFacebook}
                    />
                </div>

                <div className='flex flex-col my-1'>
                    <label  className='block text-sm font-medium leading-6 text-redprimary'>TikTok</label>
                    <input
                    className='outline-redprimary block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-redprimary sm:text-sm sm:leading-6 bg-white'
                    type='text'
                    value={data && data.tiktok}
                    onChange={handleTiktok}
                    />
                </div>

                <div className='flex flex-col my-1'>
                    <label className='block text-sm font-medium leading-6 text-redprimary'>YouTube</label>
                    <input
                    className='outline-redprimary block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-redprimary sm:text-sm sm:leading-6 bg-white'
                    type='text'
                    value={data && data.youtube}
                    onChange={handleYoutube}
                    />
                </div>



                <button 
                disabled={isDisabled === true}
                type="submit" className="bg-blueprimary w-full my-2 py-1 rounded-md disabled:opacity-70">Update Basic Info</button>
            </form>
        
          

                <div className="w-full pb-[80px]">
                    <button
                    onClick={deleteBarber}
                    className="bg-redprimary w-full my-2 py-1 rounded-md">DELETE BARBER</button>
                </div>
                <DeletePopUp state={deleteModal} setDeleteModel={setDeleteModal} barber={barber}/>
        </div>
    </div>
    
  )
}

export default EditPopup
