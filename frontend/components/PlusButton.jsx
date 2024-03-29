import { PlusIcon } from "@heroicons/react/24/outline";

const PlusButton = ({ onClick, disabled = false }) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="rounded-full border-2 border-on-primary p-3 text-on-primary shadow-sm hover:bg-primary"
    >
      <PlusIcon className="h-6 w-6" disabled={disabled} aria-hidden="true" />
    </button>
  );
};

export default PlusButton;
