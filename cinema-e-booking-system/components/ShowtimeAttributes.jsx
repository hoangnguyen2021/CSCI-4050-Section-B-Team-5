const ShowtimeAttributes = ({ attributes }) => {
  return (
    <p className="flex gap-x-5 flex-wrap">
      {attributes.map((a) => (
        <span className="text-on-primary text-sm font-light">{a}</span>
      ))}
    </p>
  );
};

export default ShowtimeAttributes;
