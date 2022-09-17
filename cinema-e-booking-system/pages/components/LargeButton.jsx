const LargeButton = ({ text }) => {
  return (
    <button
      type="button"
      className="px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-on-primary text-center bg-primary hover:bg-primary-variant group-hover:bg-white group-hover:text-on-secondary"
    >
      {text}
    </button>
  );
};

export default LargeButton;
