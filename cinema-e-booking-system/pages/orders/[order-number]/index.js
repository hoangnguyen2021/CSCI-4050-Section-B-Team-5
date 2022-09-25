import TopNavigation from "../../../components/TopNavigation";
import MovieBookingHeader from "../../../components/MovieBookingHeader";
import BackgroundOverlay from "../../../components/BackgroundOverlay";
import OrderSummary from "../../../components/OrderSummary";
import PaymentForm from "../../../components/PaymentForm";
import LargeButton from "../../../components/LargeButton";

const movieMeta = {
  title: "The Woman King",
  durationInMin: 135,
  rating: "PG-13",
  posterUrl:
    "https://amc-theatres-res.cloudinary.com/image/upload/c_thumb,f_auto,fl_preserve_transparency,g_face,h_120,q_auto,r_max,w_120/e_trim/v1662739107/amc-cdn/production/2/movies/68200/68219/PosterDynamic/142758.jpg",
  trailerUrl: "https://www.youtube.com/embed/3RDaPV_rJ1Y",
};

const showtimeDetails = {
  format: "DOLBY CINEMA",
  attributes: [
    "AMC Signature Recliners",
    "Reserved Seating",
    "Closed Caption",
    "Audio Description",
  ],
  date: "Sep 20, 2022",
  showtime: "6:15 pm",
};

const tickets = [
  {
    name: "Adult",
    quantity: 2,
    unitPrice: 16.39,
    seats: ["E5", "E7"],
  },
  {
    name: "Child",
    quantity: 1,
    unitPrice: 14.39,
    seats: ["E6"],
  },
];

export default function SelectTicketsPage() {
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
              showtimeDetails={showtimeDetails}
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
        <p className="text-on-primary text-2xl font-bold">$50.39</p>
        <div className="pl-10">
          <LargeButton text="Purchase" />
        </div>
      </div>
    </div>
  );
}
