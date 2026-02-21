import {  useSelector } from "react-redux"
import Final from "./form/Final"
import FormFour from "./form/FormFour"
import FormOne from "./form/FormOne"
import FormThree from "./form/FormThree"
import FormTwo from "./form/FormTwo"
import SideBar from "./layouts/SideBar"
import type { TReducer } from "./Store"




function App() {

  const {step} = useSelector((state:TReducer)=> state.step)

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


  return (
    <main className="w-full ubuntu overflow-x-auto relative min-h-screen flex justify-center items-center bg-[#EEF5FF] max-lg:justify-start max-lg:items-start">
      <section className="w-5xl bg-white max-lg:bg-[#EEF5FF] max-lg:shadow-none  p-4 rounded-2xl h-165 shadow-md flex items-center justify-between max-lg:w-full max-lg:justify-start max-lg:items-center max-lg:flex-col max-lg:p-0 max-lg:h-auto">
        <SideBar/>
        {multiForm()}
      </section>

    </main>
  )
}

export default App
