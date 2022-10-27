const SubmitButton = ({ text }) => {
  return (
    <button
      type="submit"
      className="px-10 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-on-primary text-center bg-primary hover:bg-primary-variant hover:font-semibold"
    >
      {text}
    </button>
  );
};

export default SubmitButton;
