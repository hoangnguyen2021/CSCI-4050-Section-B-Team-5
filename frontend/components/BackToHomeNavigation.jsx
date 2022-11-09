import Link from "next/link";

const BackToHomeNavigation = ({ text, href }) => {
  return (
    <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <Link href={href}>
        <div className="text-sm font-medium text-on-primary cursor-pointer hover:text-gray-100">
          {text}
        </div>
      </Link>
    </div>
  );
};

export default BackToHomeNavigation;
