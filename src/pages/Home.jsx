import CarouselWithContent from "../components/CarouselWithContent";
import RecommendedProducts from "../components/RecommendedProducts";
import BlogCard from "../components/BlogCard";
 
function Home () {

  return (
    <>
      <CarouselWithContent />
      <div className="flex justify-center">
        <RecommendedProducts />
        <BlogCard />
      </div>
      
    </>
  )
}

export default Home