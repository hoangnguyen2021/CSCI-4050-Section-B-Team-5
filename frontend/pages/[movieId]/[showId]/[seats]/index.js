import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useFetch } from "../../../../hooks/useFetch";
import TopNavigation from "../../../../components/TopNavigation";
import MovieBookingHeader from "../../../../components/MovieBookingHeader";
import TicketPrompt from "../../../../components/TicketPrompt";
import TicketAddRemove from "../../../../components/TicketAddRemove";
import BackgroundOverlay from "../../../../components/BackgroundOverlay";
import PillButton from "../../../../components/PillButton";
import { getHhmmFromHhmmss } from "../../../../utils/utils";
import { ticketTypes } from "../../../../utils/config";

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

const showtimeInit = {
  id: 0,
  show_date: "2000-01-01",
  booked_seats:
    "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  show_id: 0,
};

const SelectTicketsPage = () => {
  const [movieMeta, setMovieMeta] = useState(movieMetaInit);
  const [showtime, setShowtime] = useState(showtimeInit);
  const [totalSeats, setTotalSeats] = useState(0);
  const [availableSeats, setAvailableSeats] = useState(0);
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [senior, setSenior] = useState(0);
  const quantities = [adult, child, senior];
  const setQuantities = [setAdult, setChild, setSenior];
  const { get } = useFetch();
  const router = useRouter();
  const { movieId, showId, seats } = router.query;

  useEffect(() => {
    if (movieId && showId && seats) {
      getMovie();
      getShowtime();
      const s = seats.split("").filter((s) => s === "1").length;
      setTotalSeats(s);
      setAvailableSeats(s);
    }
  }, [movieId, showId, seats]);

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

  const getShowtime = async () => {
    try {
      const response = await get("api/show/getshowtimes", {
        params: { movie_id: movieId },
      });
      const responseData = response.data;
      if (responseData) {
        setShowtime(
          responseData.find((showtime) => showtime.id.toString() === showId)
        );
        console.log(responseData);
      }
    } catch (e) {
      toast.error("Failed to get showtime!");
    }
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

        <div className="relative z-10 bg-primary bg-opacity-50">
          <div className="mx-auto max-w-7xl py-5 px-6">
            <MovieBookingHeader
              movieMeta={movieMeta}
              startTime={getHhmmFromHhmmss(showtime.start_time)}
            />
          </div>
        </div>

        <div className="relative flex flex-col justify-center my-10 gap-y-4 mx-auto max-w-4xl px-6">
          <TicketPrompt value={availableSeats} />
          {ticketTypes.map((ticketType, i) =>
            <TicketAddRemove
              ticketType={ticketType}
              quantity={quantities[i]}
              plusDisabled={availableSeats === 0}
              minusDisabled={availableSeats >= totalSeats || quantities[i] <= 0}
              onMinus={() => {
                setQuantities[i]((quantity) => quantity - 1);
                setAvailableSeats((availableSeats) => availableSeats + 1);
              }}
              onPlus={() => {
                setQuantities[i]((quantity) => quantity + 1);
                setAvailableSeats((availableSeats) => availableSeats - 1);
              }}
            />
          )}
        </div>
      </div>

      <div className="sticky bottom-0 flex justify-end items-center gap-x-4 bg-background px-10 py-3">
        <div className="pl-10">
          <Link
            href={{
              pathname: "/[movieId]/[showId]/[seats]/[ticketTypes]",
              query: {
                movieId: movieId,
                showId: showId,
                seats: seats,
                ticketTypes: `${adult}${child}${senior}`,
              },
            }}
          >
            <a>
              <PillButton text="Go to checkout" disabled={availableSeats > 0} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectTicketsPage;
