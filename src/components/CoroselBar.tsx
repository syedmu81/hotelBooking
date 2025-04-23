import Reviews from "./ui/Reviews";

const bestReviewsData = [
  {
    photo: '/luffy.jpg',
    name: 'Leonardo DiCaprio',
    hotelName: 'Stellar Vista Resort',
    date: '01/15/2025',
    review: 'The Stellar Vista Resort is a hidden gem! The oceanfront views and eco-friendly vibe were perfect for a relaxing getaway. The staff made every moment feel like a scene from a movie. Highly recommend!',
    ratings: 5
  },
  {
    photo: '/luffy.jpg',
    name: 'Beyoncé',
    hotelName: 'Aurora Palace Hotel',
    date: '02/03/2025',
    review: 'This place is pure luxury! The Aurora Palace treated us like royalty with their impeccable service and stunning suites. The spa was a dream—felt like I was in my own music video!',
    ratings: 5
  },
  {
    photo: '/luffy.jpg',
    name: 'Elon Musk',
    hotelName: 'Cosmos Grand Hotel',
    date: '03/22/2025',
    review: 'Cosmos Grand is out of this world—literally! The tech-forward amenities and futuristic design were right up my alley. The staff was efficient, and the rooftop bar had stellar views.',
    ratings: 4
  },
  {
    photo: '/luffy.jpg',
    name: 'Serena Williams',
    hotelName: 'Emerald Oasis Resort',
    date: '04/10/2025',
    review: 'Emerald Oasis was a slam dunk for relaxation! The tennis courts were top-notch, and the pool area was perfect for unwinding after a match. The food was a winner, too!',
    ratings: 5
  },
  {
    photo: '/luffy.jpg',
    name: 'Chris Hemsworth',
    hotelName: 'Oceanic Heights Lodge',
    date: '05/05/2025',
    review: 'Mate, Oceanic Heights is a legend! The beach access and surf lessons were unreal, and the rooms felt like a Viking’s paradise. Can’t wait to bring the family back!',
    ratings: 5
  },
  {
    photo: '/luffy.jpg',
    name: 'Oprah Winfrey',
    hotelName: 'Serenity Haven Hotel',
    date: '06/18/2025',
    review: 'Serenity Haven lives up to its name. The warm, welcoming atmosphere and thoughtful touches made me feel so at home. Their wellness programs are a must-try!',
    ratings: 4
  },
  {
    photo: '/luffy.jpg',
    name: 'Robert Downey Jr.',
    hotelName: 'Platinum Star Resort',
    date: '07/12/2025',
    review: 'Platinum Star is the real deal! The vibe was straight out of a blockbuster, with sleek rooms and a pool that screams luxury. The staff deserves an Oscar for service!',
    ratings: 5
  },
  {
    photo: '/luffy.jpg',
    name: 'Adele',
    hotelName: 'Luna Vista Hotel',
    date: '08/25/2025',
    review: 'Luna Vista stole my heart! The cozy rooms and live music nights were soulful perfection. The dining was divine—felt like I was singing with every bite!',
    ratings: 5
  },
  {
    photo: '/luffy.jpg',
    name: 'Cristiano Ronaldo',
    hotelName: 'Golden Horizon Resort',
    date: '09/14/2025',
    review: 'Golden Horizon is a champion’s choice! The gym was world-class, and the staff kept everything on point. Perfect spot to recharge before the next goal.',
    ratings: 4
  },
  {
    photo: '/luffy.jpg',
    name: 'Taylor Swift',
    hotelName: 'Crystal Charm Hotel',
    date: '10/02/2025',
    review: 'Crystal Charm is my new favorite getaway! The decor was like stepping into a fairytale, and the staff made every moment magical. I’m already writing a song about it!',
    ratings: 5
  }
];

const CoroselBar = () => {
  // Array of image indices for dynamic rendering
  const items = Array.from({ length: bestReviewsData.length }, (_, index) => index);

  return (
    <div className="w-full flex justify-center ">
      <div className="slider py-4 ">
      <h1  className="px-2 py-4 lg:text-xl md:text-md sm:text-sm text-sm font-bold text-purple-800">Reviews From Famous Personalities </h1>
        <div className="list">
          {items.map((position) => (
            <div
              key={`original-${position}`}
              className="item flex w-full justify-center items-center bg-white rounded-md"
              style={{ "--position": position } as React.CSSProperties}
            >
              
              <Reviews data={bestReviewsData[position]}/>
            </div>
          ))}
          {/* Duplicate items for infinite loop */}
          {items.map((position) => (
            <div
              key={`duplicate-${position}`}
              className="item w-full flex justify-center items-center bg-white rounded-md"
              style={{ "--position": position + items.length } as React.CSSProperties}
            >
              <Reviews data={bestReviewsData[position]}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoroselBar;