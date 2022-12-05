const InputArea = ({
  label,
  input,
  setInput,
  placeholder,
  rows = 4,
  readOnly = false,
}) => {
  return (
    <label className="relative w-full flex flex-col space-y-2">
      <span className="text-on-primary text-base font-medium">{label}</span>
      <textarea
        className="bg-transparent border border-on-primary placeholder-gray-500 text-base text-on-primary focus:ring-0 focus:border-2 focus:border-on-primary"
        rows={rows}
        placeholder={placeholder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
        readOnly={readOnly}
      />
    </label>
  );
};

export default InputArea;
