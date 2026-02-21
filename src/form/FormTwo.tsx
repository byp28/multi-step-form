import { useState } from "react"
import PlanCard from "../components/PlanCard"
import { currentPlan, type IPlan } from "../features/plan"
import { useDispatch, useSelector } from "react-redux"
import type { TReducer } from "../Store"
import { setPlan, setYear } from "../features/multi_form_slice"
import { nextStep, prevStep } from "../features/steps"


export default function FormTwo() {

    const multiForm = useSelector((state:TReducer)=>state.multiForm)
    const [isYear, setIsYear] = useState(multiForm.isYear)
    const [selectPlan, setSelectPlan] = useState<IPlan>(multiForm.plan)

    const dispatch = useDispatch()

    const submitPlan = ()=>{
        dispatch(setPlan({plan : selectPlan}))
        dispatch(setYear({year : isYear}))
        dispatch(nextStep(1))
    }

  return (
    <div className='w-4/6 max-lg:w-9/10 max-lg:-translate-y-30 max-lg:px-6 max-lg:py-6 max-lg:z-3 max-lg:bg-white max-lg:rounded-lg  px-16 py-14 h-full flex flex-col gap-6 max-lg:shadow-xl'>
        <h2 className="text-[#032852] text-4xl font-semibold">Select your plan</h2>
        <p className="text-gray-500">You have the option of monthly or yearly billing.</p>
        <div className="w-full flex max-lg:flex-col gap-4 justify-between max-lg:justify-center">
            {
                currentPlan.map((p,key)=><PlanCard key={key} selectPlan={selectPlan} setSelectPlan={setSelectPlan} isYear={isYear} plan={p}/>)
            }
        </div>
        <div className="w-full py-4 bg-[#F8F9FE] justify-center flex items-center gap-4">
            <span className={`${!isYear ? "text-[#02295B]" : "text-[#9A9AA4]"} text-lg font-semibold`}>Monthly</span>
            <span onClick={()=> setIsYear(!isYear)} className={`${!isYear ? "justify-start" : "justify-end"}  w-16 rounded-full flex items-center py-2 px-1 h-8 bg-[#03295A] ease-in-out cursor-pointer`}>
                <span className={`w-6 h-6 bg-white rounded-full ease-in-out`}></span>
            </span>
            <span className={`${isYear ? "text-[#02295B]" : "text-[#9A9AA4]"} text-lg font-semibold`}>Yearly</span>
        </div>
        <div className="w-full max-lg:bg-white max-lg:w-full max-lg:py-8  max-lg:fixed  max-lg:-bottom-35 max-lg:px-6 max-lg:rounded-xl max-lg:left-0 pt-10 items-center justify-between flex flex-row">
            <button onClick={()=>dispatch(prevStep(1))} className="text-[#9A9AA4] font-semibold cursor-pointer flex items-center justify-center w-28 h-12">Go Back</button>
            <button onClick={()=>submitPlan()} className="bg-[#03295A] text-white cursor-pointer flex items-center justify-center w-28 h-12 rounded-lg">Next step</button>
        </div>
    </div>
  )
}
