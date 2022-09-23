import LargeMovieTitle from "./LargeMovieTitle";
import STMovieInfo from "./STMovieInfo";
import RoundedImageView from "./RoundedImageView";
import ShowtimeAttributes from "./ShowtimeAttributes";
import DateTime from "./DateTime";

const MovieBookingHeader = ({ movieMeta, showtimeDetails }) => {
  const { title, durationInMin, rating, posterUrl } = movieMeta;
  const { attributes, date, showtime } = showtimeDetails;

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-x-10 items-center">
        <RoundedImageView src={posterUrl} />
        <div className="flex flex-col gap-y-3">
          <div>
            <LargeMovieTitle title={title} />
            <STMovieInfo durationInMin={durationInMin} rating={rating} />
          </div>
          <ShowtimeAttributes attributes={attributes} />
        </div>
      </div>
      <DateTime date={date} time={showtime} />
    </div>
  );
};

export default MovieBookingHeader;