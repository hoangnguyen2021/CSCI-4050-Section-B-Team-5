import YoutubeView from "./YoutubeView";
import MovieTitle from "./MovieTitle";
import STMovieInfo from "./STMovieInfo";

const TrailerSection = ({ movieMeta }) => {
  const { title, durationInMin, rating, trailerUrl } = movieMeta;

  return (
    <div className="flex flex-col gap-y-10">
      <YoutubeView src={trailerUrl} />
      <div className="flex flex-col pt-3 pb-10 gap-y-2">
        <MovieTitle title={title} />
        <STMovieInfo
          durationInMin={durationInMin}
          rating={rating}
          textCenter={true}
        />
      </div>
    </div>
  );
};

export default TrailerSection;
