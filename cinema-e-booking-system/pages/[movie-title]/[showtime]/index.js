import BackgroundOverlay from "../../../components/BackgroundOverlay";
import TopNavigation from "../../../components/TopNavigation";
import SeatRow from "../../../components/SeatRow";
import ScreenSvg from "../../../components/ScreenSvg";
import MovieBookingHeader from "../../../components/MovieBookingHeader";

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

const seatMap = [
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
];

export default function SelectSeatsPage() {
  return (
    <div className="bg-background">
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
        <div className="relative bg-primary bg-opacity-50">
          <div className="mx-auto max-w-7xl py-5 px-6">
            <MovieBookingHeader
              movieMeta={movieMeta}
              showtimeDetails={showtimeDetails}
            />
          </div>
        </div>

        <div className="relative my-10">
          <div className="absolute inset-0 max-w-4xl mx-auto">
            <ScreenSvg />
          </div>
          <h2 className="relative text-3xl font-semibold text-center py-8">
            SCREEN
          </h2>
        </div>
        <div className="relative flex flex-col gap-y-2 items-center max-w-7xl mx-auto pb-40 px-6">
          {seatMap.map((row) => (
            <SeatRow row={row} />
          ))}
        </div>
      </div>
    </div>
  );
}
