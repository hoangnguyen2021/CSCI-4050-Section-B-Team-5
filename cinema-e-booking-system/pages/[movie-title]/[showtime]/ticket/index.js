import TopNavigation from "../../../../components/TopNavigation";
import MovieBookingHeader from "../../../../components/MovieBookingHeader";
import TicketPrompt from "../../../../components/TicketPrompt";
import TicketAddRemove from "../../../../components/TicketAddRemove";
import BackgroundOverlay from "../../../../components/BackgroundOverlay";

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

export default function SelectTicketsPage() {
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
        <div className="relative z-10 bg-primary bg-opacity-50">
          <div className="mx-auto max-w-7xl py-5 px-6">
            <MovieBookingHeader
              movieMeta={movieMeta}
              showtimeDetails={showtimeDetails}
            />
          </div>
        </div>

        <BackgroundOverlay
          src="https://www.hollywoodreporter.com/wp-content/uploads/2020/10/Movie-Theater_GettyImages-1151385882-1-1603655321.jpg?w=1296"
          opacity={70}
        />

        <div className="relative flex flex-col justify-center gap-y-4 mx-auto max-w-4xl min-h-screen px-6">
          <TicketPrompt value={2} />
          <TicketAddRemove type="Adult" ageRange="12-60" setPrice={16.39} />
          <TicketAddRemove type="Child" ageRange="2-12" setPrice={13.39} />
          <TicketAddRemove type="Adult" ageRange="60+" setPrice={14.89} />
        </div>
      </div>
    </div>
  );
}
