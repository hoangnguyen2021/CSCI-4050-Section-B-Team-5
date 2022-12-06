import { useState } from "react";
import Link from "next/link";
import InputField from "../components/InputField";
import PhoneNumberField from "./PhoneNumberField";
import EmailField from "./EmailField";
import PillButton from "./PillButton";
import { EditSvg } from "./Svg";
import CardNumberField from "./CardNumberField";
import SelectMenu from "./SelectMenu";

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
const EditProfileForm = () => {
  const [nameRO, setNameRO] = useState(true);
  const [phoneNumberRO, setPhoneNumberRO] = useState(true);
  const [emailRO, setEmailRO] = useState(true);
  const [cardNumberRO, setCardNumberRO] = useState(true);
  const [cvvRO, setCvvRO] = useState(true);
  const [zipRO, setZipRO] = useState(true);

  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex justify-between space-x-3 items-end">
        <InputField label="Name" readOnly={nameRO} />
        <button onClick={() => setNameRO(false)}>
          <EditSvg />
        </button>
      </div>
      <div className="flex justify-between space-x-3 items-end">
        <PhoneNumberField label="Phone Number" readOnly={phoneNumberRO} />
        <button onClick={() => setPhoneNumberRO(false)}>
          <EditSvg />
        </button>
      </div>
      <div className="flex justify-between space-x-3 items-end">
        <EmailField label="Email" readOnly={emailRO} />
        <button onClick={() => setEmailRO(false)}>
          <EditSvg />
        </button>
      </div>
      <div className="flex jsutify-between space-x-3 items-end">
          <CardNumberField label="Card Number" readOnly={cardNumberRO} />
          <button onClick={() => setCardNumberRO(false)}>
          <EditSvg />
        </button> 
        </div>
        <div className="flex jsutify-between space-x-3 items-end">
          <InputField label="CVV" readOnly={cvvRO} />
          <button onClick={() => setCvvRO(false)}>
          <EditSvg />
        </button>
        </div>
        <div className="flex jsutify-between space-x-3 items-end">
          <InputField label="Zip Code" readOnly={zipRO} />
          <button onClick={() => setZipRO(false)}>
          <EditSvg />
        </button>
        </div>
        <div className="grid grid-cols-2 gap-x-10">
            <SelectMenu label="Exp. Month" options={months} />
            <SelectMenu label="Exp. Year" options={years} />
          </div>
      <Link href="/change-password">
        <div className="text-base font-medium text-primary cursor-pointer hover:text-primary-variant hover:underline">
          Change password
        </div>
      </Link>
      <div className="pt-5">
        <PillButton text="Save" />
      </div>
    </div>
  );
};

export default EditProfileForm;
