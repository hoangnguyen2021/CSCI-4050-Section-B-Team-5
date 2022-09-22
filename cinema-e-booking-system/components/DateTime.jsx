const DateTime = ({ date, time }) => {
  return (
    <p className="text-3xl text-on-primary tracking-wide">
      <span className="font-extralight">{date}</span>
      <span className="font-extralight">{" | "}</span>
      <span className="font-bold">{time}</span>
    </p>
  );
};

export default DateTime;
