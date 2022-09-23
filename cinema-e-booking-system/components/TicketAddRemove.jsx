import MinusButton from "./MinusButton";
import PlusButton from "./PlusButton";
import TicketDetails from "./TicketDetails";

const TicketAddRemove = ({ type, ageRange, setPrice }) => {
  return (
    <div className="flex justify-evenly items-center gap-x-2">
      <MinusButton />
      <TicketDetails type={type} ageRange={ageRange} setPrice={setPrice} />
      <PlusButton />
    </div>
  );
};

export default TicketAddRemove;
