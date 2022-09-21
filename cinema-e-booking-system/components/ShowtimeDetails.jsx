import OutlinedButton from "./OutlinedButton";

const ShowTimeDetails = ({ showtimeDetails }) => {
  const { format, attributes, showtime } = showtimeDetails;

  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="text-2xl text-on-primary font-bold uppercase">{format}</h2>
      <div className="flex gap-x-5 flex-wrap">
        {attributes.map((a) => (
          <span className="text-on-primary text-sm font-light">{a}</span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 pt-4">
        {showtime.map((time) => (
          <OutlinedButton text={time} />
        ))}
      </div>
    </div>
  );
};

export default ShowTimeDetails;
