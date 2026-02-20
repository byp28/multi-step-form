import Step from "../components/Step";

export default function SideBar() {
  return (
    <div className='w-2/6 h-full relative px-12 py-10 flex flex-col gap-5'>
        <img className='w-full h-full object-fill rounded-lg absolute z-1 left-0 top-0' src="/assets/images/bg-sidebar-desktop.svg" alt="sidebar" />
        <Step step={{stepNumber : 1, name : "YOUR INFO"}}/>
        <Step step={{stepNumber : 2, name : "SELECT PLAN"}}/>
        <Step step={{stepNumber : 3, name : "ADD-ONS"}}/>
        <Step step={{stepNumber : 4, name : "SUMMARY"}}/>

    </div>
  )
}
