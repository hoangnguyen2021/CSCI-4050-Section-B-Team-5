import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useFetch } from "../../hooks/useFetch";
import BackgroundOverlay from "../../components/BackgroundOverlay";
import Link from 'next/link';
import SearchNavigation from "../../components/SearchNavigation";
import ComboBox_Category from "../../components/ComboBox_Category";

const SearchByCategory = () => {
    const { get, post } = useFetch();
    const router = useRouter();

    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({ id: 0, name: "", imageUrl: "" });

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = async () => {
        try {
            const response = await get("api/movie/list");
            const responseData = response.data;
            if (responseData) {
                setMovies(responseData.map(movie => {
                    return {
                        id: movie.id,
                        name: movie.movie_title,
                        genre: movie.movie_category,
                        imageUrl: movie.trailer_pic_url
                    };
                }));
                console.log(responseData);
            }
        } catch (e) {
            toast.error("Failed to get movies!");
        }
    };
 
    return (
        <div className="bg-background">
            <SearchNavigation text="Back to Manage Movies" href="/manage-movies" />
            <div className="relative">
                <BackgroundOverlay
                    src="https://wallpaper.dog/large/20493433.jpg"
                    opacity={70}
                />
                <div className="relative flex justify-center items-center py-20">
                    <form className="basis-1/2 flex flex-col gap-y-3 bg-background-variant rounded-lg shadow-md px-8 py-10">
                        <h3 className="text-xl text-on-primary font-semibold text-center">Search By Category</h3>
                        <ComboBox_Category selected={movie} setSelected={setMovie} options={movies} onClick={<Link to="[movie.id]"/>} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SearchByCategory;
