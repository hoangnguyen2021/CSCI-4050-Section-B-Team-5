import Ticket from "./Ticket";

const OrderSummary = ({ tickets }) => {
  return (
    <div className="flex flex-col gap-y-10 justify-center">
      <div className="flex flex-col gap-y-5">
        <div className="flex justify-between">
          <h3 className="text-on-primary text-xl font-bold uppercase">
            TICKET(S)
          </h3>
          <p className="text-blue-600 text-lg font-semibold">Edit</p>
        </div>
        <div className="flex flex-col gap-y-5">
          {tickets.map((ticket) => (
            <Ticket key={ticket.key} ticket={ticket} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-y-2">
        <h3 className="text-on-primary text-xl font-bold uppercase">FEES</h3>
        <div className="flex justify-between">
          <h3 className="text-on-primary text-lg font-normal">
            Convenience Fee
          </h3>
          <p className="text-on-primary text-lg font-normal">$4.98</p>
        </div>
      </div>

      <div className="flex justify-between border-y border-y-on-primary py-5">
        <h3 className="text-on-primary text-xl font-bold uppercase">TAXES</h3>
        <p className="text-on-primary text-lg font-normal">$3.63</p>
      </div>
      <div className="flex items-center gap-x-4 justify-end">
        <p className="text-on-primary text-lg font-semibold uppercase">TOTAL</p>
        <p className="text-on-primary text-2xl font-bold">$50.39</p>
      </div>
    </div>
  );
};

export default OrderSummary;
