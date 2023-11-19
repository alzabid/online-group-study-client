import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { BiSun } from "react-icons/bi";
import { HiMoon } from "react-icons/hi";
import Container from "./Container";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => console.log("User logged out successfully"))
      .catch((error) => console.error(error));
  };

  const navLinks = (
    <>
      <li className="">
        <NavLink to="/"> Home </NavLink>
        {/* <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "btn btn-accent btn-sm" : "btn btn-ghost btn-sm"
          }
        >
          Home
        </NavLink> */}
      </li>
      <li className="">
        <NavLink to="/assignments"> All Assignment </NavLink>
      </li>

      {user && (
        <>
          <li className="">
            <NavLink to="/create"> Create Assignment </NavLink>
          </li>
          <li className="">
            <NavLink to="/submits"> Submitted Assignment </NavLink>
          </li>
          <li className="">
            <NavLink to="/mysubmits"> My Assignment </NavLink>
          </li>
        </>
      )}

      <li className="">
        <NavLink to="/register"> Register </NavLink>
      </li>
    </>
  );
  return (
    <Container>
      <div className="sticky inset-0 z-20 ">
        <div className="navbar">
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
            <NavLink to="/">
              <img className=" w-28 md:w-40" src="/img/logo.png" alt="" />
            </NavLink>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end">
            {/* theme toggle button */}
            <button className="btn btn-circle btn-ghost">
              <label className="swap swap-rotate w-12 h-12">
                <input
                  type="checkbox"
                  onChange={handleToggle}
                  // show toggle image based on localstorage theme
                  checked={theme === "light" ? false : true}
                />
                {/* light theme sun image */}
                <BiSun className="w-8 h-8 swap-on" />
                {/* dark theme moon image */}
                <HiMoon className="w-8 h-8 swap-off" />
              </label>
            </button>

            {user ? (
              <>
                {/* user Avatar */}
                <div className="dropdown dropdown-hover dropdown-end">
                  <label
                    tabIndex={0}
                    className={`avatar btn btn-ghost btn-circle 
              ${user ? "online" : "offline"} md:mx-3`}
                  >
                    <div className=" w-10 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <p>{user.displayName}</p>
                    </li>
                    <li>
                      <p>{user.email}</p>
                    </li>
                    <li>
                      <a onClick={handleLogOut}>Logout</a>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <Link to="/login">
                <button className="btn btn-sm md:btn-sm btn-outline">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
