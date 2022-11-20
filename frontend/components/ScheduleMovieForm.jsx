import { useState } from "react";
import Link from "next/link";
import PillButton from "./PillButton";
import Dropdown from "../components/Dropdown";
import InputField from "../components/InputField";
import { EditSvg } from "./Svg";
import MovieTitle from "./MovieTitle";

const ScheduleMovieForm = () => {

    {/*
        const ScheduleMovieForm = (movie) => {}
         const {title} = movie*/}

    const screenNumber = [
        { id: 0, name: " Screen 1" },
        { id: 1, name: "Screen 2" },
        { id: 2, name: "Screen 3" },
        { id: 3, name: "Screen 4" },
        { id: 4, name: "Screen 5" }
      ];

      const startTime = [
        { id: 0, name: "1:00" },
        { id: 1, name: "2:00" },
        { id: 2, name: "3:00" },
        { id: 3, name: "4:00" },
        { id: 4, name: "5:00" }
      ];

      const movieTitle = [
        { id: 0, name: "movie1" },
        { id: 1, name: "movie2" },
        { id: 2, name: "movie3" },
        { id: 3, name: "movie4" },
        { id: 4, name: "movie5" }
      ];

      const days = [
        { id: 1, name: "1" },
        { id: 2, name: "2" },
        { id: 3, name: "3" },
        { id: 4, name: "4" },
        { id: 5, name: "5" },
        { id: 6, name: "6" },
        { id: 7, name: "7" },
        { id: 8, name: "8" },
        { id: 9, name: "9" },
        { id: 10, name: "10" },
        { id: 11, name: "11" },
        { id: 12, name: "12" },
        { id: 13, name: "13" },
        { id: 14, name: "14" },
        { id: 15, name: "15" },
        { id: 16, name: "16" },
        { id: 17, name: "17" },
        { id: 18, name: "18" },
        { id: 19, name: "19" },
        { id: 20, name: "20" },
        { id: 21, name: "21" },
        { id: 22, name: "22" },
        { id: 23, name: "23" },
        { id: 24, name: "24" },
        { id: 25, name: "25" },
        { id: 26, name: "26" },
        { id: 27, name: "27" },
        { id: 28, name: "28" },
        { id: 29, name: "29" },
        { id: 30, name: "30" },
        { id: 31, name: "31" },
      ];
      const months = [
        { id: 1, name: "Jan" },
        { id: 2, name: "Feb" },
        { id: 3, name: "Mar" },
        { id: 4, name: "April" },
        { id: 5, name: "May" },
        { id: 6, name: "Jun" },
        { id: 7, name: "Jul" },
        { id: 8, name: "Aug" },
        { id: 9, name: "Sep" },
        { id: 10, name: "Oct" },
        { id: 11, name: "Nov" },
        { id: 12, name: "Dec" },
      ];

  return (
    <div className="flex flex-col gap-y-5">
              <div className="grid grid-cols-2 gap-x-10">
                {/*<Dropdown label="Movie Title" options={title} /> */}
            <Dropdown label="Movie Title" options={movieTitle} />
          </div>
          <div className="grid grid-cols-2 gap-x-10">
            <Dropdown label="Screen Number" options={screenNumber} />
          </div>
          <div className="grid grid-cols-2 gap-x-10">
            <Dropdown label="Start Time" options={startTime} />
          </div>
      <div className="grid grid-cols-2 gap-x-10">
            <div>Start Date</div>
            <div></div>
            <Dropdown label="Day" options={days} />
            <Dropdown label="Month" options={months} />
          </div>
          <div className="grid grid-cols-2 gap-x-10">
            <div>End Date</div>
            <div></div>
            <Dropdown label="Day" options={days} />
            <Dropdown label="Month" options={months} />
          </div>
      <div className="pt-5">
        <PillButton text="Save" />
      </div>
    </div>
  );
};

export default ScheduleMovieForm;
