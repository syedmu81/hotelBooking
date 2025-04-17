interface Props{
  destination:string;
}

const DestinationCard:React.FC<Props> = ({ destination }) => {
  // Placeholder image URLs (replace with actual destination images)
  const imageUrls: { [key: string]: string } = {
    Bengaluru: "/Bengaluru.png",
    Ooty: "/Ooty.png",
    Coorg: "/Coorg.png",
    Munnar: "/Munnar.png",
    Mysore: "/Mysore.png",
    Manali: "/Manali.png",
    Goa: "/Goa.png",
    Mumbai: "/Mumbai.png",
    Delhi: "/Delhi.png",
    Ladakh: "/Ladakh.png",
    Agra: "/Agra.png",
    Shimla: "/Shimla.png",
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <img
        src={imageUrls[destination] || "https://via.placeholder.com/300x200"}
        alt={`${destination} destination`}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{destination}</h3>
        <p className="text-gray-600 mt-2">
          Discover the beauty of {destination} with our exclusive hotel deals.
        </p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
          Explore Hotels
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;