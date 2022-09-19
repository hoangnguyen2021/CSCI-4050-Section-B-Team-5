import MovieTitle from "./MovieTitle";
import MovieInfo from "./MovieInfo";
import LargeButton from "./LargeButton";

const MovieCard = ({
  imageSrc,
  title,
  durationInMin,
  rating,
  releasedDate,
}) => {
  return (
    <div className="group max-w-sm bg-transparent rounded-t-lg px-8 hover:bg-primary/50">
      <img className="" src={imageSrc} />
      <div className="flex flex-col pt-3 pb-10 gap-y-4">
        <MovieTitle title={title} />
        <MovieInfo
          durationInMin={durationInMin}
          rating={rating}
          releasedDate={releasedDate}
        />
        <LargeButton text="Book tickets" />
      </div>
    </div>
  );
};

export default MovieCard;
