

export default function FormOne() {
  return (
    <div className='w-4/6 max-lg:w-9/10 max-lg:-translate-y-30 max-lg:px-6 max-lg:py-6 max-lg:z-3 max-lg:bg-white max-lg:rounded-lg  px-16 py-14 h-full flex flex-col gap-6 max-lg:shadow-xl'>
        <h2 className="text-[#032852] text-4xl font-semibold">Personal info</h2>
        <p className="text-gray-500">Please provide your name, email address, and phone number.</p>

        <div className="flex gap-2 flex-col">
            <div className="w-full  flex items-center justify-between">
                <span>Name</span>
                <span>This field is required</span>
            </div>
            <input type="text" placeholder="e.g. Stephen King" className="w-full px-5 py-3 outline-none border border-gray-300 rounded-lg" />
        </div>

        <div className="flex gap-2 flex-col">
            <div className="w-full  flex items-center justify-between">
                <span>Email Address</span>
                <span>This field is required</span>
            </div>
            <input type="text" placeholder="e.g. stephenking@lorem.com" className="w-full px-5 py-3 outline-none border border-gray-300 rounded-lg" />
        </div>

        <div className="flex gap-2 flex-col">
            <div className="w-full  flex items-center justify-between">
                <span>Phone Number</span>
                <span>This field is required</span>
            </div>
            <input type="text" placeholder="e.g. +1 234 567 890" className="w-full px-5 py-3 outline-none border border-gray-300 rounded-lg" />
        </div>
        <div className="w-full pt-10 max-lg:hidden items-center justify-between flex flex-row-reverse">
            <button className="bg-[#03295A] text-white cursor-pointer flex items-center justify-center w-28 h-12 rounded-lg">Next step</button>
        </div>
    </div>
  )
}
