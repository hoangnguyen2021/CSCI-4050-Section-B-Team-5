import LargeMovieTitle from "./LargeMovieTitle";
import DurationAndRating from "./DurationAndRating";
import RoundedImageView from "./RoundedImageView";
import DateTime from "./DateTime";
import { getTodayString } from "../utils/utils";

const MovieBookingHeader = ({ movieMeta, startTime }) => {
  const { movie_title, trailer_pic_url } = movieMeta;

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-x-10 items-center">
        <RoundedImageView src={trailer_pic_url} />
        <div className="flex flex-col gap-y-3">
          <div>
            <LargeMovieTitle title={movie_title} />
            <DurationAndRating movieMeta={movieMeta} />
          </div>
        </div>
      </div>
      <DateTime date={getTodayString()} time={startTime} />
    </div>
  );
};

export default MovieBookingHeader;
