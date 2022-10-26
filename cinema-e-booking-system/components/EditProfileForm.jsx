import { useState } from "react";
import Link from "next/link";
import InputField from "../components/InputField";
import PhoneNumberField from "./PhoneNumberField";
import EmailField from "./EmailField";
import PillButton from "./PillButton";
import { EditSvg } from "./Svg";

const EditProfileForm = () => {
  const [nameRO, setNameRO] = useState(true);
  const [phoneNumberRO, setPhoneNumberRO] = useState(true);
  const [emailRO, setEmailRO] = useState(true);

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
