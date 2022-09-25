import OutlinedButton from "./OutlinedButton";
import ShowtimeAttributes from "./ShowtimeAttributes";

const ShowTimeOptions = ({ showtimeDetails }) => {
  const { format, attributes, showtime } = showtimeDetails;

  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="text-2xl text-on-primary font-bold uppercase">{format}</h2>
      <ShowtimeAttributes attributes={attributes} />
      <div className="flex flex-wrap gap-3 pt-4">
        {showtime.map((time) => (
          <OutlinedButton key={time} text={time} />
        ))}
      </div>
    </div>
  );
};

export default ShowTimeOptions;
