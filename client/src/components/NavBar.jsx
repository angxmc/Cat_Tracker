import React from "react";
import { Link } from "react-router-dom";
import * as usersService from "../utilities/users-service";

export default function NavBar({user, setUser}) {
   const handleLogout = () => {
     usersService.logOut();
     setUser(null);
   };
  return (
    <nav>
      <h1>Welcome, {user.name}</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/cats">Cats</Link>
        <Link to="/cats/shop">Shop</Link>
      </div>
      <div className="logOut-btn">
        <Link to="" onClick={handleLogout}>
          Log Out
        </Link>
      </div>
    </nav>
  );
}
