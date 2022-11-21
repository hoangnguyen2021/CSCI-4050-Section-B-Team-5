import { useState } from "react";

const CardNumberField = () => {
  const [card, setCard] = useState("");

  const validate = (input) => {
    return !isNaN(input[input.length - 1]) && input.length <= 20;
  };

  const handleCardDisplay = () => {
    const rawCardNumber = [...card.split(" ").join("")]; // Remove old space
    const formattedCardNumber = []; // Create formatted card number as array
    rawCardNumber.forEach((t, i) => {
      if (i % 4 === 0) formattedCardNumber.push(" "); // Add space
      formattedCardNumber.push(t);
    });
    return formattedCardNumber.join(""); // Transform card array to string
  };

  return (
    <label className="relative w-full flex flex-col">
      <span className="text-on-primary text-base font-medium">Card Number</span>
      <input
        className="pl-12 pr-2 py-2 bg-transparent border-0 border-b border-on-primary placeholder-gray-300 text-on-primary text-base focus:ring-0 focus:border-0 focus:border-b-2 focus:border-on-primary"
        type="text"
        name="card_number"
        placeholder="0000 0000 0000 0000"
        value={handleCardDisplay()}
        onChange={(e) => {
          const value = e.target.value;
          if (validate(value)) setCard(value);
        }}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/3 -translate-y-1/2 text-on-primary h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>
    </label>
  );
};

export default CardNumberField;
