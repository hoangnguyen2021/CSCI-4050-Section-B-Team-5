import SeatSvg from "./SeatSvg";

const SeatRow = ({ row, rowName, selected, toggleSelected }) => {
  return (
    <div className="flex gap-x-1.5">
      {row.split("").map((seat, i) => {
        return (
          <SeatSvg
            key={i}
            status={seat}
            rowName={rowName}
            rowNo={i}
            selected={selected[i]}
            toggleSelected={toggleSelected}
          />
        );
      })}
    </div>
  );
};

export default SeatRow;
