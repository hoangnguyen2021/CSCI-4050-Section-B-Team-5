import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import AdminPortalNav from "../../components/AdminPortalNav";
import BackgroundOverlay from "../../components/BackgroundOverlay";

const navs = [
  { id: 0, text: "Home", href: "/" },
  { id: 1, text: "Manage Users", href: "/manageUsers" },
  { id: 2, text: "Manage Movies", href: "/manageMovies" },
  { id: 3, text: "Add Movie", href: "/movie-form" },
  { id: 4, text: "Promotions", href: "/promotions" },
];

const ratings = [
  { id: 0, name: "G" },
  { id: 1, name: "PG" },
  { id: 2, name: "PG-13" },
  { id: 3, name: "R" },
  { id: 4, name: "NC-17" },
];

const ManageMoviesPage = () => {
  const [movies, setMovies] = useState([]);

  const { get } = useFetch();

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const response = await get("api/movie/list");
      const responseData = response.data;
      if (responseData) {
        setMovies(responseData);
        console.log(responseData);
      }
    } catch (e) {
      toast.error("Failed to get movies!");
    }
  };

  return (
    <div className="bg-background">
      <AdminPortalNav navs={navs} />
      <div className="relative min-h-screen">
        <BackgroundOverlay
          src="https://wallpaper.dog/large/20493433.jpg"
          opacity={70}
        />
        <div className="relative flex justify-center items-center py-20">
          <div className="basis-5/6 flex flex-col items-center bg-background-variant rounded-lg shadow-md px-8 py-10">
            <form className="w-full flex flex-col gap-y-3">
              <h3 className="text-xl font-semibold text-center">Manage Movies</h3>
              <table className="table-auto border-collapse border border-slate-500">
                <thead>
                  <tr>
                    <th className="border border-slate-600">id</th>
                    <th className="border border-slate-600">Title</th>
                    <th className="border border-slate-600">Category</th>
                    <th className="border border-slate-600">Rating</th>
                    <th className="border border-slate-600">Duration</th>
                    <th className="border border-slate-600">Director</th>
                    <th className="border border-slate-600">Producer</th>
                    <th className="border border-slate-600">Cast</th>
                    <th className="border border-slate-600">Synopsis</th>
                  </tr>
                </thead>
                <tbody>
                  {movies && movies.map(movie => {
                    return (
                      <tr key={movie.id}>
                        <td className="border border-slate-700">{movie.id}</td>
                        <td className="border border-slate-700">{movie.movie_title}</td>
                        <td className="border border-slate-700">{movie.movie_category}</td>
                        <td className="border border-slate-700">{ratings.find(r => r.id === movie.rating).name}</td>
                        <td className="border border-slate-700">{movie.movie_duration}</td>
                        <td className="border border-slate-700">{movie.director}</td>
                        <td className="border border-slate-700">{movie.producer}</td>
                        <td className="border border-slate-700">{movie.movie_cast}</td>
                        <td className="border border-slate-700">{movie.synopsis}</td>
                      </tr>);
                  })}
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageMoviesPage;
