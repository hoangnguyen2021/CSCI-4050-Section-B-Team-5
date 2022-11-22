import { useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useFetch } from "../../hooks/useFetch";
import BackToHomeNavigation from "../../components/BackToHomeNavigation";
import BackgroundOverlay from "../../components/BackgroundOverlay";
import InputField from "../../components/InputField";
import SelectMenu from "../../components/SelectMenu";
import DateField from "../../components/DateField";
import InputArea from "../../components/InputArea";
import NumberField from "../../components/NumberField";
import SubmitButton from "../../components/SubmitButton";
import { ratings } from "../../utils/config";

const categories = [
  { id: 0, name: "Action" },
  { id: 1, name: "Sci-Fi" },
  { id: 2, name: "Horror" },
  { id: 3, name: "Drama" },
  { id: 4, name: "Fantasy" },
  { id: 5, name: "Animation" },
  { id: 6, name: "Comedy" },
  { id: 7, name: "Family" },
  { id: 8, name: "Western" },
  { id: 9, name: "Documentary" }
];

const MovieForm = () => {
  const { post } = useFetch();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [rating, setRating] = useState(ratings[0]);
  const [duration, setDuration] = useState("");
  const [director, setDirector] = useState("");
  const [producer, setProducer] = useState("");
  const [cast, setCast] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [month, setMonth] = useState({ id: 1, name: "Jan" });
  const [day, setDay] = useState({ id: 1, name: "1" });
  const [year, setYear] = useState({ id: 22, name: 2022 });
  const [posterUrl, setPosterUrl] = useState("");
  const [trailerUrl, setTrailerUrl] = useState("");

  const addMovie = async (e) => {
    e.preventDefault();

    try {
      const response = await post(
        "api/movie/create",
        {
          movie_title: title,
          movie_category: category.name,
          movie_cast: cast,
          director: director,
          producer: producer,
          synopsis: synopsis,
          trailer_pic_url: posterUrl,
          trailer_video_url: trailerUrl,
          rating: ratings.find((r) => r.name === rating.name).id,
          movie_duration: duration,
        },
        {
          headers: {
            Authorization: "JWT " + localStorage.getItem("access"),
          },
        }
      );
      toast.success("Movie added successfully!");
      router.push("/manage-movies");
      console.log(response.data);
    } catch (error) {
      const responseData = error.response?.data;
      if (responseData) {
        toast.error("Cannot add movie!");
      } else {
        toast.error("Cannot add movie!");
      }
      console.error(error);
    }
  };

  return (
    <div className="bg-background">
      <BackToHomeNavigation text="Back to Manage Movies" href="/manage-movies" />
      <div className="relative">
        <BackgroundOverlay
          src="https://wallpaper.dog/large/20493433.jpg"
          opacity={70}
        />
        <div className="relative flex justify-center items-center py-20">
          <form className="basis-1/2 flex flex-col gap-y-3 bg-background-variant rounded-lg shadow-md px-8 py-10"
            onSubmit={addMovie}>
            <h3 className="text-xl text-on-primary font-semibold text-center">Add Movies</h3>
            <InputField label="Title" input={title} setInput={setTitle} />
            <div className="grid grid-cols-2 gap-x-10">
              <SelectMenu
                label="Category"
                options={categories}
                selected={category}
                setSelected={setCategory}
              />
              <SelectMenu
                label="Rating"
                options={ratings}
                selected={rating}
                setSelected={setRating}
              />
            </div>
            <NumberField
              label="Duration (in minutes)"
              min={0}
              max={300}
              input={duration}
              setInput={setDuration}
            />
            <InputField
              label="Director"
              input={director}
              setInput={setDirector}
            />
            <InputField
              label="Producer"
              input={producer}
              setInput={setProducer}
            />
            <InputField label="Cast" input={cast} setInput={setCast} />
            <InputArea
              label="Synopsis"
              input={synopsis}
              setInput={setSynopsis}
            />
            <DateField
              label="Released Date"
              month={month}
              day={day}
              year={year}
              setMonth={setMonth}
              setDay={setDay}
              setYear={setYear}
            />
            <InputField
              label="Poster URL"
              input={posterUrl}
              setInput={setPosterUrl}
            />
            <InputField
              label="Trailer URL"
              input={trailerUrl}
              setInput={setTrailerUrl}
            />
            <div className="pt-10 pb-5 flex justify-center">
              <SubmitButton text="Add movie" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MovieForm;
