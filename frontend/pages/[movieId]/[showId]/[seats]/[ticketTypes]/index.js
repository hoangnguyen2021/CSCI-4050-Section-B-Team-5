import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useFetch } from "../../../../../hooks/useFetch";
import TopNavigation from "../../../../../components/TopNavigation";
import MovieBookingHeader from "../../../../../components/MovieBookingHeader";
import BackgroundOverlay from "../../../../../components/BackgroundOverlay";
import OrderSummary from "../../../../../components/OrderSummary";
import PaymentForm from "../../../../../components/PaymentForm";
import PillButton from "../../../../../components/PillButton";
import { getTodayYYYYMMDD, getHhmmFromHhmmss, calculatePrice } from "../../../../../utils/utils";
import CreditCard from "../../../../../components/CreditCard";

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

const showtimeInit = {
  id: 0,
  show_date: "2000-01-01",
  booked_seats:
    "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  show_id: 0,
};

const CheckoutPage = () => {
  const [movieMeta, setMovieMeta] = useState(movieMetaInit);
  const [showMeta, setShowMeta] = useState(showMetaInit);
  const [showtime, setShowtime] = useState(showtimeInit);
  const [cards, setCards] = useState([]);
  const [card, setCard] = useState();
  const [ticketCounts, setTicketCounts] = useState([]);
  const { get, post } = useFetch();
  const router = useRouter();
  const { movieId, showId, seats, ticketTypes } = router.query;
  const { total } = calculatePrice(ticketCounts);

  useEffect(() => {
    if (movieId && showId && seats && ticketCounts) {
      getMovie();
      getShowtime();
      getShow();
      getCards();
      setTicketCounts(ticketTypes.split(""));
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
    } catch (e) {
      toast.error("Cannot get show details!");
      console.error(e);
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

  const getCards = async () => {
    try {
      const response = await get("api/cards/get-card-info", {
        headers: {
          Authorization: "JWT " + localStorage.getItem("access"),
        },
      });
      const responseData = response.data;
      if (responseData) {
        setCards(responseData);
        console.log(responseData);
      }
    } catch (e) {
      toast.error("Failed to get cards!");
    }
  };

  const checkOut = async () => {
    try {
      const response = await post(
        "api/booking/checkout-and-bookseats",
        {
          id: showMeta.id,
          seats: seats,
          card: card,
          show_id: showId,
          total_price: total,
          adult: ticketCounts[0],
          child: ticketCounts[1],
          senior: ticketCounts[2]
        },
        {
          headers: {
            Authorization: "JWT " + localStorage.getItem("access"),
          },
        }
      );
      router.push("/orders/1/confirm");
      console.log(response.data);
    } catch (error) {
      toast.error("Cannot book tickets!");
      console.error(error);
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
          <section className="col-span-7 flex flex-col gap-y-3 my-10">
            <h2 className="text-2xl text-on-primary font-extrabold">
              Payment Method
            </h2>
            <PaymentForm />
            {cards.map((card) => (
              <CreditCard card={card} setCard={setCard} />
            ))}
          </section>
          <section className="col-span-5 my-10">
            <OrderSummary ticketCounts={ticketCounts} />
          </section>
        </div>
      </div>

      <div className="sticky bottom-0 flex justify-end items-center gap-x-4 bg-background px-10 py-3">
        <p className="text-on-primary text-lg font-semibold uppercase">TOTAL</p>
        <p className="text-on-primary text-2xl font-bold">${total.toFixed(2)}</p>
        <div className="pl-10">
          <PillButton text="Purchase" onClick={checkOut} />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
