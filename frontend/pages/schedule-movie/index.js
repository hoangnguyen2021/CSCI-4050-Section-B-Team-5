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
import ScheduleMovieForm from "../../components/ScheduleMovieForm";
import ComboBox from "../../components/ComboBox";

const options = [
    { id: 1, name: "Movie 1" },
    { id: 2, name: "Movie 2" },
    { id: 3, name: "Movie 3" },
    { id: 4, name: "Movie 4" }
];


const ScheduleMoviePage = () => {
    const { post } = useFetch();
    const router = useRouter();

    const [movieTitle, setMovieTitle] = useState({ id: 1, name: "Movie 1" });

    const scheduleMovie = async (e) => {
        e.preventDefault();

        try {
            const response = await post(
                "api/movie/create",
                {
                },
                {
                    headers: {
                        Authorization: "JWT " + localStorage.getItem("access"),
                    },
                }
            );
            toast.success("Movie scheduled successfully!");
            router.push("/manage-movies");
            console.log(response.data);
        } catch (error) {
            const responseData = error.response?.data;
            if (responseData) {
                toast.error("Cannot schedule movie!");
            } else {
                toast.error("Cannot schedule movie!");
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
                        onSubmit={scheduleMovie}>
                        <h3 className="text-xl text-on-primary font-semibold text-center">Schedule Movies</h3>
                        <ComboBox selected={movieTitle} setSelected={setMovieTitle} options={options} />
                        <ScheduleMovieForm />
                        <div className="pt-10 pb-5 flex justify-center">
                            <SubmitButton text="Schedule movie" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ScheduleMoviePage;