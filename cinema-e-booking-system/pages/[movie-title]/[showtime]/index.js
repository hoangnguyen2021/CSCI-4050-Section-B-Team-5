import TopNavigation from "../../../components/TopNavigation";
import LargeMovieTitle from "../../../components/LargeMovieTitle";
import STMovieInfo from "../../../components/STMovieInfo";
import RoundedImageView from "../../../components/RoundedImageView";
import ShowtimeAttributes from "../../../components/ShowtimeAttributes";
import DateTime from "../../../components/DateTime";
import SeatRow from "../../../components/SeatRow";

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
  const { title, durationInMin, rating, posterUrl } = movieMeta;
  const { attributes, date, showtime } = showtimeDetails;

  return (
    <div className="bg-background">
      <div className="relative">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-woman-king-1663170483.png"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-background opacity-70"
        />
        {/* Navigation */}
        <header className="relative z-10">
          <nav aria-label="Top">
            {/* Top navigation */}
            <TopNavigation />
          </nav>
        </header>

        <div className="relative flex items-center justify-between mx-auto max-w-7xl py-10 px-6">
          <div className="flex gap-x-10 items-center">
            <RoundedImageView src={posterUrl} />
            <div className="flex flex-col gap-y-3">
              <div>
                <LargeMovieTitle title={title} />
                <STMovieInfo durationInMin={durationInMin} rating={rating} />
              </div>
              <ShowtimeAttributes attributes={attributes} />
            </div>
          </div>
          <DateTime date={date} time={showtime} />
        </div>

        <div className="relative">
          <p className="text-3xl font-semibold text-center py-8">SCREEN</p>
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
