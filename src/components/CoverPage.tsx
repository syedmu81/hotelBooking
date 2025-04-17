const CoverPage = () => {
  return (
    <div
      className="flex flex-col w-full min-h-[16rem] sm:min-h-[20rem] bg-cover bg-center items-center justify-center px-4 py-8 sm:py-12 md:py-16 coverDiv"
    >
      {/* Headlines */}
      <div className="w-full max-w-[90%] text-center sm:text-left mb-6 sm:mb-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
          Your Perfect Stay,
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mt-2">
          Just a Click Away!
        </h2>
      </div>

      {/* Search Form */}
      <div className="w-full max-w-[90%] bg-white/20 backdrop-blur-sm rounded-lg border-2 border-white/50 p-4 sm:p-6">
      <div className="flex gap-2 flex-wrap">
        <div className="w-full lg:w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="City"
            className="w-full h-12 px-4 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Search city"
          />
          <input
            type="date"
            className="w-full h-12 px-4 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Check-in date"
          />
          <input
            type="number"
            placeholder="Number of People"
            min="1"
            className="w-full h-12 px-4 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Number of guests"
          />
          </div>
          <div className="w-full lg:w-[9%] md:w-[100%] sm:w-[100%]">
          <button
            className="w-full min-h-12 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Search hotels"
          >
            Go
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CoverPage;