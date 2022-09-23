import BackgroundOverlay from "../../components/BackgroundOverlay";
import ShowtimeSection from "../../components/ShowtimeSection";
import TopNavigation from "../../components/TopNavigation";
import TrailerSection from "../../components/TrailerSection";

const movieMeta = {
  title: "The Woman King",
  durationInMin: 135,
  rating: "PG-13",
  posterUrl:
    "https://amc-theatres-res.cloudinary.com/image/upload/c_thumb,f_auto,fl_preserve_transparency,g_face,h_120,q_auto,r_max,w_120/e_trim/v1662739107/amc-cdn/production/2/movies/68200/68219/PosterDynamic/142758.jpg",
  trailerUrl: "https://www.youtube.com/embed/3RDaPV_rJ1Y",
};

export default function ShowtimePage() {
  return (
    <div className="bg-background">
      <div className="relative">
        <BackgroundOverlay
          src="https://www.siff.net/images/CINEMA/Venues/OPS_Uptown_Thumbnail_1600x900.jpg"
          opacity={70}
        />
        {/* Navigation */}
        <header className="relative z-10">
          <nav aria-label="Top">
            {/* Top navigation */}
            <TopNavigation />
          </nav>
        </header>

        <div className="relative z-10 mx-auto max-w-3xl py-10 px-6 text-center">
          <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">
            Showtimes
          </h1>
        </div>
      </div>

      <div className="relative">
        <BackgroundOverlay
          src="https://www.chicagocanvas.com/wp-content/uploads/2019/12/rob-laughter-WW1jsInXgwM-unsplash-scaled.jpg"
          opacity={70}
        />
        <div className="relative grid grid-cols-12 gap-x-28 max-w-7xl maxh-screen h-screen mx-auto py-10">
          <section className="col-span-5">
            <TrailerSection movieMeta={movieMeta} />
          </section>
          <section className="col-span-7">
            <ShowtimeSection movieMeta={movieMeta} />
          </section>
        </div>
      </div>
    </div>
  );
}
