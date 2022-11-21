import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useFetch } from "../../hooks/useFetch";
import BackToHomeNavigation from "../../components/BackToHomeNavigation";
import BackgroundOverlay from "../../components/BackgroundOverlay";
import EmailField from "../../components/EmailField";
import PasswordField from "../../components/PasswordField";
import Checkbox from "../../components/Checkbox";
import SubmitButton from "../../components/SubmitButton";

const LoginPage = () => {
  const { post } = useFetch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(0);
  const router = useRouter();
  const { uid, token } = router.query;

  useEffect(() => {
    if (uid && token) {
      activateUser();
    }
  }, [uid, token]);

  const activateUser = async () => {
    try {
      const response = await post("auth/users/activation/", {
        uid: uid,
        token: token,
      });
      toast.success("Your account is activated!");
      const responseData = response.data;
      console.log(responseData);
    } catch (error) {
      const responseData = error.response?.data;
      if (responseData) {
        if (responseData.token) {
          toast.error(responseData.token);
        }
      } else {
        toast.error("Cannot activate your account!");
      }
      console.error(error);
    }
  };

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await post("auth/jwt/create/", {
        email: email,
        password: password,
      });
      toast.success("You are logged in!");
      router.push('/');
      const responseData = response.data;
      if (responseData) {
        localStorage.setItem("refresh", responseData.refresh);
        localStorage.setItem("access", responseData.access);
      }
      console.log(responseData);
    } catch (error) {
      const responseData = error.response?.data;
      if (responseData) {
        if (responseData.detail) {
          toast.error(responseData.detail);
        }
      } else {
        toast.error("Login error!");
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
          <div className="basis-1/4 flex flex-col items-center bg-background-variant rounded-lg shadow-md px-8 py-10">
            <h2 className="text-3xl font-semibold text-center pb-5">
              <span className="text-primary">Bulldog</span>
              <span> </span>
              <span className="text-on-primary">Cinema</span>
            </h2>
            <form className="w-full flex flex-col items-center gap-y-3" onSubmit={loginUser}>
              <h3 className="text-xl text-on-primary font-semibold text-center">Sign In</h3>
              <EmailField placeholder="Email" email={email} setEmail={setEmail} />
              <PasswordField placeholder="Password" password={password}
                setPassword={setPassword} />
              <Link href="/admin-login">
                <div className="self-start text-base font-medium text-primary cursor-pointer hover:text-primary-variant">
                  Admin Portal
                </div>
              </Link>
              <div className="self-start">
                <Checkbox label="Remember me" value={rememberMe} setValue={setRememberMe} />
              </div>
              <div className="pt-10 pb-5 flex justify-center">
                <SubmitButton text="Sign in" />
              </div>
            </form>
            <div className="text-base font-medium text-center">
              <span className="text-on-primary">Don&apos;t have an account? </span>
              <Link href="/register">
                <span className="text-primary cursor-pointer">Join</span>
              </Link>
            </div>

            <div className="text-base font-medium text-center">
              <span className="text-on-primary">Forgot Password? </span>
              <Link href="/reset-password">
                <span className="text-primary cursor-pointer">Reset</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
