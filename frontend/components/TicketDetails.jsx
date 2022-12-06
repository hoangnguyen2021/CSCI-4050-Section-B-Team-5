const TicketDetails = ({ ticketType, quantity }) => {
  const { type, ageRange, price } = ticketType;
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-2xl text-on-primary font-bold">{`${quantity} ${type}`}</p>
      <p className="text-md text-gray-400 font-normal italic">Age {ageRange}</p>
      <p className="text-lg text-on-primary font-bold">$ {price.toFixed(2)}</p>
    </div>
  );
};

export default TicketDetails;
