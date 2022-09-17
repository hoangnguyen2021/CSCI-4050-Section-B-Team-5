const CustomRightArrow = ({ onClick }) => {
  return (
    <i
      type="button"
      onClick={onClick}
      className="absolute right-10 text-on-primary border-2 border-on-primary hover:bg-primary font-medium rounded-full p-2.5 text-center inline-flex items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4 md:w-10 md:h-10"
      >
        <path
          fillRule="evenodd"
          d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
          clipRule="evenodd"
        />
      </svg>

      <span class="sr-only">Right arrow</span>
    </i>
  );
};

export default CustomRightArrow;
