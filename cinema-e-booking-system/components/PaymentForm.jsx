import { useState } from "react";
import AddButton from "./AddButton";
import CardNumberInputField from "./CardNumberInputField";
import Modal from "./Modal";
import PaymentMethods from "./PaymentMethods";
import Dropdown from "./Dropdown";
import InputField from "./InputField";
import LargeButton from "./LargeButton";
import { CVVSvg, ZipCodeSvg } from "./Svg";

const months = [
  { id: 1, name: "Jan" },
  { id: 2, name: "Feb" },
  { id: 3, name: "Mar" },
  { id: 4, name: "April" },
  { id: 5, name: "May" },
  { id: 6, name: "Jun" },
  { id: 7, name: "Jul" },
  { id: 8, name: "Aug" },
  { id: 9, name: "Sep" },
  { id: 10, name: "Oct" },
  { id: 11, name: "Nov" },
  { id: 12, name: "Dec" },
];

const years = [
  { id: 1, name: 2022 },
  { id: 2, name: 2023 },
  { id: 3, name: 2024 },
  { id: 4, name: 2025 },
  { id: 5, name: 2026 },
  { id: 6, name: 2027 },
  { id: 7, name: 2028 },
  { id: 8, name: 2029 },
  { id: 9, name: 2030 },
  { id: 10, name: 2031 },
  { id: 11, name: 2032 },
  { id: 12, name: 2033 },
  { id: 13, name: 2034 },
  { id: 14, name: 2035 },
  { id: 15, name: 2036 },
  { id: 16, name: 2037 },
  { id: 17, name: 2038 },
  { id: 18, name: 2039 },
  { id: 19, name: 2040 },
];

const PaymentForm = () => {
  const [open, setOpen] = useState(false);

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
          <CardNumberInputField />
          <div className="grid grid-cols-2 gap-x-10">
            <Dropdown label="Exp. Month" options={months} />
            <Dropdown label="Exp. Year" options={years} />
          </div>
          <div className="grid grid-cols-2 gap-x-10">
            <InputField label="CVV" placeholder="CVV" icon={<CVVSvg />} />
            <InputField
              label="Zip Code"
              placeholder="XXXXX"
              icon={<ZipCodeSvg />}
            />
          </div>
          <div className="flex">
            <LargeButton text="Add Card" onClick={() => setOpen(false)} />
          </div>
        </div>
      </Modal>
      <h2 className="text-2xl text-on-primary font-extrabold">
        Payment Method
      </h2>
      <AddButton text="Add Card" open={open} setOpen={setOpen} />
      <PaymentMethods />
    </div>
  );
};

export default PaymentForm;
