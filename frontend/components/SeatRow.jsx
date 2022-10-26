import SeatSvg from "./SeatSvg";

const SeatRow = ({ row }) => {
  return (
    <div className="flex gap-x-1.5">
      {row.map((seat) => {
        if (seat === null) {
          return (
            <span key="null" className="invisible">
              Space
            </span>
          );
        } else {
          return <SeatSvg key={seat.seat} seat={seat} />;
        }
      })}
    </div>
  );
};

export default SeatRow;
