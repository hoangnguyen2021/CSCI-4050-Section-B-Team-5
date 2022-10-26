import Link from "next/link";
import React, { useState } from "react";
import BackgroundOverlay from "../../components/BackgroundOverlay";
import EmailField from "../../components/EmailField";
import PasswordField from "../../components/PasswordField";
import Button from "../../components/Button";

const ChangePasswordPage = () => {
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
            <h3 className="text-xl font-semibold text-center">
              Change Password
            </h3>
            <EmailField placeholder="Email" />
            <PasswordField placeholder="New Password" />
            <PasswordField placeholder="Confirm Password" />
            <div className="pt-10 flex justify-center">
              <Button text="Change password" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
