const TicketDetails = ({ type, ageRange, setPrice }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-2xl text-on-primary font-bold">{type}</p>
      <p className="text-md text-gray-400 font-normal italic">Age {ageRange}</p>
      <p className="text-lg text-on-primary font-bold">${setPrice}</p>
    </div>
  );
};

export default TicketDetails;
