
const SubscribeUs = () => {
  return (
    <div className="mt-4 w-full subscribediv px-4 py-4">
      <h1 className="text-white text-[40px] font-bold">Subscribe Us! </h1>
      <h1 className="text-white text-[30px] font-bold">To get great discounts and Deals on Hotel Booking</h1>
      <div className="flex gap-4 items-center">
      <input type="email" placeholder="Enter Email Id" className="w-[30%] h-12 px-2 py-2 text-md rounded-md bg-white mt-4"/>
      <input type="tel" placeholder="Enter Mobile Number" className="w-[30%] h-12 px-2 py-2 text-md rounded-md bg-white mt-4"/>
      <button className="cursor-pointer px-2 py-2 text-md rounded-md bg-blue-800 text-white h-12 mt-4 font-bold">Subscribe</button>
      </div>
    </div>
  )
}

export default SubscribeUs