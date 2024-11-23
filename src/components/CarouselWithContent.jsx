import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Img1 from "../assets/img/img1.jpg";
import Img2 from "../assets/img/img2.jpg";
import Img3 from "../assets/img/img3.jpg";
 
function CarouselWithContent() {
  return (
    <Carousel className="rounded-xl h-[600px]">
      {/* First Slide */}
      <div className="relative h-full w-full">
        <img
          src={Img1}
          alt="Cat grooming service"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Luxury Cat Grooming
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Treat your feline friend to our premium grooming services. 
              Our expert groomers understand that cats aren't just pets - 
              they're royalty. We provide stress-free grooming experiences 
              that will leave your cat feeling purr-fectly pampered.
            </Typography>
            <div className="flex justify-center gap-2">
              <Link to="/contact">
                <Button size="lg" color="white">
                  Contact us
                </Button>
              </Link>
              <Link to="/blog">
                <Button size="lg" color="white" variant="text">
                  Read our Blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Second Slide */}
      <div className="relative h-full w-full">
        <img
          src={Img2}
          alt="Premium cat products"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Premium Cat Products
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Discover our curated selection of premium cat supplies. 
              From organic catnip to ergonomic scratching posts, we offer 
              only the finest products that meet our high standards for 
              quality and cat satisfaction.
            </Typography>
            <div className="flex gap-2">
              <Link to="/contact">
                <Button size="lg" color="white">
                  Contact us
                </Button>
              </Link>
              <Link to="/blog">
                <Button size="lg" color="white" variant="text">
                  Cat Care Blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Third Slide */}
      <div className="relative h-full w-full">
        <img
          src={Img3}
          alt="Cat adoption services"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Find Your Purr-fect Match
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Looking to add a furry friend to your family? Our adoption 
              services help connect loving homes with cats in need. Each 
              cat comes with a complete health check, vaccinations, and 
              ongoing support from our expert team.
            </Typography>
            <div className="flex gap-2">
              <Link to="/blog">
                <Button size="lg" color="white">
                  Read Our Blog
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" color="white" variant="text">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default CarouselWithContent;