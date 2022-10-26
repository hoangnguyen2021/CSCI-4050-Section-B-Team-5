import { classNames } from "../utils/utils";

const EmailField = ({
  label,
  email,
  setEmail,
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
        type="email"
        name="input"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        readOnly={readOnly}
      />
      {icon}
    </label>
  );
};

export default EmailField;
