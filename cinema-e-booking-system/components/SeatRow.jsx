import SeatSvg from "./SeatSvg";

const SeatRow = ({ row }) => {
  return (
    <div className="flex gap-x-1.5">
      {row.map((seat) => {
        if (seat === 0) {
          return <span className="invisible">Space</span>;
        } else {
          return <SeatSvg />;
        }
      })}
    </div>
  );
};

export default SeatRow;
