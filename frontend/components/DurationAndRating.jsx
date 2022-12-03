import { ratings } from "../utils/config";
import { classNames, convertHhmmssToMinutes } from "../utils/utils";

const DurationAndRating = ({ movieMeta, textCenter = false }) => {
  const { movie_duration, rating } = movieMeta;
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
        {hours} HRS {minutes} MIN | {ratings.find((r) => r.id === rating)?.name}
      </div>
    </div>
  );
};

export default DurationAndRating;
