import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useFetch } from "../../../../../hooks/useFetch";
import TopNavigation from "../../../../../components/TopNavigation";
import MovieBookingHeader from "../../../../../components/MovieBookingHeader";
import BackgroundOverlay from "../../../../../components/BackgroundOverlay";
import OrderSummary from "../../../../../components/OrderSummary";
import PaymentForm from "../../../../../components/PaymentForm";
import PillButton from "../../../../../components/PillButton";
import { getHhmmFromHhmmss, calculatePrice } from "../../../../../utils/utils";

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

const CheckoutPage = () => {
  const [movieMeta, setMovieMeta] = useState(movieMetaInit);
  const [showtime, setShowtime] = useState(showtimeInit);
  const [tickets, setTickets] = useState([]);
  const { get } = useFetch();
  const router = useRouter();
  const { movieId, showId, seats, ticketTypes } = router.query;
  const { total } = calculatePrice(tickets);

  useEffect(() => {
    if (movieId && showId && seats && tickets) {
      getMovie();
      getShowtime();
      setTickets(ticketTypes.split(""));
    }
  }, [movieId, showId, seats, ticketTypes]);

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
    <div className="relative bg-background">
      {/* Navigation */}
      <header className="relative z-10">
        <nav aria-label="Top">
          {/* Top navigation */}
          <TopNavigation />
        </nav>
      </header>

      <div className="relative">
        <BackgroundOverlay
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-woman-king-1663170483.png"
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

        <div className="relative grid grid-cols-12 max-w-7xl mx-auto min-h-screen px-6">
          <section className="col-span-7 my-10">
            <PaymentForm />
          </section>
          <section className="col-span-5 my-10">
            <OrderSummary tickets={tickets} />
          </section>
        </div>
      </div>

      <div className="sticky bottom-0 flex justify-end items-center gap-x-4 bg-background px-10 py-3">
        <p className="text-on-primary text-lg font-semibold uppercase">TOTAL</p>
        <p className="text-on-primary text-2xl font-bold">${total.toFixed(2)}</p>
        <div className="pl-10">
          <Link href="/orders/1/confirm">
            <a>
              <PillButton text="Purchase" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
