import { ratings } from "../utils/config";
import { classNames, convertHhmmssToMinutes } from "../utils/utils";

const DuationRatingCategory = ({ movieMeta, textCenter = false }) => {
  const { movie_duration, rating, movie_category } = movieMeta;
  const durationInMin = convertHhmmssToMinutes(movie_duration);
  const hours = Math.floor(durationInMin / 60);
  const minutes = durationInMin % 60;

  return (
    <div
      className={classNames(textCenter ? "mx-auto" : "", "space-x-2 space-y-3")}
    >
      <span className="text-md font-light text-on-primary">
        {hours} HRS {minutes} MIN
      </span>
      <span>|</span>
      <span className="text-md font-light text-on-primary">
        {ratings.find((r) => r.id === rating)?.name}
      </span>
      <span>|</span>
      <span className="text-md font-light text-on-primary">
        {movie_category}
      </span>
    </div>
  );
};

export default DuationRatingCategory;
