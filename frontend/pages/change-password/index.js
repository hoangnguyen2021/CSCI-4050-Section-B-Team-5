import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useFetch } from "../../hooks/useFetch";
import BackgroundOverlay from "../../components/BackgroundOverlay";
import PasswordField from "../../components/PasswordField";
import SubmitButton from "../../components/SubmitButton";

const ChangePasswordPage = () => {
  const { post } = useFetch();
  const [newPassword, setNewPassword] = useState("");
  const [reNewPassword, setReNewPassword] = useState("");
  const router = useRouter();
  const { uid, token } = router.query;

  const changePassword = async (e) => {
    e.preventDefault();
    if (uid && token) {
      try {
        const response = await post("auth/users/reset_password_confirm/", {
          uid: uid,
          token: token,
          new_password: newPassword,
          re_new_password: reNewPassword
        });
        toast.success("Your password is reset succesfully!");
        router.push('/login');
        const responseData = response.data;
        console.log(responseData);
      } catch (error) {
        const responseData = error.response?.data;
        if (responseData) {
          if (responseData.new_password) {
            responseData.new_password.forEach(item => toast.error(item));
          }
          if (responseData.token) {
            toast.error(responseData.token);
          }
        } else {
          toast.error("Cannot reset your password!");
        }
        console.error(error);
      }
    }
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
          <div className="basis-1/4 flex flex-col space-y-3 bg-background-variant rounded-lg shadow-md px-8 py-10">
            <h2 className="text-3xl font-semibold text-center pb-5">
              <span className="text-primary">Bulldog</span>
              <span> </span>
              <span className="text-on-primary">Cinema</span>
            </h2>

            <form className="w-full flex flex-col items-center space-y-3" onSubmit={changePassword}>
              <h3 className="text-xl font-semibold text-center">
                Reset Password
              </h3>
              <PasswordField placeholder="New Password" password={newPassword}
                setPassword={setNewPassword} />
              <PasswordField placeholder="Confirm Password" password={reNewPassword}
                setPassword={setReNewPassword} />
              <div className="pt-10 flex justify-center">
                <SubmitButton text="Reset password" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
