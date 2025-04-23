import DestinationCard from "./DestinationCard";
const PopularDestinations = () => {
  const destinations = [
    "Bengaluru",
    "Ooty",
    "Coorg",
    "Munnar",
    "Mysore",
    "Manali",
    "Goa",
    "Mumbai",
    "Delhi",
    "Ladakh",
    "Agra",
    "Shimla",
  ];

  return (
    <div className="w-full px-4 py-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Popular Destinations
      </h2>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
          {destinations.map((destination, index) => (
            <DestinationCard key={index} destination={destination} /> 
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;