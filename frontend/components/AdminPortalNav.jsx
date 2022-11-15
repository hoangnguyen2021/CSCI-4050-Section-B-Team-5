import React from "react";
import Link from "next/link";

const AdminPortalNav = ({ navs }) => {
  return (
    <div className="mx-auto flex h-10 max-w-7xl items-center gap-x-10 px-4 sm:px-6 lg:px-8">
      {navs.map((item) => {
        return (
          <span key={item.id}>
            <Link href={item.href}>
              <div className="text-sm font-medium text-on-primary cursor-pointer hover:text-gray-100">
                {item.text}
              </div>
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export default AdminPortalNav;
