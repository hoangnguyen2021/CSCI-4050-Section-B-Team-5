import RoundedImageView from "./RoundedImageView";
import LargeMovieTitle from "./LargeMovieTitle";
import DuationRatingCategory from "./DurationRatingCategory";

const ShowtimeHeader = ({ movieMeta }) => {
  const { movie_title, trailer_pic_url } = movieMeta;

  return (
    <div className="flex gap-x-10">
      <RoundedImageView src={trailer_pic_url} />
      <div className="flex flex-col gap-y-2">
        <LargeMovieTitle title={movie_title} />
        <DuationRatingCategory movieMeta={movieMeta} />
      </div>
    </div>
  );
};

export default ShowtimeHeader;
