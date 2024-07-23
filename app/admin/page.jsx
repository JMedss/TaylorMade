"use client"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { signIn, useSession } from "next-auth/react"


const Admin = () => {

  const [password, setPassword] = useState("")
  const router = useRouter()
  const session = useSession()
 
  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/admin/add-barbers")
    }
  })

  const handleAuth = (e) => {
    e.preventDefault()
    signIn("credentials", {password, redirect: false})
    .then((callback) => {
      if(callback?.error) {
        toast.error(callback.error)
      }

      if(callback?.ok && !callback?.error) {
        toast.success("Logged In Successfully")
      }
    })
  }

  const handlePasswordChange = (e) => {
    const inputValue = e.target.value;
    // Use a regular expression to test if the input contains only letters and numbers
    const isValid = /^[a-zA-Z0-9]+$/.test(inputValue);

    if (isValid) {
      setPassword(inputValue);
    }
  }

  return (
    <main className='mt-[120px] w-screen h-[80vh] flex flex-col items-center justify-center'>
      <h1>Please enter the password</h1>
      <form className="flex flex-col gap-2" action="submit" onSubmit={handleAuth}>
        <input type="password" className='text-black' onChange={handlePasswordChange}/>
        <button className="w-[300px] bg-redprimary py-2">Enter</button>
      </form>
    </main>
  )
}

export default Admin
