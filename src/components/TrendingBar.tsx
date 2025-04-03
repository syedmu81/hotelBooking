import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import BestReviewsCard from "./BestReviewsCard"

const TrendingBar = () => {
  return (
    <div className="flex w-full justify-center mt-5">
    <div style={{width: "98%"}} className="min-h-50 max-h-50 border-black border-1 rounded">
      <h1 className="ml-8">Some of our Best Responses</h1>
      <div className="flex justify-center w-full">
      <Carousel style={{width: "85%"}}>
  <CarouselContent className="-ml-1 -p-2">
    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 h-40"><BestReviewsCard /></CarouselItem>
    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3"><BestReviewsCard /></CarouselItem>
    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3"><BestReviewsCard /></CarouselItem>
    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3"><BestReviewsCard /></CarouselItem>
    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3"><BestReviewsCard /></CarouselItem>
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