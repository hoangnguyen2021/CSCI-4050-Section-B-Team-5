import { classNames, convertHhmmssToMinutes } from "../utils/utils";

const STMovieInfo = ({ movieMeta, textCenter = false, long = false }) => {
  const { movie_duration, rating, producer, director, movie_cast } = movieMeta;
  const durationInMin = convertHhmmssToMinutes(movie_duration);
  const hours = Math.floor(durationInMin / 60);
  const minutes = durationInMin % 60;

  return (
    <div className="space-y-3">
      <div
        className={classNames(
          textCenter ? "text-center" : "",
          "text-md font-light text-on-primary"
        )}
      >
        {hours} HRS {minutes} MIN | {rating}
      </div>
      {long && (
        <div className="space-y-1">
          <p className="text-on-primary text-md font-light">
            <span className="font-semibold">Producer: </span>
            <span>{producer}</span>
          </p>
          <p className="text-on-primary text-md font-light">
            <span className="font-semibold">Director: </span>
            <span>{director}</span>
          </p>
          <p className="text-on-primary text-md font-light">
            <span className="font-semibold">Cast: </span>
            <span>{movie_cast}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default STMovieInfo;
