import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useFetch } from "../hooks/useFetch";
import "react-multi-carousel/lib/styles.css";
import TopNavigation from "../components/TopNavigation";
import MovieCarousel from "../components/MovieCarousel";
import BackgroundOverlay from "../components/BackgroundOverlay";
import moment from "moment";

const comingSoonMovies = [
  {
    key: 1,
    title: "Mobile Suit Gundam Cucuruz Doan's Island",
    durationInMin: 108,
    rating: "NR",
    releasedDate: "Sep 27, 2022",
    posterSrc:
      "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1662748719/amc-cdn/production/2/movies/70600/70648/PosterDynamic/142800.jpg",
  },
  {
    key: 2,
    title: "Smile: Early Access",
    durationInMin: 115,
    rating: "R",
    releasedDate: "Sep 27, 2022",
    posterSrc:
      "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1662579454/amc-cdn/production/2/movies/71000/71036/PosterDynamic/142632.jpg",
  },
  {
    key: 3,
    title: "Brandi Carlile: In The Canyon Haze",
    durationInMin: 75,
    rating: "R",
    releasedDate: "Sep 28, 2022",
    posterSrc:
      "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1663943049/amc-cdn/production/2/movies/71200/71202/PosterDynamic/143421.jpg",
  },
  {
    key: 4,
    title: "Bros",
    durationInMin: 115,
    rating: "R",
    releasedDate: "Sep 30, 2022",
    posterSrc:
      "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1652888742/amc-cdn/production/2/movies/61600/61649/PosterDynamic/138588.jpg",
  },
  {
    key: 5,
    title: "Smile",
    durationInMin: 115,
    rating: "R",
    releasedDate: "Sep 30, 2022",
    posterSrc:
      "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1660685083/amc-cdn/production/2/movies/70000/69989/PosterDynamic/141743.jpg",
  },
  {
    key: 6,
    title: "The Good House",
    durationInMin: 103,
    rating: "R",
    releasedDate: "Sep 30, 2022",
    posterSrc:
      "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1663864208/amc-cdn/production/2/movies/70200/70165/PosterDynamic/143364.jpg",
  },
  {
    key: 7,
    title: "Amsterdam",
    durationInMin: 134,
    rating: "R",
    releasedDate: "Oct 7, 2022",
    posterSrc:
      "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1663975835/amc-cdn/production/2/movies/56500/56463/PosterDynamic/143448.jpg",
  },
  {
    key: 8,
    title: "Lyle,Lyle,Crocodile",
    durationInMin: 106,
    rating: "PG",
    releasedDate: "Oct 7, 2022",
    posterSrc:
      "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1661435602/amc-cdn/production/2/movies/66600/66623/PosterDynamic/142117.jpg",
  },
  {
    key: 9,
    title: "TAR",
    durationInMin: 158,
    rating: "R",
    releasedDate: "Oct 7, 2022",
    posterSrc:
      "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1663975937/amc-cdn/production/2/movies/68400/68392/PosterDynamic/143450.jpg",
  },
  {
    key: 10,
    title: "Terrifier 2",
    durationInMin: 158,
    rating: "R",
    releasedDate: "Oct 7, 2022",
    posterSrc:
      "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1663251888/amc-cdn/production/2/movies/70900/70906/PosterDynamic/143043.jpg",
  },
];

const Homepage = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [comingSoonMovies, setComingSoonMovies] = useState([]);
  const { get } = useFetch();

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    try {
      const response = await get("api/movie/list");
      const responseData = response.data;
      if (responseData) {
        setNowPlayingMovies(responseData.filter(m => moment(m.release_date).isBefore(moment())));
        setComingSoonMovies(responseData.filter(m => moment(m.release_date).isAfter(moment())));
        console.log(responseData);
      }
    } catch (e) {
      toast.error("Failed to get movies!");
    }
  };

  return (
    <div className="bg-background">
      {/* Hero section */}
      <div className="relative bg-background">
        <BackgroundOverlay
          src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/01/The-Best-Movie-Franchises-To-Binge-Watch.jpg"
          opacity={50}
        />

        {/* Navigation */}
        <header className="relative z-10">
          <nav aria-label="Top">
            {/* Top navigation */}
            <TopNavigation />

            {/* Secondary navigation */}
            <div className="bg-background bg-opacity-30 backdrop-blur-md backdrop-filter">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div>
                  <div className="flex h-16 items-center justify-between">
                    {/* Logo (lg+) */}
                    <div className="hidden lg:flex lg:flex-1 lg:items-center">
                      <Link href="#">
                        <a>
                          <span className="sr-only">Bulldog Cinema</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
                            />
                          </svg>
                        </a>
                      </Link>
                    </div>

                    <div className="flex justify-evenly space-x-10">
                      <Link href="#featured">
                        <h2 className="text-base font-normal text-on-primary cursor-pointer">
                          Featured
                        </h2>
                      </Link>
                      <Link href="#coming-soon">
                        <h2 className="text-base font-normal text-on-primary cursor-pointer">
                          Coming Soon
                        </h2>
                      </Link>
                    </div>

                    {/* Logo (lg-) */}
                    <Link href="#">
                      <a className="lg:hidden">
                        <span className="sr-only">Your Company</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-8 h-8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
                          />
                        </svg>
                      </a>
                    </Link>

                    <div className="flex flex-1 items-center justify-end">
                      <Link href="/search">
                        <a
                          className="hidden text-sm font-medium text-on-primary lg:block"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <div className="relative mx-auto flex max-w-3xl flex-col items-center py-32 px-6 text-center sm:py-64 lg:px-0">
          <h1 className="text-6xl font-bold tracking-tight lg:text-8xl">
            <span className="text-primary">Bulldog</span>
            <span> </span>
            <span className="text-on-primary">Cinema</span>
          </h1>
          <p className="mt-4 text-xl text-on-primary">
            Browse through hundreds of spectacular movies.
          </p>
          <Link href="/search">
            <a
              className="mt-8 inline-block rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-on-secondary hover:bg-primary hover:text-on-primary"
            >
              Browse Movies
            </a>
          </Link>

        </div>
      </div>

      <main>
        <section id="featured">
          <MovieCarousel
            label="Featured"
            movies={nowPlayingMovies}
            buttonText="Book Tickets"
          />
        </section>

        <section id="coming-soon">
          <MovieCarousel
            label="Coming Soon"
            movies={comingSoonMovies}
            buttonText="Advance Tickets"
          />
        </section>
      </main>
    </div>
  );
}

export default Homepage;
