import MovieTitle from "./MovieTitle";
import HPMovieInfo from "./HPMovieInfo";
import PillButton from "./PillButton";
import Link from "next/link";
import { ratings } from "../utils/config";
import { convertHhmmssToMinutes } from "../utils/utils";

const MovieCard = ({ movie, buttonText }) => {
  const { id, trailer_pic_url, movie_title, movie_duration, rating } = movie;

  return (
    <div className="group max-w-sm bg-transparent rounded-t-lg px-8 hover:bg-primary/50">
      <img className="" src={trailer_pic_url} />
      <div className="flex flex-col pt-3 pb-10 gap-y-4">
        <MovieTitle title={movie_title} />
        <HPMovieInfo
          durationInMin={convertHhmmssToMinutes(movie_duration)}
          rating={ratings.find((r) => r.id === rating)?.name}
          releasedDate={"Sep 16, 2022"}
        />
        <Link href={`/${id}`}>
          <a className="block">
            <PillButton text={buttonText} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
