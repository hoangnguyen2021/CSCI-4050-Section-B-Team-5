import { useState } from "react";
import Link from "next/link";
import PillButton from "./PillButton";
import InputField from "../components/InputField";
import EmailField from "./EmailField";
import { EditSvg } from "./Svg";

const AddAdminForm = () => {
  const [adminName, setAdminName] = useState(true);
  const [email, setEmail] = useState(true);


  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex justify-between space-x-3 items-end">
       {/* <input className="bg-transparent border-0 border-b border-on-primary placeholder-gray-500 text-base focus:ring-0 focus:border-0 focus:border-b-2 focus:border-on-primary" placeholder = "Admin Name" readOnly={adminName} />*/}
       <InputField label="Admin Name" readOnly={adminName} />
        <button onClick={() => setAdminName(false)}>
        <EditSvg />
        </button>
      </div>
      <div className="flex justify-between space-x-3 items-end">
        <EmailField label="Email" readOnly={email} />
        <button onClick={() => setEmail(false)}>
        <EditSvg />
        </button>
        </div>
      <div className="pt-5">
        <PillButton text="Save" />
      </div>
    </div>
  );
};

export default AddAdminForm;