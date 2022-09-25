import MovieTitle from "./MovieTitle";
import HPMovieInfo from "./HPMovieInfo";
import LargeButton from "./LargeButton";
import Image from "next/image";

const MovieCard = ({ movie, buttonText }) => {
  const { posterSrc, title, durationInMin, rating, releasedDate } = movie;

  return (
    <div className="group max-w-sm bg-transparent rounded-t-lg px-8 hover:bg-primary/50">
      <Image className="" src={posterSrc} />
      <div className="flex flex-col pt-3 pb-10 gap-y-4">
        <MovieTitle title={title} />
        <HPMovieInfo
          durationInMin={durationInMin}
          rating={rating}
          releasedDate={releasedDate}
        />
        <LargeButton text={buttonText} />
      </div>
    </div>
  );
};

export default MovieCard;
