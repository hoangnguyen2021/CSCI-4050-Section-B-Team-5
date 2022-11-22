import YoutubeView from "./YoutubeView";
import MovieTitle from "./MovieTitle";
import STMovieInfo from "./STMovieInfo";

const TrailerSection = ({ movieMeta }) => {
  const { movie_title, trailer_video_url } = movieMeta;

  return (
    <div className="flex flex-col gap-y-10">
      <YoutubeView src={trailer_video_url} />
      <div className="flex flex-col pt-3 pb-10 gap-y-2">
        <MovieTitle title={movie_title} />
        <STMovieInfo movieMeta={movieMeta} textCenter={true} long={true} />
      </div>
    </div>
  );
};

export default TrailerSection;
