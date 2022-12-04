import LargeMovieTitle from "./LargeMovieTitle";
import DurationAndRating from "./DurationAndRating";
import RoundedImageView from "./RoundedImageView";
import ShowtimeAttributes from "./ShowtimeAttributes";
import DateTime from "./DateTime";

const MovieBookingHeader = ({ movieMeta, showtimeDetails }) => {
  const { movie_title, trailer_pic_url } = movieMeta;
  const { attributes, date, showtime } = showtimeDetails;

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-x-10 items-center">
        <RoundedImageView src={trailer_pic_url} />
        <div className="flex flex-col gap-y-3">
          <div>
            <LargeMovieTitle title={movie_title} />
            <DurationAndRating movieMeta={movieMeta} />
          </div>
          <ShowtimeAttributes attributes={attributes} />
        </div>
      </div>
      <DateTime date={date} time={showtime} />
    </div>
  );
};

export default MovieBookingHeader;
