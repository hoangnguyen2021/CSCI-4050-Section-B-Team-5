import { useState } from "react";
import AddButton from "./AddButton";
import CardNumberField from "./CardNumberField";
import Modal from "./Modal";
import InputField from "./InputField";
import PillButton from "./PillButton";
import { CVVSvg, ZipCodeSvg } from "./Svg";
import DateField from "./DateField";

const PaymentForm = () => {
  const [open, setOpen] = useState(false);
  const [month, setMonth] = useState({ id: 1, name: "Jan" });
  const [year, setYear] = useState({ id: 22, name: 2023 });
  const [CVV, setCVV] = useState("");
  const [zipCode, setZipCode] = useState("");

  const validateCVV = (input) => {
    const regex = new RegExp(/^[0-9]*$/);
    return regex.test(input);
  };

  const validateZipCode = (input) => {
    const regex = new RegExp(/^[0-9]*$/);
    return regex.test(input);
  };

  return (
    <div className="flex flex-col gap-y-5">
      <Modal open={open} setOpen={setOpen} title="Add Card">
        <div className="flex flex-col gap-y-5">
          <div className="flex">
            <img
              className="h-6"
              src="https://amc-theatres-res.cloudinary.com/image/upload/v1556564205/amc-cdn/static/images/forms/accepted_cards.png"
            />
          </div>
          <CardNumberField />
          <DateField
            prefix="Exp."
            month={month}
            year={year}
            monthYearOnly={true}
          />
          <div className="grid grid-cols-2 gap-x-10">
            <InputField
              label="CVV"
              placeholder="CVV"
              icon={<CVVSvg />}
              minLength={3}
              maxLength={3}
              input={CVV}
              setInput={setCVV}
              validate={validateCVV}
            />
            <InputField
              label="Zip Code"
              placeholder="XXXXX"
              icon={<ZipCodeSvg />}
              minLength={5}
              maxLength={5}
              input={zipCode}
              setInput={setZipCode}
              validate={validateZipCode}
            />
          </div>
          <div className="flex">
            <PillButton text="Add Card" onClick={() => setOpen(false)} />
          </div>
        </div>
      </Modal>
      <h2 className="text-2xl text-on-primary font-extrabold">
        Payment Method
      </h2>
      <AddButton text="Add Card" open={open} setOpen={setOpen} />
    </div>
  );
};

export default PaymentForm;
