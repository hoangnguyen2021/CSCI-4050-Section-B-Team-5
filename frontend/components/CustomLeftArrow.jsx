import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const CustomLeftArrow = ({ onClick }) => {
  return (
    <i
      type="button"
      onClick={onClick}
      className="absolute left-10 text-on-primary border-2 border-on-primary hover:bg-primary font-medium rounded-full p-2.5 text-center inline-flex items-center"
    >
      <ArrowLeftIcon className="w-4 h-4 md:w-10 md:h-10" aria-hidden="true" />
      <span className="sr-only">Left arrow</span>
    </i>
  );
};

export default CustomLeftArrow;
