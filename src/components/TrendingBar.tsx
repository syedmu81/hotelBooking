import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import BestReviewsCard from "./BestReviewsCard"

const bestHotelsData = [
  {
    hotelName: "RoseWood International",
    hotelLocation: "Bengaluru",
    ratings: 4.9,
    bookedInLast30Days: "12.6k times",
    normalPrice: 8000,
    discountedPrice: 5000,
    reviews:"1.7k",
    hotelPictures: ['/hotelImages/rosewood1.jpg', '/hotelImages/rosewood2.jpg', '/hotelImages/rosewood3.jpg', '/hotelImages/Rosewood4.jpg'],
  },
  {
    hotelName: "Taj Mahal Palace",
    hotelLocation: "Mumbai",
    ratings: 4.8,
    bookedInLast30Days: "15.2k times",
    normalPrice: 12000,
    discountedPrice: 9000,
    reviews:"3.6k",
    hotelPictures: ['/hotelImages/tajmahalpalace1.jpg', '/hotelImages/tajmahalpalace2.jpg', '/hotelImages/tajmahalpalace3.jpg', '/hotelImages/tajmahalpalace4.jpg',],
  },
  {
    hotelName: "The Oberoi Udaivilas",
    hotelLocation: "Udaipur",
    ratings: 5,
    bookedInLast30Days: "9.8k times",
    normalPrice: 15000,
    discountedPrice: 11000,
    reviews:"10.1k",
    hotelPictures: ['/hotelImages/theoberoi1.jpg', '/hotelImages/theoberoi2.jpg', '/hotelImages/theoberoi3.jpg', '/hotelImages/theoberoi4.jpg',],
  },
  {
    hotelName: "Leela Palace",
    hotelLocation: "New Delhi",
    ratings: 4.9,
    bookedInLast30Days: "11.4k times",
    normalPrice: 10000,
    discountedPrice: 7500,
    reviews:"2.7k",
    hotelPictures: ['/hotelImages/leelapalace1.jpg', '/hotelImages/leelapalace2.jpg', '/hotelImages/leelapalace3.jpg', '/hotelImages/leelapalace4.jpg',],
  },
  {
    hotelName: "ITC Grand Chola",
    hotelLocation: "Chennai",
    ratings: 4.8,
    bookedInLast30Days: "10.5k times",
    normalPrice: 9000,
    discountedPrice: 6500,
    reviews:"4.9k",
    hotelPictures: ['/hotelImages/itcgrandchola1.jpg', '/hotelImages/itcgrandchola2.jpg', '/hotelImages/itcgrandchola3.jpg', '/hotelImages/itcgrandchola4.jpg',],
  },
  {
    hotelName: "Hyatt Regency",
    hotelLocation: "Goa",
    ratings: 4.9,
    bookedInLast30Days: "13.1k times",
    normalPrice: 11000,
    discountedPrice: 8000,
    reviews:"8.1k",
    hotelPictures: ['/hotelImages/hyatt1.jpg', '/hotelImages/hyatt2.jpg', '/hotelImages/hyatt3.jpg', '/hotelImages/hyatt4.jpg',],
  },
  {
    hotelName: "Marriott Jaipur",
    hotelLocation: "Jaipur",
    ratings: 4.8,
    bookedInLast30Days: "8.7k times",
    normalPrice: 8500,
    discountedPrice: 6000,
    reviews:"2.2k",
    hotelPictures: ['/hotelImages/jaipurmarriott1.jpg', '/hotelImages/jaipurmarriott2.jpg', '/hotelImages/jaipurmarriott3.jpg', '/hotelImages/jaipurmarriott4.jpg',],
  },
  {
    hotelName: "Hilton Shillim Estate",
    hotelLocation: "Pune",
    ratings: 5,
    bookedInLast30Days: "7.9k times",
    normalPrice: 13000,
    discountedPrice: 9500,
    reviews:"9.5k",
    hotelPictures: ['/hotelImages/hiltonshillim1.jpg', '/hotelImages/hiltonshillim2.jpg', '/hotelImages/hiltonshillim3.jpg', '/hotelImages/hiltonshillim4.jpg',],
  },
  {
    hotelName: "Taj Falaknuma Palace",
    hotelLocation: "Hyderabad",
    ratings: 4.9,
    bookedInLast30Days: "10.2k times",
    normalPrice: 14000,
    discountedPrice: 10500,
    reviews:"6.6k",
    hotelPictures: ['/hotelImages/tajfalaknuma1.jpg', '/hotelImages/tajfalaknuma2.jpg', '/hotelImages/tajfalaknuma3.jpg', '/hotelImages/tajfalaknuma4.jpg',],
  },
  {
    hotelName: "The Lalit Grand Palace",
    hotelLocation: "Srinagar",
    ratings: 4.8,
    bookedInLast30Days: "6.5k times",
    normalPrice: 12500,
    discountedPrice: 9000,
    reviews:"12.7k",
    hotelPictures: ['/hotelImages/thelalitgrandpalace1.jpg', '/hotelImages/thelalitgrandpalace2.jpg', '/hotelImages/thelalitgrandpalace3.jpg', '/hotelImages/thelalitgrandpalace4.jpg',],
  },
];

const TrendingBar = () => {
  return (
    <div className="flex w-full justify-center mt-5">
    <div style={{width: "100%"}}>
      <h1  className="px-2 py-4 lg:text-xl md:text-md sm:text-sm text-sm font-bold text-purple-800">Looking For Best Hotels? </h1>
      <div className="flex justify-center w-full">
      <Carousel style={{width: "90%"}}>
  <CarouselContent className="-ml-1 -p-2">
    {bestHotelsData.map((hotelData)=><CarouselItem className="p-2 md:basis-1/2 lg:basis-1/3"><BestReviewsCard hotelData={hotelData}/></CarouselItem>)}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>


      </div>
    </div>

    </div>
  )
}

export default TrendingBar