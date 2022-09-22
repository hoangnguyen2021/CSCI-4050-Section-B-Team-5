import { classNames } from "../utils/utils";

const LargeMovieTitle = ({ title, textCenter = false }) => {
  return (
    <div
      className={classNames(
        textCenter ? "text-center" : "",
        "text-4xl font-extrabold text-on-primary"
      )}
    >
      {title}
    </div>
  );
};

export default LargeMovieTitle;
