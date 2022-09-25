import { PlusIcon } from "@heroicons/react/24/outline";

const AddButton = ({ text, open, setOpen }) => {
  return (
    <div className="flex gap-x-3 items-center">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-full border-2 border-blue-500 p-1 text-blue-500 shadow-sm hover:bg-primary"
      >
        <PlusIcon className="h-4 w-4" aria-hidden="true" />
      </button>
      <p className="text-blue-500 text-md font-semibold">{text}</p>
    </div>
  );
};

export default AddButton;
