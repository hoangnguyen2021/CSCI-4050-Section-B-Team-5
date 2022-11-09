import React, { useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useFetch } from "../../hooks/useFetch";
import BackToHomeNavigation from "../../components/BackToHomeNavigation";
import BackgroundOverlay from "../../components/BackgroundOverlay";
import EmailField from "../../components/EmailField";
import SubmitButton from "../../components/SubmitButton";

const ResetPasswordPage = () => {
  const { post } = useFetch();
  const [email, setEmail] = useState("");
  const router = useRouter();

  const sendVerificationEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await post("auth/users/reset_password/", {
        email: email
      });
      toast.success("Verification email sent!");
      router.push('/login');
      console.log(response.data);
    } catch (error) {
      const responseData = error.response?.data;
      if (responseData) {
        if (responseData.email) {
          responseData.email.forEach(item => toast.error(item));
        }
      } else {
        toast.error("Cannot send verification email!");
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
        <div className="relative flex justify-center items-center pt-20">
          <div className="basis-1/4 flex flex-col gap-y-3 bg-background-variant rounded-lg shadow-md px-8 py-10">
            <h2 className="text-3xl font-semibold text-center pb-5">
              <span className="text-primary">Bulldog</span>
              <span> </span>
              <span className="text-on-primary">Cinema</span>
            </h2>
            <form className="w-full flex flex-col items-center gap-y-3" onSubmit={sendVerificationEmail}>
              <h3 className="text-xl font-semibold text-center">
                Reset Password
              </h3>
              <EmailField placeholder="Email" email={email} setEmail={setEmail} />
              <div className="pt-10 flex justify-center">
                <SubmitButton text="Send verification email" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
