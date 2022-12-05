const PillButton = ({ text, disabled = false, onClick }) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="w-full px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-on-primary text-center bg-primary enabled:hover:bg-primary-variant enabled:hover:font-semibold disabled:bg-disabled"
    >
      {text}
    </button>
  );
};

export default PillButton;
