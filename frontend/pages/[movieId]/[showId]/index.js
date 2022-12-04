import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import toast from "react-hot-toast";
import { useFetch } from "../../../hooks/useFetch";
import BackgroundOverlay from "../../../components/BackgroundOverlay";
import TopNavigation from "../../../components/TopNavigation";
import SeatRow from "../../../components/SeatRow";
import ScreenSvg from "../../../components/ScreenSvg";
import MovieBookingHeader from "../../../components/MovieBookingHeader";
import PillButton from "../../../components/PillButton";
import { getTodayYYYYMMDD, getHhmmFromHhmmss } from "../../../utils/utils";
import { rowNames } from "../../../utils/config";

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
  updated_at: "",
};

const showMetaInit = {
  id: 0,
  show_date: "2000-01-01",
  booked_seats:
    "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  show_id: 0,
};

const selectedInit =
  "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";

const ShowPage = () => {
  const [movieMeta, setMovieMeta] = useState(movieMetaInit);
  const [showMeta, setShowMeta] = useState(showMetaInit);
  const [showtimes, setShowtimes] = useState([]);
  const [selected, setSelected] = useState(selectedInit);
  const { get } = useFetch();
  const router = useRouter();
  const { movieId, showId } = router.query;

  useEffect(() => {
    if (movieId && showId) {
      getMovie();
      getShow();
      getShowtime();
    }
  }, [movieId, showId]);

  const getMovie = async () => {
    try {
      const response = await get("api/movie/get_movie_by_id", {
        params: { id: movieId },
      });
      const responseData = response.data;
      if (responseData) {
        setMovieMeta(responseData);
        console.log(responseData);
      }
    } catch (e) {
      toast.error("Failed to get movie!");
    }
  };

  const getShow = async () => {
    try {
      const response = await get("api/bookedseats/getbookedtickets", {
        params: { show_id: showId, show_date: getTodayYYYYMMDD() },
        headers: { Authorization: "JWT " + localStorage.getItem("access") },
      });
      const responseData = response.data;
      if (responseData) {
        setShowMeta(responseData);
        console.log(responseData);
      }
    } catch (error) {
      toast.error("Cannot get show details!");
      console.error(error);
    }
  };

  const getShowtime = async () => {
    try {
      const response = await get("api/show/getshowtimes", {
        params: { movie_id: movieId }
      });
      const responseData = response.data;
      if (responseData) {
        setShowtimes(responseData);
        console.log(responseData);
      }
    } catch (e) {
      toast.error("Failed to get showtimes!");
    }
  };

  const toggleSelected = (index) => {
    const replacement = selected.charAt(index) === "0" ? "1" : "0";
    setSelected(selected => selected.substring(0, index) + replacement + selected.substring(index + 1));
  };

  return (
    <div className="bg-background">
      {/* Navigation */}
      <header className="relative z-10">
        <nav aria-label="Top">
          {/* Top navigation */}
          <TopNavigation />
        </nav>
      </header>

      <div className="relative min-h-screen">
        <BackgroundOverlay
          src="https://image.cnbcfm.com/api/v1/image/107120708-1663605936404-The_WOman_King_Cropped.jpg?v=1663672360&w=1920&h=1080"
          opacity={70}
        />
        <div className="relative bg-primary bg-opacity-50">
          <div className="mx-auto max-w-7xl py-5 px-6">
            <MovieBookingHeader
              movieMeta={movieMeta}
              startTime={getHhmmFromHhmmss(showtimes.find(showtime => showtime.id.toString() === showId)?.start_time)}
            />
          </div>
        </div>

        <div className="relative py-20 mx-auto">
          <div className="relative mb-20">
            <div className="absolute inset-0 max-w-4xl mx-auto">
              <ScreenSvg />
            </div>
            <h2 className="relative text-3xl font-semibold text-center py-8">
              SCREEN
            </h2>
          </div>
          <div className="relative flex flex-col gap-y-2 items-center max-w-7xl mx-auto px-6">
            {showMeta.booked_seats.match(/.{1,10}/g).map((row, i) => (
              <SeatRow
                key={i}
                row={row}
                rowName={rowNames[i]}
                selected={selected.match(/.{1,10}/g)[i]}
                toggleSelected={toggleSelected}
              />
            ))}
          </div>
        </div>

        <div className="sticky bottom-0 flex justify-end items-center gap-x-4 bg-background bg-opacity-70 px-10 py-3">
          <div className="pl-10">
            <Link href={{
              pathname: "/[movieId]/[showId]/[seats]",
              query: { movieId: movieId, showId: showId, seats: selected },
            }}>
              <a>
                <PillButton text="Select tickets" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPage;
