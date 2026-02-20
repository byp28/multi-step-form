import { useState } from "react";

interface IStep{
    stepNumber : number,
    name : string
}


export default function Step({step} : {step:IStep}) {

    const [activeStep, setActiveStep] = useState(false)

  return (
    <div className="w-full flex gap-5 items-center">
        <span className={`${activeStep ? "bg-[#BEE1FD]" : "text-[#BEE1FD]"} border border-[#BEE1FD] cursor-pointer w-12 h-12 rounded-full flex items-center justify-center z-2`}>
            {step.stepNumber}
        </span>
        <div className="flex flex-col gap-1 z-2">
            <span className="text-[#AAADFF] text-sm">STEP {step.stepNumber}</span>
            <span className="text-white text-base font-semibold">{step.name}</span>
        </div>
    </div>
  )
}
