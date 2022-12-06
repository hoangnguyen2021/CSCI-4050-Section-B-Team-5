import { useEffect, useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import InputField from "../components/InputField";
import PhoneNumberField from "./PhoneNumberField";
import EmailField from "./EmailField";
import SubmitButton from "./SubmitButton";
import { EditSvg } from "./Svg";
import PaymentForm from "./PaymentForm";
import { useFetch } from "../hooks/useFetch";

const EditProfileForm = ({ setOpen }) => {
  const { get, patch } = useFetch();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [nameRO, setNameRO] = useState(true);
  const [phoneNumberRO, setPhoneNumberRO] = useState(true);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const response = await get("auth/users/me/", {
        headers: { Authorization: "JWT " + localStorage.getItem("access") },
      });
      const responseData = response.data;
      if (responseData) {
        setName(responseData.name);
        setPhoneNumber(formatPhoneNumber(responseData.phonenumber));
        setEmail(responseData.email);
      }
    } catch (e) {
      toast.error("Failed to get profile!");
    }
  };

  const updateProfile = async (e) => {
    e.preventDefault();

    try {
      const response = await patch(
        "auth/users/me/",
        {
          name: name,
          phonenumber: phoneNumber.match(/\d/g).join(""),
          cardnum: "",
          cvv: "",
          expiration_year: "",
          zip_code: "",
        },
        {
          headers: { Authorization: "JWT " + localStorage.getItem("access") },
        }
      );
      const responseData = response.data;
      if (responseData) {
        toast.success("Update profile successfully!");
        setOpen(false);
      }
    } catch (e) {
      toast.error("Failed to update profile!");
    }
  };

  const formatPhoneNumber = (str) => {
    let cleaned = ("" + str).replace(/\D/g, "");

    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (match) {
      return "(" + match[1] + ") " + match[2] + " - " + match[3];
    }

    return null;
  };

  return (
    <form className="flex flex-col gap-y-5" onSubmit={updateProfile}>
      <div className="flex justify-between space-x-3 items-end">
        <InputField
          label="Name"
          input={name}
          setInput={setName}
          readOnly={nameRO}
        />
        <button type="button" onClick={() => setNameRO(false)}>
          <EditSvg />
        </button>
      </div>
      <div className="flex justify-between space-x-3 items-end">
        <PhoneNumberField
          label="Phone Number"
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          readOnly={phoneNumberRO}
        />
        <button type="button" onClick={() => setPhoneNumberRO(false)}>
          <EditSvg />
        </button>
      </div>
      <div className="flex justify-between space-x-3 items-end">
        <EmailField
          label="Email"
          email={email}
          setEmail={setEmail}
          readOnly={true}
        />
      </div>
      <PaymentForm />
      <Link href="/change-password">
        <div className="text-base font-medium text-primary cursor-pointer hover:text-primary-variant hover:underline">
          Change password
        </div>
      </Link>
      <div className="pt-5 mx-auto">
        <SubmitButton text="Save" />
      </div>
    </form>
  );
};

export default EditProfileForm;
