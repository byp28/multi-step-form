import FormOne from "./form/FormOne"
import FormThree from "./form/FormThree"
import FormTwo from "./form/FormTwo"
import SideBar from "./layouts/SideBar"


function App() {


  return (
    <main className="w-full min-h-screen flex justify-center items-center bg-[#EEF5FF]">
      <section className="w-5xl bg-white p-4 rounded-2xl h-165 shadow-md flex items-center justify-between">
        <SideBar/>
        {/* <FormOne/> */}
        {/* <FormTwo/> */}
        <FormThree/>
      </section>
    </main>
  )
}

export default App
