
import type { TReducer } from "../Store";
import { useSelector } from "react-redux";

interface IStep{
    stepNumber : number,
    name : string
}


export default function Step({step} : {step:IStep}) {

    const stepN = useSelector((state:TReducer)=> state.step.step)

  return (
    <div className="w-full flex max-lg:flex-col max-lg:w-10  gap-5 items-center max-lg:justify-center max-lg:gap-2">
        <span className={`${stepN===step.stepNumber ? "bg-[#BEE1FD]" : "text-[#BEE1FD]"} border max-lg:border-2 border-[#BEE1FD] cursor-pointer w-12 h-12 max-lg:w-10 max-lg:h-10 rounded-full flex items-center justify-center z-2`}>
            {step.stepNumber}
        </span>
        <span className="w-full hidden max-lg:block h-25"></span>
        <div className="flex max-lg:hidden flex-col gap-1 z-2">
            <span className="text-[#AAADFF] text-sm">STEP {step.stepNumber}</span>
            <span className="text-white text-base font-semibold">{step.name}</span>
        </div>
    </div>
  )
}
