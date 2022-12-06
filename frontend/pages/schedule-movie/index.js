import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useFetch } from "../../hooks/useFetch";
import AdminPortalNav from "../../components/AdminPortalNav";
import BackgroundOverlay from "../../components/BackgroundOverlay";
import SelectMenu from "../../components/SelectMenu";
import DateField from "../../components/DateField";
import SubmitButton from "../../components/SubmitButton";
import ComboBox from "../../components/ComboBox";
import { navs, startTimes, showrooms } from "../../utils/config";

const ScheduleMoviePage = () => {
    const { get, post } = useFetch();
    const router = useRouter();

    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({ id: 0, name: "", imageUrl: "" });
    const [showroom, setShowroom] = useState({ id: 1, name: "Showroom 1" });
    const [startTime, setStartTime] = useState({ id: 0, name: "1:00" });
    const [startMonth, setStartMonth] = useState({ id: 1, name: "Jan" });
    const [startDay, setStartDay] = useState({ id: 1, name: "1" });
    const [startYear, setStartYear] = useState({ id: 22, name: 2022 });
    const [endMonth, setEndMonth] = useState({ id: 1, name: "Jan" });
    const [endDay, setEndDay] = useState({ id: 1, name: "1" });
    const [endYear, setEndYear] = useState({ id: 22, name: 2022 });

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
                        imageUrl: movie.trailer_pic_url
                    };
                }));
                console.log(responseData);
            }
        } catch (e) {
            toast.error("Failed to get movies!");
        }
    };

    const scheduleMovie = async (e) => {
        e.preventDefault();

        try {
            const response = await post(
                "api/show/schedule",
                {
                    movie_id: movie.id,
                    start_time: `${startTime.name}:00`,
                    showroom_id: showroom.id,
                    start_date: `${startYear.name}-${startMonth.id}-${startDay.name}`,
                    end_date: `${endYear.name}-${endMonth.id}-${endDay.name}`
                }
            );
            toast.success("Movie scheduled successfully!");
            router.push("/schedule-movie");
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
            <AdminPortalNav navs={navs} />
            <div className="relative">
                <BackgroundOverlay
                    src="https://wallpaper.dog/large/20493433.jpg"
                    opacity={70}
                />
                <div className="relative flex justify-center items-center py-20">
                    <form className="basis-1/2 flex flex-col gap-y-3 bg-background-variant rounded-lg shadow-md px-8 py-10"
                        onSubmit={scheduleMovie}>
                        <h3 className="text-xl text-on-primary font-semibold text-center">Schedule Movies</h3>
                        <ComboBox selected={movie} setSelected={setMovie} options={movies} />
                        <SelectMenu label="Showroom" selected={showroom} setSelected={setShowroom} options={showrooms} />
                        <SelectMenu label="Time" selected={startTime} setSelected={setStartTime} options={startTimes} />
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