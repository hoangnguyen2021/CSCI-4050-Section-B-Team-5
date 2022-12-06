import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useFetch } from "../../hooks/useFetch";
import BackToHomeNavigation from "../../components/BackToHomeNavigation";
import BackgroundOverlay from "../../components/BackgroundOverlay";
import EmailField from "../../components/EmailField";
import InputField from "../../components/InputField";
import PhoneNumberField from "../../components/PhoneNumberField";
import PasswordField from "../../components/PasswordField";
import Checkbox from "../../components/Checkbox";
import SubmitButton from "../../components/SubmitButton";
import PaymentForm from "../../components/PaymentForm";

const RegisterPage = () => {
  const { post } = useFetch();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [cvv, setCvv] = useState("");
  const [zip, setZip] = useState("");
  const [expire, setExpire] = useState("");
  const [promotion, setPromotion] = useState(false);
  const router = useRouter();

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const response = await post("auth/users/", {
        name: name,
        phonenumber: phoneNumber.match(/\d/g).join(""),
        email: email,
        password: password,
        re_password: rePassword,
        cardnum: cardNum,
        cvv: cvv,
        expiration_year: expire,
        zip_code: zip,
        promotion_subscription: promotion
      });
      toast.success("You are registered!");
      router.push('/login');
      console.log(response.data);
    } catch (error) {
      const responseData = error.response?.data;
      if (responseData) {
        if (responseData.email) {
          responseData.email.forEach(item => toast.error(item));
        }
        if (responseData.password) {
          responseData.password.forEach(item => toast.error(item));
        }
      } else {
        toast.error("Registration error!");
      }
      console.error(error);
    }
  };

  return (
    <div className="bg-background">
      <BackToHomeNavigation text="Back to Home" href="/" />
      <div className="relative min-h-screen">
        <BackgroundOverlay
          src="https://wallpapercave.com/wp/wp6608538.jpg"
          opacity={70}
        />
        <div className="relative flex justify-center pt-20">
          <div className="basis-1/4 flex flex-col items-center gap-y-3 bg-background-variant rounded-lg shadow-md px-8 py-10">
            <h2 className="text-3xl font-semibold text-center pb-5">
              <span className="text-primary">Bulldog</span>
              <span> </span>
              <span className="text-on-primary">Cinema</span>
            </h2>

            <form className="w-full flex flex-col items-center gap-y-3" onSubmit={registerUser}>
              <h3 className="text-xl text-on-primary font-semibold text-center">Sign Up</h3>
              <InputField placeholder="Name" input={name} setInput={setName} />
              <PhoneNumberField
                placeholder="Phone Number"
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
              />
              <EmailField placeholder="Email" email={email} setEmail={setEmail} />
              <PasswordField
                placeholder="Password"
                password={password}
                setPassword={setPassword}
              />
              <PasswordField
                placeholder="Confirm Password"
                password={rePassword}
                setPassword={setRePassword}
              />
              <PaymentForm />
              <div className="self-start">
                <Checkbox label="Subscribe to Promotions" value={promotion} setValue={setPromotion} />
              </div>
              <div className="pt-10">
                <SubmitButton text="Submit" />
              </div>
            </form>
            <div className="text-base font-medium text-center">
              <span className="text-on-primary">Already have an account? </span>
              <Link href="/login">
                <span className="text-primary cursor-pointer">Sign In</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
