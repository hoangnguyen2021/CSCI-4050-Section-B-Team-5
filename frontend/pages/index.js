import { useEffect, useState } from "react";
import {
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { useFetch } from "../hooks/useFetch";
import "react-multi-carousel/lib/styles.css";
import TopNavigation from "../components/TopNavigation";
import MovieCarousel from "../components/MovieCarousel";
import BackgroundOverlay from "../components/BackgroundOverlay";
import Link from "next/link";
import { ratings } from "../utils/config";
import { convertHhmmssToMinutes } from "../utils/utils";

const footerNavigation = {
  shop: [
    { name: "Bags", href: "#" },
    { name: "Tees", href: "#" },
    { name: "Objects", href: "#" },
    { name: "Home Goods", href: "#" },
    { name: "Accessories", href: "#" },
  ],
  company: [
    { name: "Who we are", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Press", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy", href: "#" },
  ],
  account: [
    { name: "Manage Account", href: "#" },
    { name: "Returns & Exchanges", href: "#" },
    { name: "Redeem a Gift Card", href: "#" },
  ],
  connect: [
    { name: "Contact Us", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Pinterest", href: "#" },
  ],
};

const nowPlayingMovies = [
  {
    key: 1,
    title: "Pearl",
    durationInMin: 102,
    rating: "R",
    releasedDate: "Sep 16, 2022",
    posterSrc:
      "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1662137861/amc-cdn/production/2/movies/70600/70588/PosterDynamic/142476.jpg",
  },
  {
    key: 2,
    title: "Avatar (Re-Released 2022)",
    durationInMin: 165,
    rating: "PG-13",
    releasedDate: "Sep 23, 2022",
    posterSrc:
      "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1661270647/amc-cdn/production/2/movies/63900/63945/PosterDynamic/142040.jpg",
  },
  {
    key: 3,
    title: "Don't Worry Darling",
    durationInMin: 123,
    rating: "R",
    releasedDate: "Sep 23, 2022",
    posterSrc:
      "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1662495069/amc-cdn/production/2/movies/67500/67497/PosterDynamic/142599.jpg",
  },
  {
    key: 4,
    title: "The Women King",
    durationInMin: 135,
    rating: "PG-13",
    releasedDate: "Sep 16, 2022",
    posterSrc:
      "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1662739107/amc-cdn/production/2/movies/68200/68219/PosterDynamic/142758.jpg",
  },
  {
    key: 5,
    title: "Barbarian",
    durationInMin: 103,
    rating: "R",
    releasedDate: "Sep 9, 2022",
    posterSrc:
      "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1661543435/amc-cdn/production/2/movies/62300/62347/PosterDynamic/142136.jpg",
  },
  {
    key: 6,
    title: "Bullet Train",
    durationInMin: 126,
    rating: "R",
    releasedDate: "Sep 5, 2022",
    posterSrc:
      "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1654093399/amc-cdn/production/2/movies/66800/66765/PosterDynamic/138993.jpg",
  },
  {
    key: 7,
    title: "DC League of Super Pets",
    durationInMin: 105,
    rating: "PG",
    releasedDate: "Jul 29, 2022",
    posterSrc:
      "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1660671932/amc-cdn/production/2/movies/55700/55685/OnDemandPoster/141739.jpg",
  },
  {
    key: 8,
    title: "Top Gun: Maverick",
    durationInMin: 131,
    rating: "PG-13",
    releasedDate: "May 27, 2022",
    posterSrc:
      "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1653736847/amc-cdn/production/2/movies/67400/67369/Poster/Primary_BoxCover_800_1200.jpg",
  },
  {
    key: 9,
    title: "Minions: The Rise of Gru",
    durationInMin: 147,
    rating: "PG",
    releasedDate: "Jul 1, 2022",
    posterSrc:
      "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1661892402/amc-cdn/production/2/movies/49600/49599/OnDemandPoster/142316.jpg",
  },
  {
    key: 10,
    title: "See How They Run",
    durationInMin: 98,
    rating: "PG-13",
    releasedDate: "Sep 16, 2022",
    posterSrc:
      "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1662466631/amc-cdn/production/2/movies/70100/70149/PosterDynamic/142564.jpg",
  },
];
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
  const { get } = useFetch();

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const response = await get("api/movie/list");
      const responseData = response.data;
      if (responseData) {
        setNowPlayingMovies(responseData.map(movie => {
          return {
            key: movie.id,
            title: movie.movie_title,
            durationInMin: convertHhmmssToMinutes(movie.movie_duration),
            rating: ratings.find(r => r.id === movie.rating)?.name,
            releasedDate: "Sep 16, 2022",
            posterSrc: movie.trailer_pic_url,
          };
        }));
        console.log(responseData);
      }
    } catch (e) {
      toast.error("Failed to get movies!");
    }
  };

  return (
    <div className="bg-white">
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
                      <a href="#">
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
                    <a href="#" className="lg:hidden">
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

                    <div className="flex flex-1 items-center justify-end">
                      <a
                        href="search"
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

                      <div className="flex items-center lg:ml-8">
                        {/* Help */}
                        <a href="#" className="p-2 text-on-primary lg:hidden">
                          <span className="sr-only">Help</span>
                          <QuestionMarkCircleIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </a>
                        <a
                          href="#"
                          className="hidden text-sm font-medium text-on-primary lg:block"
                        >
                          Help
                        </a>

                        {/* Cart */}
                        <div className="ml-4 flow-root lg:ml-8">
                          <a
                            href="#"
                            className="group -m-2 flex items-center p-2"
                          >
                            <ShoppingBagIcon
                              className="h-6 w-6 flex-shrink-0 text-on-primary"
                              aria-hidden="true"
                            />
                            <span className="ml-2 text-sm font-medium text-on-primary">
                              0
                            </span>
                            <span className="sr-only">
                              items in cart, view bag
                            </span>
                          </a>
                        </div>
                      </div>
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
          <a
            href="#"
            className="mt-8 inline-block rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-on-secondary hover:bg-primary hover:text-on-primary"
          >
            Browse Movies
          </a>
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

      <footer aria-labelledby="footer-heading" className="bg-background">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                <div>
                  <h3 className="text-sm font-medium text-on-primary">Shop</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.shop.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-gray-300 hover:text-on-primary"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-on-primary">
                    Company
                  </h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-gray-300 hover:text-on-primary"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                <div>
                  <h3 className="text-sm font-medium text-on-primary">
                    Account
                  </h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.account.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-gray-300 hover:text-on-primary"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-on-primary">
                    Connect
                  </h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.connect.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-gray-300 hover:text-on-primary"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-12 md:mt-16 xl:mt-0">
              <h3 className="text-sm font-medium text-on-primary">
                Sign up for our newsletter
              </h3>
              <p className="mt-6 text-sm text-gray-300">
                The latest deals and savings, sent to your inbox weekly.
              </p>
              <form className="mt-2 flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  type="text"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 appearance-none rounded-md border border-white bg-white py-2 px-4 text-base text-on-secondary placeholder-gray-500 shadow-sm focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                />
                <div className="ml-4 flex-shrink-0">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-base font-medium text-on-primary shadow-sm hover:bg-primary-variant"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 py-10">
            <p className="text-sm text-gray-400">
              Copyright &copy; 2021 Your Company, Inc.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;