import Link from "next/link";
import { useRouter } from "next/router";
import OutlinedButton from "./OutlinedButton";
import { showrooms } from "../utils/config";

const ShowTimeOptions = ({ showtimeL }) => {
  const router = useRouter();
  const { movieId } = router.query;

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
        {showtimeL.map((show) => {
          return (
            <Link
              key={show.id}
              href={{
                pathname: "/[movieId]/[showId]",
                query: { movieId: movieId, showId: show.id },
              }}
            >
              <a>
                <OutlinedButton
                  text={show.start_time.substring(
                    0,
                    show.start_time.length - 3
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
