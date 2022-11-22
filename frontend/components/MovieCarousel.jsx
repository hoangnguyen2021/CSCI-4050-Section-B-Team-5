import Carousel from "react-multi-carousel";
import MovieCard from "./MovieCard";
import Heading from "./Heading";
import CustomRightArrow from "./CustomRightArrow";
import CustomLeftArrow from "./CustomLeftArrow";
import Link from "next/link";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    paritialVisibilityGutter: 60,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 40,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const MovieCarousel = ({ label, movies, buttonText }) => {
  return (
    <div className="relative bg-background">
      {/* Decorative image and overlay */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <img
          src="https://www.thx.com/wp-content/uploads/2021/03/Nordisk-Film-Cinemas-inside-theatre-image.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-background opacity-50"
      />
      <div className="relative z-10 bg-background bg-opacity-30 backdrop-blur-sm backdrop-filter">
        <Heading text={label} />
        <Carousel
          partialVisbile
          responsive={responsive}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
        >
          {movies.map((movie) => (
            <MovieCard key={movie.key} movie={movie} buttonText={buttonText} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MovieCarousel;
