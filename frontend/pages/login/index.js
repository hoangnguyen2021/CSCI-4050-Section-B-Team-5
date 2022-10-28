import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useFetch } from "../../hooks/useFetch";
import BackgroundOverlay from "../../components/BackgroundOverlay";
import EmailField from "../../components/EmailField";
import PasswordField from "../../components/PasswordField";
import SubmitButton from "../../components/SubmitButton";

const LoginPage = () => {
  const { post } = useFetch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        if (responseData.detail) {
          toast.error(responseData.detail);
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
  // Remember Me
    let handleCheckbox = async (e) => {
      if (rememberMe == 0) {
        setRememberMe(1);
      } else {
        setRememberMe(0);
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
          <div className="basis-1/4 flex flex-col items-center bg-background-variant rounded-lg shadow-md px-8 py-10">
            <h2 className="text-3xl font-semibold text-center pb-5">
              <span className="text-primary">Bulldog</span>
              <span> </span>
              <span className="text-on-primary">Cinema</span>
            </h2>
            <form className="w-full flex flex-col items-center space-y-3" onSubmit={loginUser}>
              <h3 className="text-xl font-semibold text-center">Sign In</h3>
              <EmailField placeholder="Email" email={email} setEmail={setEmail} />
              <PasswordField placeholder="Password" password={password}
                setPassword={setPassword} />
              <Link href="/admin-login">
                <div className="self-start text-base font-medium text-primary cursor-pointer hover:text-primary-variant">
                  Admin Portal
                </div>
              </Link>

              <div className="pt-10 pb-5 flex justify-center">
                <SubmitButton text="Sign in" />
              </div>
            </form>

            <div className="pt-10 flex justify-center">
              <Button text="Sign in" />
            </div>
              <div className="text-center">
              <span>Remember Me</span>
              <input type="checkbox" onChange={handleCheckbox}/>
              </div>
            <div className="text-base font-medium text-center">
              <span className="text-on-primary">Don't have an account? </span>
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
