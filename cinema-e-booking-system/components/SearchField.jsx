import { useState } from "react";
import { SearchSvg } from "./Svg";

const SearchField = () => {
  const [input, setInput] = useState("");

  return (
    <label className="relative w-full flex flex-col">
      <input
        className="pl-20 pr-3 py-3 bg-transparent border-0 border-b border-on-primary placeholder-gray-300 text-4xl focus:ring-0 focus:border-0 focus:border-b-2 focus:border-on-primary"
        type="text"
        name="input"
        placeholder="Search movies"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <SearchSvg />
    </label>
  );
};

export default SearchField;
