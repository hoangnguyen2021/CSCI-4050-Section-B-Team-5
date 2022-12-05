const OutlinedButton = ({ text }) => {
  return (
    <button
      type="button"
      className="rounded-full border-2 border-on-primary text-md font-bold text-on-primary px-10 py-2 hover:bg-primary"
    >
      {text}
    </button>
  );
};

export default OutlinedButton;
