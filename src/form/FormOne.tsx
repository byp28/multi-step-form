import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { nextStep } from "../features/steps"


export default function FormOne() {

    const [validForm, setValidForm] = useState(false)
    const [error, setError] = useState({
        nameValue : true,
        emailValue : true,
        phoneValue : true,
    })
    const nameInput = useRef<HTMLInputElement>(null);
    const emailInput = useRef<HTMLInputElement>(null);
    const phoneInput = useRef<HTMLInputElement>(null);

    const dispatch = useDispatch()


    const checkName = ()=>{
        if(nameInput.current?.value.length === 0 || nameInput.current?.value === " "){
            return false
        }
        return true
    }
    const checkEmail = ()=>{
        if(emailInput.current?.value.length === 0 || emailInput.current?.value === " "){
            return false
        }
        return true
    }
    const checkPhone = ()=>{
        if(phoneInput.current?.value.length === 0 || phoneInput.current?.value === " "){
            return false
        }
        return true
    }

    const submitValue = ()=>{

        setError({
            nameValue : checkName(),
            emailValue : checkEmail(),
            phoneValue : checkPhone()
        })


        //dispatch(nextStep(1))

    }

  return (
    <div className='w-4/6 max-lg:w-9/10 max-lg:-translate-y-30 max-lg:px-6 max-lg:py-6 max-lg:z-3 max-lg:bg-white max-lg:rounded-lg  px-16 py-14 h-full flex flex-col gap-6 max-lg:shadow-xl'>
        <h2 className="text-[#032852] text-4xl font-semibold">Personal info</h2>
        <p className="text-gray-500">Please provide your name, email address, and phone number.</p>

        <div className="flex gap-2 flex-col">
            <div className="w-full  flex items-center justify-between">
                <span className="text-[#182B46]">Name</span>
                <span className={`${error.nameValue ? "hidden" : "text-red-600"}`}>This field is required</span>
            </div>
            <input type="text" ref={nameInput} placeholder="e.g. Stephen King" className="w-full px-5 py-3 outline-none border border-gray-300 rounded-lg" />
        </div>

        <div className="flex gap-2 flex-col">
            <div className="w-full  flex items-center justify-between">
                <span  className="text-[#182B46]">Email Address</span>
                <span className={`${error.emailValue ? "hidden" : "text-red-600"}`}>This field is required</span>
            </div>
            <input type="email" ref={emailInput} placeholder="e.g. stephenking@lorem.com" className="w-full px-5 py-3 outline-none border border-gray-300 rounded-lg" />
        </div>

        <div className="flex gap-2 flex-col">
            <div className="w-full  flex items-center justify-between">
                <span  className="text-[#182B46]">Phone Number</span>
                <span className={`${error.phoneValue ? "hidden" : "text-red-600"}`}>This field is required</span>
            </div>
            <input type="text" ref={phoneInput} placeholder="e.g. +1 234 567 890" className="w-full px-5 py-3 outline-none border border-gray-300 rounded-lg" />
        </div>
        <div className="w-full pt-10 max-lg:hidden items-center justify-between flex flex-row-reverse">
            <button onClick={()=> submitValue()} className="bg-[#03295A] text-white cursor-pointer flex items-center justify-center w-28 h-12 rounded-lg">Next step</button>
        </div>
    </div>
  )
}
