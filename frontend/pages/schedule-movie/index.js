import { useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useFetch } from "../../hooks/useFetch";
import BackToHomeNavigation from "../../components/BackToHomeNavigation";
import BackgroundOverlay from "../../components/BackgroundOverlay";
import SelectMenu from "../../components/SelectMenu";
import DateField from "../../components/DateField";
import SubmitButton from "../../components/SubmitButton";
import ComboBox from "../../components/ComboBox";

const options = [
    { id: 1, name: "Movie 1" },
    { id: 2, name: "Movie 2" },
    { id: 3, name: "Movie 3" },
    { id: 4, name: "Movie 4" }
];

const screenNumbers = [
    { id: 0, name: "Screen 1" },
    { id: 1, name: "Screen 2" },
    { id: 2, name: "Screen 3" },
    { id: 3, name: "Screen 4" },
    { id: 4, name: "Screen 5" },
];

const startTimes = [
    { id: 0, name: "1:00" },
    { id: 1, name: "2:00" },
    { id: 2, name: "3:00" },
    { id: 3, name: "4:00" },
    { id: 4, name: "5:00" },
];

const ScheduleMoviePage = () => {
    const { post } = useFetch();
    const router = useRouter();

    const [movieTitle, setMovieTitle] = useState({ id: 1, name: "Movie 1" });
    const [screenNumber, setScreenNumber] = useState({ id: 0, name: "Screen 1" });
    const [startTime, setStartTime] = useState({ id: 0, name: "1:00" });
    const [startMonth, setStartMonth] = useState({ id: 1, name: "Jan" });
    const [startDay, setStartDay] = useState({ id: 1, name: "1" });
    const [startYear, setStartYear] = useState({ id: 1, name: 2004 });
    const [endMonth, setEndMonth] = useState({ id: 1, name: "Jan" });
    const [endDay, setEndDay] = useState({ id: 1, name: "1" });
    const [endYear, setEndYear] = useState({ id: 1, name: 2004 });

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
                        <SelectMenu label="Screen Number" selected={screenNumber} setSelected={setScreenNumber} options={screenNumbers} />
                        <SelectMenu label="Screen Number" selected={startTime} setSelected={setStartTime} options={startTimes} />
                        <DateField label="Start Date"
                            month={startMonth}
                            day={startDay}
                            year={startYear}
                            setMonth={setStartMonth}
                            setDay={setStartDay}
                            setYear={setStartYear} />
                        <DateField label="End Date"
                            month={endMonth}
                            day={endDay}
                            year={endYear}
                            setMonth={setEndMonth}
                            setDay={setEndDay}
                            setYear={setEndYear} />
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