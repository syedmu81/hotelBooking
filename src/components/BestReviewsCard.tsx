import { useEffect, useState } from "react";
import StarRating from "./ui/StarRating";

interface Props{
  hotelData:{
  hotelName:string;
  hotelLocation:string;
  ratings:number;
  bookedInLast30Days:string;
  normalPrice:number;
  discountedPrice:number;
  reviews:string;
  hotelPictures:string[];
  }
}



const BestReviewsCard:React.FC<Props> = ({hotelData}) => {
  const [currentImageIndex,setCurrentImageIndex]=useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % hotelData.hotelPictures.length
      );
    }, 2000); // Change every 2 seconds
  
    return () => clearInterval(interval); // Cleanup
  }, [hotelData.hotelPictures.length]);
  
  return (
    <div className="bg-white h-70 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg flex flex-col">
      <div style={{height:'60%'}}>
        <img  src={hotelData.hotelPictures[currentImageIndex]} alt="1" className="w-full h-full object-cover" loading="lazy"/>
      </div>
      <div style={{height:'40%'}} className="w-full px-2">
      <h1 className="text-lg font-semibold text-purple-800">{hotelData.hotelName}</h1>
      <h1 className="text-sm text-gray-600">{hotelData.hotelLocation}</h1>
      <div className="flex justify-between items-center mt-1">
      <StarRating rating={hotelData.ratings} />
      <h1 className="text-sm text-gray-500">{hotelData.reviews || 'No reviews'}</h1>
      </div>
      <div className="flex justify-end gap-1">
      <h1 className="text-sm text-gray-500 line-through">₹ {hotelData.normalPrice}</h1>
      <h1 className="text-base font-bold text-blue-600">₹ {hotelData.discountedPrice}</h1>
      </div>
      </div>
    </div>
  )
}

export default BestReviewsCard