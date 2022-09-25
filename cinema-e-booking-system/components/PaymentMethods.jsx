const paymentMethods = [
  {
    id: "bitpay",
    title: "BitPay",
    imageSrc:
      "https://amc-theatres-res.cloudinary.com/image/upload/v1637185131/amc-cdn/general/acceptance-marks/bitpay.png",
  },
  {
    id: "gpay",
    title: "Google Pay",
    imageSrc:
      "https://amc-theatres-res.cloudinary.com/image/upload/v1631022604/amc-cdn/general/acceptance-marks/google-pay.png",
  },
  {
    id: "paypal",
    title: "Paypal",
    imageSrc:
      "https://amc-theatres-res.cloudinary.com/image/upload/v1631022605/amc-cdn/general/acceptance-marks/paypal.png",
  },
  {
    id: "venmo",
    title: "Venmo",
    imageSrc:
      "https://amc-theatres-res.cloudinary.com/image/upload/v1631022605/amc-cdn/general/acceptance-marks/venmo.png",
  },
];

const PaymentMethods = () => {
  return (
    <div className="flex flex-col gap-y-5">
      {paymentMethods.map((paymentMethod) => (
        <div key={paymentMethod.id} className="space-x-3">
          <input
            id={paymentMethod.id}
            name="payment-method"
            type="radio"
            defaultChecked={paymentMethod.id === "email"}
            className="h-6 w-6 bg-transparent border-2 border-on-primary text-primary checked:ring-2 checked:ring-on-primary focus:ring-2 focus:ring-primary"
          />
          <label
            htmlFor={paymentMethod.id}
            className="text-md font-normal text-on-primary"
          >
            <img className="inline-block h-6" src={paymentMethod.imageSrc} />
            <span className="ml-3">{paymentMethod.title}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default PaymentMethods;
