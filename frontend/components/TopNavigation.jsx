import { useEffect, useState } from "react";
import Link from "next/link";
import Modal from "../components/Modal";
import EditProfileForm from "./EditProfileForm";
import toast from "react-hot-toast";

const TopNavigation = () => {
  const [open, setOpen] = useState(false);
  const [accessToken, setAccessToken] = useState();

  useEffect(() => {
    setAccessToken(localStorage.getItem("access"));
  }, []);

  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setAccessToken(null);
    toast.success("You are logged out!");
  };

  return (
    <div className="bg-background">
      <div className="mx-auto flex flex-row-reverse h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-6">
          {!accessToken && (
            <Link href="/login">
              <div className="text-sm font-medium text-on-primary cursor-pointer hover:text-gray-100">
                Sign in/Join
              </div>
            </Link>
          )}
          {accessToken && (
            <Link href="/">
              <div
                className="text-sm font-medium text-on-primary cursor-pointer hover:text-gray-100"
                onClick={logout}
              >
                Sign out
              </div>
            </Link>
          )}
          <div
            onClick={() => setOpen(true)}
            className="text-sm font-medium text-on-primary cursor-pointer hover:text-gray-100"
          >
            Profile
          </div>
          <Modal open={open} setOpen={setOpen} title="Edit Profile">
            <EditProfileForm setOpen={setOpen} />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
