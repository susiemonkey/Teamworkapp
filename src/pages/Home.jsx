import CarouselWithContent from "../components/CarouselWithContent";
import RecommendedProducts from "../components/RecommendedProducts";
 
function Home () {

  return (
    <>
      <CarouselWithContent />
      <div className="flex justify-center">
        <RecommendedProducts />
        {/* <BlogCard /> */}
      </div>
      
    </>
  )
}

export default Home