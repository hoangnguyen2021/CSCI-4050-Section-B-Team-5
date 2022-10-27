import Link from "next/link";
import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import BackgroundOverlay from "../../components/BackgroundOverlay";
import EmailField from "../../components/EmailField";
import InputField from "../../components/InputField";
import PhoneNumberField from "../../components/PhoneNumberField";
import PasswordField from "../../components/PasswordField";
import SubmitButton from "../../components/SubmitButton";

const RegisterPage = () => {
  const { post } = useFetch();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    const response = await post("auth/users/", {
      name: name,
      phonenumber: phoneNumber,
      email: email,
      password: password,
      re_password: rePassword,
    });
    console.log(response.data);
  };

  return (
    <div className="bg-background">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <div className="text-sm font-medium text-on-primary cursor-pointer hover:text-gray-100">
            Back to Home
          </div>
        </Link>
      </div>
      <div className="relative min-h-screen">
        <BackgroundOverlay
          src="https://wallpapercave.com/wp/wp6608538.jpg"
          opacity={70}
        />
        <div className="relative flex justify-center items-center pt-20">
          <div className="basis-1/4 flex flex-col items-center space-y-3 bg-background-variant rounded-lg shadow-md px-8 py-10">
            <h2 className="text-3xl font-semibold text-center pb-5">
              <span className="text-primary">Bulldog</span>
              <span> </span>
              <span className="text-on-primary">Cinema</span>
            </h2>

            <form className="w-full flex flex-col items-center space-y-3" onSubmit={registerUser}>
              <h3 className="text-xl font-semibold text-center">Sign Up</h3>
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
