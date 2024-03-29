import { rowNames } from "../utils/config";
import { classNames } from "../utils/utils";

const SeatSvg = ({ status, rowName, rowNo, selected, toggleSelected }) => {
  const isAvailable = status === "0";
  const isSelected = selected === "1";

  return (
    <div
      className={classNames(
        isAvailable ? "cursor-pointer" : "",
        "group relative flex justify-center"
      )}
      onClick={() => {
        if (isAvailable)
          toggleSelected(rowNames.indexOf(rowName) * rowNames.length + rowNo);
      }}
    >
      <p
        className={classNames(
          isAvailable ? "group-hover:text-primary" : "text-disabled",
          isSelected
            ? "text-primary font-semibold"
            : "text-on-primary font-light",
          "absolute text-sm"
        )}
      >
        {`${rowName}${rowNo}`}
      </p>
      <svg
        viewBox="0 0 1000 1000"
        enableBackground="new 0 0 1000 1000"
        className={classNames(
          isAvailable ? "group-hover:fill-primary" : "fill-disabled",
          isSelected ? "fill-primary" : "fill-on-primary",
          "w-10 h-10"
        )}
      >
        <g>
          <path d="M808.4,993.4h-57.3c-5.5,0-9.9-4.4-9.9-9.9V803H258.7v180.5c0,5.5-4.4,9.9-9.9,9.9h-57.3c-5.5,0-9.9-4.4-9.9-9.9V803h-35.9c-21.9,0-39.8-17.8-39.8-39.8V627.7c0-36.7,25.9-67.4,60.4-74.8v-35.5h-116c-5.5,0-9.9-4.4-9.9-9.9v-67.7H19.9c-5.5,0-9.9-4.4-9.9-9.9v-38c0-5.5,4.4-9.9,9.9-9.9h146.5V209.6c0-112,91.1-203,203-203h261.1c112,0,203,91.1,203,203V382h12.4l-4.2-61.2c-0.2-2.7,0.8-5.4,2.6-7.4s4.5-3.1,7.2-3.1h35.2l7.1-65.7c0.3-2.9,1.9-5.5,4.3-7.2l53.6-36.1c4.5-3.1,10.7-1.8,13.7,2.7c3.1,4.5,1.9,10.7-2.7,13.7L913,251.3l-6.3,59h33.1c2.7,0,5.4,1.1,7.2,3.1c1.9,2,2.8,4.7,2.6,7.4l-4.2,61.2h34.7c5.5,0,9.9,4.4,9.9,9.9v38c0,5.5-4.4,9.9-9.9,9.9h-20.6v67.7c0,5.5-4.4,9.9-9.9,9.9h-116v35.5c34.5,7.4,60.4,38.1,60.4,74.8v135.6c0,21.9-17.8,39.8-39.8,39.8h-35.9v180.5C818.3,989,813.9,993.4,808.4,993.4z M761,973.6h37.5V803H761V973.6z M201.4,973.6h37.5V803h-37.5V973.6z M808.4,783.2h45.8c11,0,20-9,20-20v-28.9H125.8v28.9c0,11,9,20,20,20H808.4z M125.8,714.5h748.4v-86.9c0-31.3-25.4-56.7-56.7-56.7h-635c-31.3,0-56.7,25.4-56.7,56.7L125.8,714.5L125.8,714.5z M186.2,551.2h627.6V439.8h-20.1c-5.5,0-9.9-4.4-9.9-9.9v-38c0-5.5,4.4-9.9,9.9-9.9h20.1V209.6c0-101-82.2-183.2-183.2-183.2H369.4c-101,0-183.2,82.2-183.2,183.2V382h20.6c5.5,0,9.9,4.4,9.9,9.9v38c0,5.5-4.4,9.9-9.9,9.9h-20.6V551.2z M834,497.5h105.6v-57.8H834V497.5z M60.3,497.5h105.6v-57.8H60.3V497.5z M803.9,420h166.2v-18.2H803.9V420L803.9,420z M175.8,420h20.6v-18.2H29.8V420H175.8z M865.8,382h59.7l3.6-51.9h-33.3c-0.1,0-0.2,0-0.2,0h-33.4L865.8,382z" />
        </g>
      </svg>
    </div>
  );
};

export default SeatSvg;
