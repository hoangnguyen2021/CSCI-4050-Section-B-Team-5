import { ArrowRightIcon } from "@heroicons/react/24/outline";

const CustomRightArrow = ({ onClick }) => {
  return (
    <i
      type="button"
      onClick={onClick}
      className="absolute right-10 text-on-primary border-2 border-on-primary hover:bg-primary font-medium rounded-full p-2.5 text-center inline-flex items-center"
    >
      <ArrowRightIcon className="w-4 h-4 md:w-10 md:h-10" aria-hidden="true" />
      <span class="sr-only">Right arrow</span>
    </i>
  );
};

export default CustomRightArrow;
