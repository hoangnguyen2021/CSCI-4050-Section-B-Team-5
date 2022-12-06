const CreditCard = ({ card, setCard }) => {
  const { id, cardnum } = card;

  return (
    <div className="space-x-3">
      <input
        id={id}
        name="payment-method"
        type="radio"
        value={id}
        onChange={(e) => setCard(e.target.value)}
        className="h-6 w-6 bg-transparent border-2 border-on-primary text-primary checked:ring-2 checked:ring-on-primary focus:ring-2 focus:ring-primary"
      />
      <label htmlFor={id} className="text-md font-normal text-on-primary">
        <img
          className="inline-block h-6"
          src="https://amc-theatres-res.cloudinary.com/image/upload/amc-cdn/general/acceptance-marks/visa.png"
        />
        <span className="ml-3">(*{cardnum.slice(-4)})</span>
      </label>
    </div>
  );
};

export default CreditCard;
