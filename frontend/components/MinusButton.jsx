import { MinusIcon } from "@heroicons/react/24/outline";

const MinusButton = ({ onClick, disabled = false }) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="rounded-full border-2 border-on-primary p-3 text-white shadow-sm hover:bg-primary"
    >
      <MinusIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};

export default MinusButton;
