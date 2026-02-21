import { useState } from "react"
import { currentAddon, type IAddOn } from "../features/add_on"
import AddOn from "../components/AddOn"
import { useDispatch, useSelector } from "react-redux"
import type { TReducer } from "../Store"
import { nextStep, prevStep } from "../features/steps"
import { setAddon } from "../features/multi_form_slice"


export default function FormThree() {

    const multiForm = useSelector((state:TReducer)=>state.multiForm)
    const dispatch = useDispatch()
    const [selectAddon, setSelectAddon] = useState<IAddOn[]>([...multiForm.addOn])

    //:)
    const addAddOn = (add_on:IAddOn)=>{
        selectAddon.push(add_on)
    }

    const removeAddOn = (add_on:IAddOn)=>{
        let newArray = selectAddon
        newArray.splice(newArray.findIndex((a)=> a===add_on),1)
        setSelectAddon(newArray)
    }

    const submitAddon = ()=>{
        dispatch(setAddon({addOn : selectAddon}))
        dispatch(nextStep(1))
    }

  return (
    <div className='w-4/6 max-lg:w-9/10 max-lg:-translate-y-30 max-lg:px-6 max-lg:py-6 max-lg:z-3 max-lg:bg-white max-lg:rounded-lg  px-16 py-14 h-full flex flex-col gap-6 max-lg:shadow-xl'>
        <h2 className="text-[#032852] text-4xl font-semibold">Pick add-ons</h2>
        <p className="text-gray-500">Add-ons help enhance your gaming experience.</p>
        <div className="w-full flex flex-col gap-4">
            {
                currentAddon.map((p,key)=><AddOn add_on={p} selectAddOn={selectAddon} add={addAddOn} remove={removeAddOn} key={key}/>)
            }
        </div>
        <div className="w-full max-lg:bg-white max-lg:w-full max-lg:py-8  max-lg:fixed  max-lg:-bottom-35 max-lg:px-6 max-lg:rounded-xl max-lg:left-0 pt-10 items-center justify-between flex flex-row">
            <button onClick={()=>dispatch(prevStep(1))} className="text-[#9A9AA4] font-semibold cursor-pointer flex items-center justify-center w-28 h-12">Go Back</button>
            <button onClick={()=>submitAddon()} className="bg-[#03295A] text-white cursor-pointer flex items-center justify-center w-28 h-12 rounded-lg">Next step</button>
        </div>
    </div>
  )
}
