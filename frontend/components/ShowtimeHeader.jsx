import RoundedImageView from "./RoundedImageView";
import LargeMovieTitle from "./LargeMovieTitle";
import STMovieInfo from "./STMovieInfo";

const ShowtimeHeader = ({ movieMeta }) => {
  const { title, durationInMin, rating, posterUrl } = movieMeta;

  return (
    <div className="flex gap-x-10">
      <RoundedImageView src={posterUrl} />
      <div className="flex flex-col gap-y-2">
        <LargeMovieTitle title={title} />
        <STMovieInfo durationInMin={durationInMin} rating={rating} />
      </div>
    </div>
  );
};

export default ShowtimeHeader;
