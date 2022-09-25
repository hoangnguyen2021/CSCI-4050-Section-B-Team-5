const Ticket = ({ ticket }) => {
  const { name, quantity = 1, unitPrice, seats } = ticket;
  const price = unitPrice * quantity;

  return (
    <div className="flex flex-col gap-y-1">
      <div className="flex justify-between">
        <p className="text-on-primary text-lg font-normal">
          {name} x {quantity}
        </p>
        <p className="text-on-primary text-lg font-normal">${price}</p>
      </div>
      <p className="text-gray-400 text-sm font-normal italic">
        Seats {seats.join(", ")}
      </p>
    </div>
  );
};

export default Ticket;
