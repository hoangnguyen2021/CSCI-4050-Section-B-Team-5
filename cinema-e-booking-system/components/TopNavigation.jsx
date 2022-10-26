import { useState } from "react";
import Link from "next/link";
import Modal from "../components/Modal";
import InputField from "../components/InputField";
import PhoneNumberField from "./PhoneNumberField";
import EmailField from "./EmailField";
import PillButton from "./PillButton";
import { EditSvg } from "./Svg";

const TopNavigation = () => {
  const [open, setOpen] = useState(false);
  const [nameRO, setNameRO] = useState(true);
  const [phoneNumberRO, setPhoneNumberRO] = useState(true);
  const [emailRO, setEmailRO] = useState(true);

  return (
    <div className="bg-background">
      <div className="mx-auto flex flex-row-reverse h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-6">
          <Link href="/login">
            <div className="text-sm font-medium text-on-primary cursor-pointer hover:text-gray-100">
              Sign in/Join
            </div>
          </Link>
          <div
            onClick={() => setOpen(true)}
            className="text-sm font-medium text-on-primary cursor-pointer hover:text-gray-100"
          >
            Account
          </div>
          <Modal open={open} setOpen={setOpen} title="Edit Profile">
            <div className="flex flex-col gap-y-5">
              <div className="flex justify-between space-x-3 items-end">
                <InputField label="Name" readOnly={nameRO} />
                <button onClick={() => setNameRO(false)}>
                  <EditSvg />
                </button>
              </div>
              <div className="flex justify-between space-x-3 items-end">
                <PhoneNumberField
                  label="Phone Number"
                  readOnly={phoneNumberRO}
                />
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

              <div className="pt-10">
                <PillButton text="Save" />
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
