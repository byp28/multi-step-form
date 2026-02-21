import { useDispatch, useSelector } from "react-redux"
import Final from "./form/Final"
import FormFour from "./form/FormFour"
import FormOne from "./form/FormOne"
import FormThree from "./form/FormThree"
import FormTwo from "./form/FormTwo"
import SideBar from "./layouts/SideBar"
import type { TReducer } from "./Store"
import { useEffect } from "react"
import { nextStep, prevStep } from "./features/steps"


function App() {

  const {step} = useSelector((state:TReducer)=> state.step)
  const dispatch = useDispatch()

  const multiForm = ()=>{
    switch(step){
      case 1 : 
        return <FormOne/>

      case 2 : 
        return <FormTwo/>

      case 3 : 
        return <FormThree/>

      case 4 : 
        return <FormFour/>

      case 5 : 
        return <Final/>
      
    }
  }

  useEffect(()=>{
    console.log(step)
  },[])

  return (
    <main className="w-full overflow-x-auto relative min-h-screen flex justify-center items-center bg-[#EEF5FF] max-lg:justify-start max-lg:items-start">
      <section className="w-5xl bg-white max-lg:bg-[#EEF5FF] max-lg:shadow-none  p-4 rounded-2xl h-165 shadow-md flex items-center justify-between max-lg:w-full max-lg:justify-start max-lg:items-center max-lg:flex-col max-lg:p-0 max-lg:h-auto">
        <SideBar/>
        {multiForm()}
      </section>
      <div className={`${step===5 ? "" : "max-lg:flex flex-row"} hidden  w-full absolute bottom-0 bg-white px-8   py-6 items-center justify-between  `}>
            <button onClick={()=> dispatch(prevStep(1))} className="text-[#9A9AA4] font-semibold cursor-pointer flex items-center justify-center w-28 h-12">Go Back</button>
            
            <button onClick={()=> dispatch(nextStep(1))} className="bg-[#03295A] text-white cursor-pointer flex items-center justify-center w-28 h-12 rounded-lg">Next step</button>
      </div>
    </main>
  )
}

export default App
