import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import ActiveLink from "./ActiveLink";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="navbar bg-primary">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <ActiveLink to="/">Home</ActiveLink>
              </li>
              <li>
                <ActiveLink to="/blog">Blog</ActiveLink>
              </li>
              <li></li>
              {user && (
                <li>
                  <Link to="">{user?.displayName}</Link>
                </li>
              )}
              {user ? (
                <li>
                  <p onClick={handleLogOut}>Logout</p>
                </li>
              ) : (
                <>
                  <li>
                    <ActiveLink to="/login/login">Login</ActiveLink>
                  </li>
                  <li>
                    <ActiveLink to="/login/register">Register</ActiveLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-3xl">Bangla Recipes</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/blog">Blog</ActiveLink>
            </li>
            <li></li>
            {user && (
              <li>
                <Link to="">{user?.displayName}</Link>
              </li>
            )}
            {user ? (
              <li>
                <p onClick={handleLogOut}>Logout</p>
              </li>
            ) : (
              <>
                <li>
                  <ActiveLink to="/login/login">Login</ActiveLink>
                </li>
                <li>
                  <ActiveLink to="/login/register">Register</ActiveLink>
                </li>
              </>
            )}
          </ul>
        </div>
        
      </div>
      
    </div>
  );
};

export default NavigationBar;
