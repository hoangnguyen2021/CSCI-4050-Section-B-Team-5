import ShowTimeOptions from "./ShowtimeOptions";
import ShowtimeHeader from "./ShowtimeHeader";

const showtimeList = [
  {
    format: "DOLBY CINEMA",
    attributes: [
      "AMC Signature Recliners",
      "Reserved Seating",
      "Closed Caption",
      "Audio Description",
    ],
    showtime: ["3:30 pm", "6:15 pm"],
  },
  {
    format: "LASER AT AMC",
    attributes: [
      "AMC Signature Recliners",
      "Reserved Seating",
      "Closed Caption",
      "Heated AMC Signature Recliners",
      "Audio Description",
    ],
    showtime: ["1:30 pm", "2:00 pm", "4:45 pm", "5:15 pm"],
  },
  {
    format: "DIGITAL",
    attributes: ["Reserved Seating", "Closed Caption", "Audio Description"],
    showtime: [
      "2:30 pm",
      "3:00 pm",
      "4:00 pm",
      "6:00 pm",
      "6:30 pm",
      "7:30 pm",
    ],
  },
];

const ShowtimeSection = ({ movieMeta }) => {
  return (
    <div className="flex flex-col gap-y-20 h-96 scrollbar-thin scrollbar-thumb-primary scrollbar-track-on-primary overflow-y-scroll">
      <ShowtimeHeader movieMeta={movieMeta} />
      {showtimeList.map((s) => (
        <ShowTimeOptions showtimeDetails={s} />
      ))}
    </div>
  );
};

export default ShowtimeSection;
