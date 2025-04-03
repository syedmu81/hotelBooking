

const Navbar = () => {
  return (
    <div className="flex justify-between w-full h-16 items-center">
      <div>
        <h1  className="text-xl font-bold px-2 py-2 text-purple-800">Hot-Bookings</h1>
      </div>

      <div style={{ width: "20rem" }} className="flex border gap-1 border-1 border-gray-200 px-4 py-2 rounded-lg">
        <img src="/search.svg" alt="search" height={20} width={20}/>
        <input type="text" placeholder="Search hotels by name" className="nav-search"/>
        </div>
      <div>
        <ul>
          <a className="px-4 py-4">Home</a>
          <a className="px-4 py-4">Rooms</a>
          <a className="px-4 py-4">Contact</a>
          <a className="px-4 py-4">About</a>
        </ul>

      </div>

    </div>
  )
}

export default Navbar