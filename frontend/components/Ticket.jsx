import { ticketTypes } from "../utils/config";

const Ticket = ({ ticketCount, type }) => {
  return (
    <div className="flex flex-col gap-y-1">
      <div className="flex justify-between">
        <p className="text-on-primary text-lg font-normal">
          {ticketTypes[type].type} x {ticketCount}
        </p>
        <p className="text-on-primary text-lg font-normal">
          $ {(ticketTypes[type].price * ticketCount).toFixed(2)}
        </p>
      </div>
      <p className="text-gray-400 text-sm font-normal italic"></p>
    </div>
  );
};

export default Ticket;
