import { useState } from "react";
import type { IAddOn } from "../features/add_on";
import type { TReducer } from "../Store";
import { useSelector } from "react-redux";


export default function AddOn({add_on, selectAddOn, add, remove}:{selectAddOn:IAddOn[] ,add_on:IAddOn, add : (add_on:IAddOn)=>void, remove : (add_on:IAddOn)=>void}) {
  
    const [isCheck, setIsCheck] = useState<boolean>(selectAddOn.find((a)=> a===add_on) ? true : false)
    const {isYear} = useSelector((state:TReducer)=>state.multiForm)
    const checkElement = (e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.currentTarget.checked){
            add(add_on)
            setIsCheck(true)
        }else{
            remove(add_on)
            setIsCheck(false)
        }
    }
  
    return (
    <div className={`${isCheck ? "border-3 border-[#6560A4]" : "border border-gray-400" }w-full py-4 px-6 flex items-center gap-6 rounded `}>
        <input defaultChecked={isCheck} onChange={(e)=>checkElement(e)} className="w-6 h-6 cursor-pointer" type="checkbox" name="" id="" />
        <div className="flex flex-col gap-1 w-full">
            <span className="text-[#04274F] font-semibold">{add_on.name}</span>
            <span className="text-gray-400">{add_on.text}</span>
        </div>
        {
            isYear 
            ? <span className="text-[#5753AB]">{`+$${add_on.yearPrice}/yr`}</span>
            : <span className="text-[#5753AB]">{`+$${add_on.mouthPrice}/mo`}</span>
        }
        
    </div>
  )
}
