import Link from "next/link";

const TopNavigation = () => {
  return (
    <div className="bg-background">
      <div className="mx-auto flex flex-row-reverse h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-6">
          <Link href="/login">
            <div className="text-sm font-medium text-on-primary cursor-pointer hover:text-gray-100">
              Sign in/Join
            </div>
          </Link>
          <Link href="/editProfile">
            <div className="text-sm font-medium text-on-primary cursor-pointer hover:text-gray-100">
              Account
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
