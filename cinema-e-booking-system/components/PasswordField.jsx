import { useState } from "react";
import { classNames } from "../utils/utils";

const PasswordField = ({ label, placeholder, icon, minLength = 8 }) => {
  const [input, setInput] = useState("");

  return (
    <label className="relative w-full flex flex-col">
      <span className="text-on-primary text-base font-medium">{label}</span>
      <input
        className={classNames(
          icon ? "pl-12 pr-2 py-2" : "",
          "bg-transparent border-0 border-b border-on-primary placeholder-gray-500 text-base focus:ring-0 focus:border-0 focus:border-b-2 focus:border-on-primary"
        )}
        type="password"
        name="input"
        placeholder={placeholder}
        value={input}
        minLength={minLength}
        onChange={(e) => setInput(e.target.value)}
        required
      />
      {icon}
    </label>
  );
};

export default PasswordField;
