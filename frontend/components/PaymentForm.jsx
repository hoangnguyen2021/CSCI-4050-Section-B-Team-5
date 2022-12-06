import { useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useFetch } from "../hooks/useFetch";
import AddButton from "./AddButton";
import CardNumberField from "./CardNumberField";
import Modal from "./Modal";
import InputField from "./InputField";
import { CVVSvg, ZipCodeSvg } from "./Svg";
import DateField from "./DateField";
import SubmitButton from "./SubmitButton";

const PaymentForm = () => {
  const { post } = useFetch();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [month, setMonth] = useState({ id: 1, name: "Jan" });
  const [year, setYear] = useState({ id: 22, name: 2023 });
  const [cardNum, setCardNum] = useState("");
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

  const addCard = async (e) => {
    e.preventDefault();

    try {
      const response = await post(
        "api/cards/save-card",
        {
          cardnum: cardNum.replaceAll(" ", ""),
          cvv: CVV,
          expiration_year: year.name,
          zip_code: zipCode,
        },
        {
          headers: {
            Authorization: "JWT " + localStorage.getItem("access"),
          },
        }
      );
      router.reload();
      console.log(response.data);
      toast.success("Add card successfully!");
    } catch (error) {
      toast.error("Cannot add card!");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-y-5">
      <Modal open={open} setOpen={setOpen} title="Add Card">
        <form className="flex flex-col gap-y-5" onSubmit={addCard}>
          <div className="flex">
            <img
              className="h-6"
              src="https://amc-theatres-res.cloudinary.com/image/upload/v1556564205/amc-cdn/static/images/forms/accepted_cards.png"
            />
          </div>
          <CardNumberField cardNum={cardNum} setCardNum={setCardNum} />
          <DateField
            prefix="Exp."
            month={month}
            year={year}
            setMonth={setMonth}
            setYear={setYear}
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
          <div className="flex justify-center">
            <SubmitButton text="Add Card" />
          </div>
        </form>
      </Modal>
      <AddButton text="Add Card" open={open} setOpen={setOpen} />
    </div>
  );
};

export default PaymentForm;
