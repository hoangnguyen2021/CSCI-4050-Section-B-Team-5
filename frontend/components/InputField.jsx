import { classNames } from "../utils/utils";

const InputField = ({
  label,
  input,
  setInput,
  placeholder,
  minLength = 0,
  maxLength = 255,
  icon,
  readOnly = false,
  validate,
}) => {
  return (
    <label className="relative w-full flex flex-col">
      <span className="text-on-primary text-base font-medium">{label}</span>
      <input
        className={classNames(
          icon ? "pl-12 pr-2 py-2" : "",
          "bg-transparent border-0 border-b border-on-primary placeholder-gray-500 text-base text-on-primary focus:ring-0 focus:border-0 focus:border-b-2 focus:border-on-primary"
        )}
        type="text"
        name="input"
        placeholder={placeholder}
        value={input}
        onChange={(e) => {
          if (validate && validate(e.target.value)) setInput(e.target.value);
          else setInput(e.target.value);
        }}
        minLength={minLength}
        maxLength={maxLength}
        required
        readOnly={readOnly}
      />
      {icon}
    </label>
  );
};

export default InputField;
