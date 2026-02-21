import Final from "./form/Final"
import FormFour from "./form/FormFour"
import FormOne from "./form/FormOne"
import FormThree from "./form/FormThree"
import FormTwo from "./form/FormTwo"
import SideBar from "./layouts/SideBar"


function App() {


  return (
    <main className="w-full overflow-x-auto relative min-h-screen flex justify-center items-center bg-[#EEF5FF] max-lg:justify-start max-lg:items-start">
      <section className="w-5xl bg-white max-lg:bg-[#EEF5FF] max-lg:shadow-none  p-4 rounded-2xl h-165 shadow-md flex items-center justify-between max-lg:w-full max-lg:justify-start max-lg:items-center max-lg:flex-col max-lg:p-0 max-lg:h-auto">
        <SideBar/>
        {/* <FormOne/> */}
        {/* <FormTwo/> */}
        {/* <FormThree/> */}
        {/* <FormFour/> */}
        <Final/>
      </section>
      <div className="hidden max-lg:flex w-full absolute bottom-0 bg-white px-8   py-6 items-center justify-between  flex-row">
            <button className="text-[#9A9AA4] font-semibold cursor-pointer flex items-center justify-center w-28 h-12">Go Back</button>
            <button className="bg-[#03295A] text-white cursor-pointer flex items-center justify-center w-28 h-12 rounded-lg">Next step</button>
      </div>
    </main>
  )
}

export default App
