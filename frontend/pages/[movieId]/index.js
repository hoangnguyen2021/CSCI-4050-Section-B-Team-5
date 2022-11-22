import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useFetch } from "../../hooks/useFetch";
import BackgroundOverlay from "../../components/BackgroundOverlay";
import ShowtimeSection from "../../components/ShowtimeSection";
import TopNavigation from "../../components/TopNavigation";
import TrailerSection from "../../components/TrailerSection";
import { ratings } from "../../utils/config";
import { convertHhmmssToMinutes } from "../../utils/utils";

const movieMeta = {
  title: "",
  durationInMin: 0,
  rating: "",
  posterUrl:
    "",
  trailerUrl: "",
};

const ShowtimePage = () => {
  const [movie, setMovie] = useState(movieMeta);
  const { get } = useFetch();
  const router = useRouter();
  const { movieId } = router.query;

  useEffect(() => {
    if (movieId) {
      getMovie();
    }
  }, [movieId]);

  const getMovie = async () => {
    try {
      const response = await get("api/movie/get_movie_by_id", {
        params: { id: movieId }
      });
      const responseData = response.data;
      if (responseData) {
        const movie = {
          title: responseData.movie_title,
          durationInMin: convertHhmmssToMinutes(responseData.movie_duration),
          rating: ratings.find(r => r.id === responseData.rating)?.name,
          posterUrl: responseData.trailer_pic_url,
          trailerUrl: responseData.trailer_video_url,
        };
        setMovie(movie);
        console.log(movie);
      }
    } catch (e) {
      toast.error("Failed to get movie!");
    }
  };

  return (
    <div className="bg-background">
      <div className="relative">
        <BackgroundOverlay
          src="https://www.siff.net/images/CINEMA/Venues/OPS_Uptown_Thumbnail_1600x900.jpg"
          opacity={70}
        />
        {/* Navigation */}
        <header className="relative z-10">
          <nav aria-label="Top">
            {/* Top navigation */}
            <TopNavigation />
          </nav>
        </header>

        <div className="relative z-10 mx-auto max-w-3xl py-10 px-6 text-center">
          <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">
            Showtimes
          </h1>
        </div>
      </div>

      <div className="relative min-h-screen">
        <BackgroundOverlay
          src="https://image.cnbcfm.com/api/v1/image/107120708-1663605936404-The_WOman_King_Cropped.jpg?v=1663672360&w=1920&h=1080"
          opacity={70}
        />
        <div className="relative grid grid-cols-12 gap-x-28 max-w-7xl maxh-screen h-screen mx-auto py-10">
          <section className="col-span-5">
            <TrailerSection movieMeta={movie} />
          </section>
          <section className="col-span-7">
            <ShowtimeSection movieMeta={movie} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShowtimePage;
