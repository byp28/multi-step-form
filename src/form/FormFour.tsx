import { useState } from "react"
import { currentAddon, type IAddOn } from "../features/add_on"
import AddOn from "../components/AddOn"


export default function FormFour() {

    const [selectAddon, setSelectAddon] = useState<IAddOn[]>([])

   

  return (
    <div className='w-4/6 max-lg:w-9/10 max-lg:-translate-y-30 max-lg:px-6 max-lg:py-6 max-lg:z-3 max-lg:bg-white max-lg:rounded-lg  px-16 py-14 h-full flex flex-col gap-6 max-lg:shadow-xl'>
        <h2 className="text-[#032852] text-4xl font-semibold">Finishing up</h2>
        <p className="text-gray-500">Double-check everything looks OK before confirming.</p>
        <div className="w-full flex flex-col bg-[#F8F9FE] gap-4 px-8 py-6 rounded">
            <div className="w-full pb-6 border-b border-b-gray-500 flex justify-between items-center">
                <div className="flex flex-col gap-1">
                    <span className="text-[#032852] text-lg font-semibold">Arcade (Yearly)</span>
                    <span className="text-gray-500 underline cursor-pointer">Change</span>
                </div>
                <span className="font-semibold text-[#032852]">
                    $90/yr
                </span>
            </div>
            <span className="w-full flex justify-between items-center">
                <span className="text-gray-500 font-semibold">Online service</span>
                <span className="text-[#032852]">+$10/yr</span>
            </span>
            <span className="w-full flex justify-between items-center">
                <span className="text-gray-500 font-semibold">Online service</span>
                <span className="text-[#032852]">+$10/yr</span>
            </span>
            <span className="w-full flex justify-between items-center">
                <span className="text-gray-500 font-semibold">Online service</span>
                <span className="text-[#032852]">+$10/yr</span>
            </span>
        </div>
        <span className="w-full px-8 py-4 flex justify-between items-center">
                <span className="text-gray-500 font-semibold">Total (per year)</span>
                <span className="text-[#483BE0] text-lg font-semibold">$120/yr</span>
        </span>
        <div className="w-full pt-10 items-center justify-between flex flex-row max-lg:hidden">
            <button className="text-[#9A9AA4] font-semibold cursor-pointer flex items-center justify-center w-28 h-12">Go Back</button>
            <button className="bg-[#483BE0] text-white cursor-pointer flex items-center justify-center w-28 h-12 rounded-lg">Confirm</button>
        </div>
    </div>
  )
}
