import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex  flex-wrap justify-between w-full min-h-16 items-center">
      <div>
        <h1  className="text-xl font-bold px-2 py-2 text-purple-800">Hot-Bookings</h1>
      </div>

      <div style={{ width: "20rem" }} className="flex border gap-1 border-1 border-purple-800 px-4 py-2 rounded-lg">
      <FaSearch size={20} color="purple"/>
        <input type="text" placeholder="Search hotels by name" className="nav-search text-purple-800"/>
        </div>
      <div >
        <ul className="flex flex-wrap">
          <a className="px-4 py-4 text-purple-800 font-bold">Home</a>
          <a className="px-4 py-4 text-purple-800 font-bold">Rooms</a>
          <a className="px-4 py-4 text-purple-800 font-bold">Contact</a>
          <a className="px-4 py-4 text-purple-800 font-bold">About</a>
        </ul>

      </div>

    </div>
  )
}

export default Navbar