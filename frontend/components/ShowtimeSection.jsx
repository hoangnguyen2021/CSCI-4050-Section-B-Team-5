import ShowTimeOptions from "./ShowtimeOptions";
import ShowtimeHeader from "./ShowtimeHeader";

const ShowtimeSection = ({ movieMeta, showtimeLL }) => {
  return (
    <div className="flex flex-col gap-y-20 h-96 scrollbar-thin scrollbar-thumb-primary scrollbar-track-on-primary overflow-y-scroll">
      <ShowtimeHeader movieMeta={movieMeta} />
      {showtimeLL.map((showTimeL) => (
        <ShowTimeOptions key={showTimeL[0].showroom_id} showtimeL={showTimeL} />
      ))}
    </div>
  );
};

export default ShowtimeSection;
