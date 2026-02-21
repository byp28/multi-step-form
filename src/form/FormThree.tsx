import { useState } from "react"
import { currentAddon, type IAddOn } from "../features/add_on"
import AddOn from "../components/AddOn"


export default function FormThree() {

    const [selectAddon, setSelectAddon] = useState<IAddOn[]>([])

    //:)
    const addAddOn = (add_on:IAddOn)=>{
        selectAddon.push(add_on)
        console.log(selectAddon)
    }

    const removeAddOn = (add_on:IAddOn)=>{
        let newArray = selectAddon
        newArray.splice(newArray.findIndex((a)=> a===add_on),1)
        setSelectAddon(newArray)
        console.log(selectAddon)
    }

  return (
    <div className='w-4/6 max-lg:w-9/10 max-lg:-translate-y-30 max-lg:px-6 max-lg:py-6 max-lg:z-3 max-lg:bg-white max-lg:rounded-lg  px-16 py-14 h-full flex flex-col gap-6 max-lg:shadow-xl'>
        <h2 className="text-[#032852] text-4xl font-semibold">Pick add-ons</h2>
        <p className="text-gray-500">Add-ons help enhance your gaming experience.</p>
        <div className="w-full flex flex-col gap-4">
            {
                currentAddon.map((p,key)=><AddOn add_on={p} add={addAddOn} remove={removeAddOn} key={key}/>)
            }
        </div>
        <div className="w-full max-lg:hidden pt-10 items-center justify-between flex flex-row">
            <button className="text-[#9A9AA4] font-semibold cursor-pointer flex items-center justify-center w-28 h-12">Go Back</button>
            <button className="bg-[#03295A] text-white cursor-pointer flex items-center justify-center w-28 h-12 rounded-lg">Next step</button>
        </div>
    </div>
  )
}
