import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useFetch } from "../../hooks/useFetch";
import BackgroundOverlay from "../../components/BackgroundOverlay";
import ShowtimeSection from "../../components/ShowtimeSection";
import TopNavigation from "../../components/TopNavigation";
import TrailerSection from "../../components/TrailerSection";
import CrewAndSynopsis from "../../components/CrewAndSynopsis";
import { groupBy } from "../../utils/utils";

const movieMetaInit = {
  id: 0,
  movie_title: "",
  movie_category: "",
  movie_cast: "",
  director: "",
  producer: "",
  synopsis: "",
  trailer_pic_url: "",
  trailer_video_url: "",
  rating: 0,
  is_active: false,
  movie_duration: "",
  created_at: "",
  updated_at: ""
};

const MoviePage = () => {
  const [movieMeta, setMovieMeta] = useState(movieMetaInit);
  const [showLL, setShowLL] = useState([]);
  const { get } = useFetch();
  const router = useRouter();
  const { movieId } = router.query;

  useEffect(() => {
    if (movieId) {
      getMovie();
      getShowtime();
    }
  }, [movieId]);

  const getMovie = async () => {
    try {
      const response = await get("api/movie/get_movie_by_id", {
        params: { id: movieId }
      });
      const responseData = response.data;
      if (responseData) {
        setMovieMeta(responseData);
        console.log(movieMeta);
      }
    } catch (e) {
      toast.error("Failed to get movie!");
    }
  };

  const getShowtime = async () => {
    try {
      const response = await get("api/show/getshowtimes", {
        params: { movie_id: movieId }
      });
      const responseData = response.data;
      if (responseData) {
        const showLList = Object.values(groupBy(responseData, "showroom_id"));
        setShowLL(showLList);
        console.log(showLList);
      }
    } catch (e) {
      toast.error("Failed to get showtime!");
    }
  };

  return (
    <div className="bg-background">
      <div className="relative">
        <BackgroundOverlay
          src="https://www.gannett-cdn.com/-mm-/7fcb1b07090f1189a43fd757f29cb0dedc1223ab/c=0-23-2000-1153/local/-/media/2017/06/27/Kitsap/Kitsap/636341612816801482-Seefilm.jpg?width=3200&height=1680&fit=crop"
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

      <div className="relative">
        <BackgroundOverlay
          src="https://cdn.celluloidjunkie.com/wp-content/uploads/2019/02/14133416/ICE-by-CGR-Auditorium-Bohemian-Rhapsody.jpg"
          opacity={70}
        />
        <div className="relative grid grid-cols-12 gap-x-28 max-w-7xl mx-auto py-10">
          <section className="col-span-5">
            <TrailerSection movieMeta={movieMeta} />
          </section>
          <section className="col-span-7">
            <ShowtimeSection movieMeta={movieMeta} showLL={showLL} />
          </section>
        </div>
      </div>
      <div className="bg-background">
        <div className="max-w-7xl mx-auto py-10 space-y-3">
          <CrewAndSynopsis movieMeta={movieMeta} />
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
