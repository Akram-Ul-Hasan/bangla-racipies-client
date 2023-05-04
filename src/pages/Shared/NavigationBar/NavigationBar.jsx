import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

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
      <div className="navbar bg-primary-focus">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-2xl">Bangla Recipes</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
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
                  <Link to="/login/login">Login</Link>
                </li>
                <li>
                  <Link to="/login/register">Register</Link>
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
