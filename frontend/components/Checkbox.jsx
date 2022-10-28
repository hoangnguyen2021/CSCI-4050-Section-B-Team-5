const Checkbox = ({ label, value, setValue }) => {
  return (
    <div>
      <span className="text-base font-normal text-center">{label} </span>
      <input
        type="checkbox"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="h-4 w-4 rounded border-gray-300 text-primary"
      />
    </div>
  );
};

export default Checkbox;
