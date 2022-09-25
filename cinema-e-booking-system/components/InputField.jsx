import { useState } from "react";

const InputField = ({ label, placeholder, icon }) => {
  const [input, setInput] = useState("");

  return (
    <label className="relative w-full flex flex-col">
      <span className="text-on-primary text-base font-medium">{label}</span>
      <input
        className="peer pl-12 pr-2 py-2 bg-transparent border-0 border-b border-on-primary placeholder-gray-300 text-base focus:ring-0 focus:border-0 focus:border-b-2 focus:border-on-primary"
        type="text"
        name="input"
        placeholder={placeholder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {icon}
    </label>
  );
};

export default InputField;
