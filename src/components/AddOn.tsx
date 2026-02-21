import type { IAddOn } from "../features/add_on";


export default function AddOn({add_on, add, remove}:{add_on:IAddOn, add : (add_on:IAddOn)=>void, remove : (add_on:IAddOn)=>void}) {
  
    const checkElement = (e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.currentTarget.checked){
            add(add_on)
        }else{
            remove(add_on)
        }
    }
  
    return (
    <div className="w-full py-4 px-6 flex items-center gap-6 rounded border border-gray-400">
        <input onChange={(e)=>checkElement(e)} className="w-6 h-6" type="checkbox" name="" id="" />
        <div className="flex flex-col gap-1 w-full">
            <span className="text-[#04274F] font-semibold">{add_on.name}</span>
            <span className="text-gray-400">{add_on.text}</span>
        </div>
        <span className="text-[#5753AB]">{`+$${add_on.mouthPrice}/mo`}</span>
    </div>
  )
}
