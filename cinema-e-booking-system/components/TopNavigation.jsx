const TopNavigation = () => {
  return (
    <div className="bg-background">
      <div className="mx-auto flex flex-row-reverse h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-6">
          <a
            href="/login"
            className="text-sm font-medium text-on-primary hover:text-gray-100"
          >
            Sign in/Join
          </a>
          <a
            href="/editProfile"
            className="text-sm font-medium text-on-primary hover:text-gray-100"
          >
            Account
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
