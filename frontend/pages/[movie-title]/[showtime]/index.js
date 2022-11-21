import BackgroundOverlay from "../../../components/BackgroundOverlay";
import TopNavigation from "../../../components/TopNavigation";
import SeatRow from "../../../components/SeatRow";
import ScreenSvg from "../../../components/ScreenSvg";
import MovieBookingHeader from "../../../components/MovieBookingHeader";
import PillButton from "../../../components/PillButton";
import Link from "next/link";

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
  [
    { seat: "A1" },
    { seat: "A2" },
    null,
    { seat: "A3" },
    { seat: "A4" },
    { seat: "A5" },
    { seat: "A6" },
    { seat: "A7" },
    { seat: "A8" },
    { seat: "A9" },
    { seat: "A10" },
    { seat: "A11" },
    { seat: "A12" },
    null,
    { seat: "A13" },
    { seat: "A14" },
  ],
  [
    { seat: "B1" },
    { seat: "B2" },
    null,
    { seat: "B3" },
    { seat: "B4" },
    { seat: "B5" },
    { seat: "B6" },
    { seat: "B7" },
    { seat: "B8" },
    { seat: "B9" },
    { seat: "B10" },
    { seat: "B11" },
    { seat: "B12" },
    null,
    { seat: "B13" },
    { seat: "B14" },
  ],
  [
    { seat: "C1" },
    { seat: "C2" },
    null,
    { seat: "C3" },
    { seat: "C4" },
    { seat: "C5" },
    { seat: "C6" },
    { seat: "C7" },
    { seat: "C8" },
    { seat: "C9" },
    { seat: "C10" },
    { seat: "C11" },
    { seat: "C12" },
    null,
    { seat: "C13" },
    { seat: "C14" },
  ],
  [
    { seat: "D1" },
    { seat: "D2" },
    null,
    { seat: "D3" },
    { seat: "D4" },
    { seat: "D5" },
    { seat: "D6" },
    { seat: "D7" },
    { seat: "D8" },
    { seat: "D9" },
    { seat: "D10" },
    { seat: "D11" },
    { seat: "D12" },
    null,
    { seat: "D13" },
    { seat: "D14" },
  ],
  [
    { seat: "E1" },
    { seat: "E2" },
    null,
    { seat: "E3" },
    { seat: "E4" },
    { seat: "E5" },
    { seat: "E6" },
    { seat: "E7" },
    { seat: "E8" },
    { seat: "E9" },
    { seat: "E10" },
    { seat: "E11" },
    { seat: "E12" },
    null,
    { seat: "E13" },
    { seat: "E14" },
  ],
  [
    { seat: "F1" },
    { seat: "F2" },
    null,
    { seat: "F3" },
    { seat: "F4" },
    { seat: "F5" },
    { seat: "F6" },
    { seat: "F7" },
    { seat: "F8" },
    { seat: "F9" },
    { seat: "F10" },
    { seat: "F11" },
    { seat: "F12" },
    null,
    { seat: "F13" },
    { seat: "F14" },
  ],
  [
    { seat: "G1" },
    { seat: "G2" },
    null,
    { seat: "G3" },
    { seat: "G4" },
    { seat: "G5" },
    { seat: "G6" },
    { seat: "G7" },
    { seat: "G8" },
    { seat: "G9" },
    { seat: "G10" },
    { seat: "G11" },
    { seat: "G12" },
    null,
    { seat: "G13" },
    { seat: "G14" },
  ],
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

      <div className="relative min-h-screen">
        <BackgroundOverlay
          src="https://image.cnbcfm.com/api/v1/image/107120708-1663605936404-The_WOman_King_Cropped.jpg?v=1663672360&w=1920&h=1080"
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
            {seatMap.map((row) => (
              <SeatRow key={row[0].seat.substring(0, 1)} row={row} />
            ))}
          </div>
        </div>

        <div className="sticky bottom-0 flex justify-end items-center gap-x-4 bg-background bg-opacity-70 px-10 py-3">
          <div className="pl-10">
            <Link href="/1/1/ticket">
              <a>
                <PillButton text="Select tickets" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
