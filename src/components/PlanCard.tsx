import type { IPlan } from "../features/plan";


export default function PlanCard({plan,isYear,selectPlan,setSelectPlan} : {plan: IPlan, isYear : boolean, selectPlan :IPlan , setSelectPlan : (p:IPlan)=>void}) {
  return (
    <div onClick={()=> setSelectPlan(plan)} className={`${selectPlan === plan ? "border-3 border-[#6560A4] " : "border border-gray-300 hover:border-[#6560A4]"} w-40 max-lg:items-center max-lg:gap-5 max-lg:flex-row max-lg:min-h-auto max-lg:h-auto max-lg:w-full flex flex-col gap-12 h-auto min-h-35 px-4 py-6 ease-in-out cursor-pointer rounded-lg`}>
        <img className="w-12 h-12" src={plan.logo} alt={plan.name}/>
        <div className="flex flex-col">
            <span className="text-lg text-[#072C5B] font-semibold">{plan.name}</span>
            <span className="text-gray-400">
                {
                    isYear 
                    ? `$${plan.yearPrice}/yr`
                    : `$${plan.mouthPrice}/mo`
                }
            </span>
            <span className={`${isYear ? "" : "hidden"} text-[#072C5B]`}>2 months free</span>
        </div>
    </div>
  )
}
