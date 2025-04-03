
const CoverPage = () => {
  return (
    <div className=" flex flex-col w-full min-h-64 bg-cover max-h-120 items-center px-4 coverDiv">
      <div className="flex w-full flex-start flex-col">
      <h1 style={{fontSize: '60px', color: 'white'}}>Your Perfect Stay,</h1>
      <h2 style={{fontSize: '40px', color: "white"}}>Just a Click Away!</h2> 
      </div>
      <div className="flex w-full justify-between px-2 py-2 border border-white border-2 rounded-lg ">
        <input style={{width: "30%"}} className="bg-white h-10 rounded px-4 " type="text" placeholder="City"/>
        <input style={{width: "30%"}} className="bg-white h-10 rounded px-4 " type="date" placeholder="date"/>
        <input style={{width: "30%"}} className="bg-white h-10 rounded px-4" type="number" placeholder="number of People" />
        <button style={{width: "5%"}} className="cursor-pointer rounded bg-blue-700 font-bold  text-white">Go</button>
      </div>

    </div>
  )
}

export default CoverPage