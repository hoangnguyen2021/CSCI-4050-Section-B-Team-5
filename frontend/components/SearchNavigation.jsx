import Link from "next/link";

const SearchNavigation = () => {
  return (
    <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <Link href="/">
        <div className="text-sm font-medium text-on-primary cursor-pointer hover:text-gray-100">
          Back to Home
        </div>
      </Link>
      <Link href="/search">
        <div className="text-sm font-medium text-on-primary cursor-pointer hover:text-gray-100">
          Search By Title
        </div>
      </Link>
      <Link href="/search-by-category">
        <div className="text-sm font-medium text-on-primary cursor-pointer hover:text-gray-100">
          Search By Category
        </div>
      </Link>
    </div>
  );
};

export default SearchNavigation;