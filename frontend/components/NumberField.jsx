import { classNames } from "../utils/utils";

const NumberField = ({
  label,
  input,
  setInput,
  min = 0,
  max = 100,
  step = 1,
  placeholder,
  icon,
  readOnly = false,
}) => {
  return (
    <label className="relative w-full flex flex-col">
      <span className="text-on-primary text-base font-medium">{label}</span>
      <input
        className={classNames(
          icon ? "pl-12 pr-2 py-2" : "",
          "bg-transparent border-0 border-b border-on-primary placeholder-gray-500 text-base focus:ring-0 focus:border-0 focus:border-b-2 focus:border-on-primary"
        )}
        type="number"
        name="input"
        placeholder={placeholder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        min={min}
        max={max}
        step={step}
        required
        readOnly={readOnly}
      />
      {icon}
    </label>
  );
};

export default NumberField;
