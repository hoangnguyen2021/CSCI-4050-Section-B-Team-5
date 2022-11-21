import { classNames } from "../utils/utils";

const STMovieInfo = ({ durationInMin, rating, textCenter = false }) => {
  const hours = Math.floor(durationInMin / 60);
  const minutes = durationInMin % 60;

  return (
    <div
      className={classNames(
        textCenter ? "text-center" : "",
        "text-md font-light text-on-primary"
      )}
    >
      {hours} HRS {minutes} MIN | {rating}
    </div>
  );
};

export default STMovieInfo;
