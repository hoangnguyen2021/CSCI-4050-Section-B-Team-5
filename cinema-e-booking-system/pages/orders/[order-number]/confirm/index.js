import { CheckIcon } from "@heroicons/react/20/solid";
import TopNavigation from "../../../../components/TopNavigation";
import Heading from "../../../../components/Heading";
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

      <div className="relative min-h-screen">
        <BackgroundOverlay
          src="https://spheracinema.com/sites/default/files/styles/large_image/public/38846132282_ec5acbfb55_o.jpg"
          opacity={70}
        />

        <div className="relative z-10 flex flex-col items-center gap-y-6">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100 mt-20">
            <CheckIcon
              className="h-12 w-12 text-green-600"
              aria-hidden="true"
            />
          </div>
          <Heading text="We received your order!" textCenter={true} />
          <div className="max-w-4xl py-5 px-6 text-lg font-normal text-on-primary text-center">
            <p>
              Your order{" "}
              <span className="text-blue-500 font-semibold hover:underline hover:underline-offset-2">
                #123456789
              </span>{" "}
              for{" "}
              <span className="text-primary font-semibold hover:underline hover:underline-offset-2">
                {movieMeta.title}
              </span>{" "}
              at{" "}
              <span className="text-primary font-semibold hover:underline hover:underline-offset-2">
                {showtimeDetails.showtime}
              </span>{" "}
              on{" "}
              <span className="text-primary font-semibold hover:underline hover:underline-offset-2">
                {showtimeDetails.date}
              </span>{" "}
              has been placed successfully!
            </p>
            <p>
              You will receive a confirmation email attached with your tickets
              and booking information shortly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
