import ShowOptions from "./ShowOptions";
import ShowtimeHeader from "./ShowtimeHeader";

const ShowtimeSection = ({ movieMeta, showLL }) => {
  return (
    <div className="flex flex-col gap-y-20 h-96 scrollbar-thin scrollbar-thumb-primary scrollbar-track-on-primary overflow-y-scroll">
      <ShowtimeHeader movieMeta={movieMeta} />
      {showLL.map((showL) => (
        <ShowOptions key={showL[0].showroom_id} showL={showL} />
      ))}
    </div>
  );
};

export default ShowtimeSection;
