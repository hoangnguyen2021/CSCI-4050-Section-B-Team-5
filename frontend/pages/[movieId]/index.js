import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useFetch } from "../../hooks/useFetch";
import BackgroundOverlay from "../../components/BackgroundOverlay";
import ShowtimeSection from "../../components/ShowtimeSection";
import TopNavigation from "../../components/TopNavigation";
import TrailerSection from "../../components/TrailerSection";
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

const ShowtimePage = () => {
  const [movieMeta, setMovieMeta] = useState(movieMetaInit);
  const [showtimeLL, setShowtimeLL] = useState([]);
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
        const list = Object.values(groupBy(responseData, "showroom_id"));
        setShowtimeLL(list);
        console.log(list);
      }
    } catch (e) {
      toast.error("Failed to get showtime!");
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
        <div className="relative grid grid-cols-12 gap-x-28 max-w-7xl mx-auto py-10">
          <section className="col-span-5">
            <TrailerSection movieMeta={movieMeta} />
          </section>
          <section className="col-span-7">
            <ShowtimeSection movieMeta={movieMeta} showtimeLL={showtimeLL} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShowtimePage;
