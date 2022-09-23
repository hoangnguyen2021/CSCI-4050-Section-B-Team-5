const TicketPrompt = ({ value }) => {
  return (
    <p className="text-lg text-on-primary font-bold text-center">
      Select {value} remaining ticket{value > 1 ? "s" : ""}
    </p>
  );
};

export default TicketPrompt;
