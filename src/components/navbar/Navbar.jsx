import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/header-logo.svg";
import "./Navbar.css";
const NavBar = () => {
  const [nav, setNav] = useState("#navbar");
  const [icon, setIcon] = useState("fas fa-bars");
  const navToggle = () => {
    if (nav === "#navbar") {
      setNav("#navbar active");
    } else setNav("#navbar");

    // Icon Toggler
    if (icon === "fas fa-bars") {
      setIcon("fas fa-times");
    } else setIcon("fas fa-bars");
  };
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  let pathname = window.location.pathname;
  useEffect(() => {
    pathname = window.location.pathname;
  }, [window.location.pathname]);
  return (
    <>
      <nav className={colorChange ? "navChange" : "nav"}>
        <Link to="/">
          <img id="logo-image" src={logo} alt="logoimage" />
        </Link>
        <div>
          <ul id="navbar" className={nav}>
            <li>
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/#"
                className={`${pathname.match("/about") ? "active" : ""}`}
              >
                About
              </Link>
            </li>

            {/* <li>
              <Link
                to="/#"
                className={`${
                  pathname.match("/plan-your-stay") ? "active" : ""
                }`}
              >
                Plan Your Stay
              </Link>
            </li> */}
            <li>
              <Link
                to="/#"
                className={`${pathname.match("/download") ? "active" : ""}`}
              >
                Download
              </Link>
            </li>

            <li>
              <Link
                to="/application"
                className={`${pathname.match("/application") ? "active" : ""}`}
              >
                My Applications
              </Link>
            </li>

            <li>
              <Link
                to="/#"
                className={`${pathname.match("/support") ? "active" : ""}`}
              >
                Support
              </Link>
            </li>
            <li>
              <Link to="/sign-in" id="sign-btn">
                Sign
              </Link>
            </li>
            <li>
              <Link to="/sign-up" id="sign-btn2">
                Create Account
              </Link>
            </li>
          </ul>
        </div>
        <div id="mobile">
          <i id="bar" onClick={navToggle} className={icon}></i>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
