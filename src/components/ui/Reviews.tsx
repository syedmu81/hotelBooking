interface DataProps {
  data:{
  photo: string;
  name: string;
  hotelName: string;
  date: string;
  review: string;
  ratings: number;
  }
}

const Reviews:React.FC<DataProps> = ({data}) => {
  if(data==null) return null;
  return (
    <div className="p-4 ">
      <div className="w-full flex justify-center items-center ">
           <div className="w-[100px] h-[100px]"> <img style={{borderRadius:'50%'}} src={data.photo} alt={data.name}/></div></div>
      <h3 className="w-full text-center text-md font-bold text-purple-800">{data.name}</h3>
      <p className="text-sm text-gray-600">{data.hotelName} - {data.date}</p>
      <p className="text-xs italic text-gray-800">{data.review}</p>
    </div>
  )
}

export default Reviews