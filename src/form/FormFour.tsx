
import { changeStep, nextStep, prevStep } from "../features/steps"
import type { TReducer } from "../Store"
import { useDispatch, useSelector } from "react-redux"


export default function FormFour() {

    const multiForm = useSelector((state:TReducer)=>state.multiForm)
    const dispatch = useDispatch()

   const totalMounth = ()=>{
        let t = 0
        multiForm.addOn.map((a)=>{
            t+=a.mouthPrice
        })
        return t+multiForm.plan.mouthPrice
   }

    const totalYear = ()=>{
        let t = 0
        multiForm.addOn.map((a)=>{
            t+=a.yearPrice
        })
        return t+multiForm.plan.yearPrice
   }

  return (
    <div className='w-4/6 max-lg:w-9/10 max-lg:-translate-y-30 max-lg:px-6 max-lg:py-6 max-lg:z-3 max-lg:bg-white max-lg:rounded-lg  px-16 py-14 h-full flex flex-col gap-6 max-lg:shadow-xl'>
        <h2 className="text-[#032852] text-4xl font-semibold">Finishing up</h2>
        <p className="text-gray-500">Double-check everything looks OK before confirming.</p>
        <div className="w-full flex flex-col bg-[#F8F9FE] gap-4 px-8 py-6 rounded">
            <div className="w-full pb-6 border-b border-b-gray-500 flex justify-between items-center">
                <div className="flex flex-col gap-1">
                    <span className="text-[#032852] text-lg font-semibold">{multiForm.plan.name} {`${multiForm.isYear ? "(Yearly)" : "(Monthly)"}`}</span>
                    <span onClick={()=>dispatch(changeStep(1))} className="text-gray-500 underline cursor-pointer">Change</span>
                </div>
                <span className="font-semibold text-[#032852]">
                    {
                        multiForm.isYear 
                        ? `$${multiForm.plan.yearPrice}/yr`
                        : `$${multiForm.plan.mouthPrice}/mo`
                    }
                </span>
            </div>
            {
                multiForm.addOn.map((add_on, key)=>(
                    <span key={key} className="w-full flex justify-between items-center">
                        <span className="text-gray-500 font-semibold">{add_on.name}</span>
                        {
                            multiForm.isYear 
                            ? <span className="text-[#032852]">+${add_on.yearPrice}/yr</span>
                            : <span className="text-[#032852]">+${add_on.mouthPrice}/mo</span>
                        }
                        
                    </span>
                ))
            }
        </div>
        <span className="w-full px-8 py-4 flex justify-between items-center">
                <span className="text-gray-500 font-semibold">Total {multiForm.isYear ? "(per year)" : "(per mouth)"} </span>
                <span className="text-[#483BE0] text-lg font-semibold">{multiForm.isYear ? `+$${totalYear()}/yr` : `+$${totalMounth()}/mo`}</span>
        </span>
        <div className="w-full pt-10 items-center justify-between flex flex-row max-lg:bg-white max-lg:w-full max-lg:py-8  max-lg:fixed  max-lg:-bottom-35 max-lg:px-6 max-lg:rounded-xl max-lg:left-0">
            <button onClick={()=>dispatch(prevStep(1))} className="text-[#9A9AA4] font-semibold cursor-pointer flex items-center justify-center w-28 h-12">Go Back</button>
            <button onClick={()=>dispatch(nextStep(1))} className="bg-[#483BE0] text-white cursor-pointer flex items-center justify-center w-28 h-12 rounded-lg">Confirm</button>
        </div>
    </div>
  )
}
