import React from "react";
export const Navbar = () => {
  return (
    <div className="navigation-tabs">
      <li>
      <h1><a href="/manageUsers">Users/Admins</a></h1>
      </li>
      <li>
        <h1><a href="/manageMovies">Manage Movies</a></h1>
      </li>
      <li>
      <h1><a href="/promotions">Promotions</a></h1>
      </li>
      <li>
      <h1><a href="/">Home</a></h1>
      </li>
    </div>
  );
};
