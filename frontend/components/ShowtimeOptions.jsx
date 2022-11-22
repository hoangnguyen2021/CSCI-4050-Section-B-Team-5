import Link from "next/link";
import OutlinedButton from "./OutlinedButton";
import { showrooms } from "../utils/config";

const ShowTimeOptions = ({ showtimeL }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="text-2xl text-on-primary font-bold uppercase">
        {
          showrooms.find(
            (showroom) => showroom.id === showtimeL[0]?.showroom_id
          ).name
        }
      </h2>
      <div className="flex flex-wrap gap-3 pt-4">
        {showtimeL.map((showtime) => {
          return (
            <Link key={showtime.start_time} href="/1/1">
              <a>
                <OutlinedButton
                  text={showtime.start_time.substring(
                    0,
                    showtime.start_time.length - 3
                  )}
                />
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ShowTimeOptions;
