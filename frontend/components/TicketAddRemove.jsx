import MinusButton from "./MinusButton";
import PlusButton from "./PlusButton";
import TicketDetails from "./TicketDetails";

const TicketAddRemove = ({
  type,
  ageRange,
  setPrice,
  quantity,
  plusDisabled,
  minusDisabled,
  onMinus,
  onPlus,
}) => {
  return (
    <div className="flex justify-evenly items-center gap-x-2">
      <MinusButton onClick={onMinus} disabled={minusDisabled} />
      <TicketDetails
        type={type}
        ageRange={ageRange}
        setPrice={setPrice}
        quantity={quantity}
      />
      <PlusButton onClick={onPlus} disabled={plusDisabled} />
    </div>
  );
};

export default TicketAddRemove;
