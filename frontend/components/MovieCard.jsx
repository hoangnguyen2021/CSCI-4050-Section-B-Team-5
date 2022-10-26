import MovieTitle from "./MovieTitle";
import HPMovieInfo from "./HPMovieInfo";
import PillButton from "./PillButton";
import Link from "next/link";

const MovieCard = ({ movie, buttonText }) => {
  const { posterSrc, title, durationInMin, rating, releasedDate } = movie;

  return (
    <div className="group max-w-sm bg-transparent rounded-t-lg px-8 hover:bg-primary/50">
      <img className="" src={posterSrc} />
      <div className="flex flex-col pt-3 pb-10 gap-y-4">
        <MovieTitle title={title} />
        <HPMovieInfo
          durationInMin={durationInMin}
          rating={rating}
          releasedDate={releasedDate}
        />
        <Link href="/1">
          <a className="block">
            <PillButton text={buttonText} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
