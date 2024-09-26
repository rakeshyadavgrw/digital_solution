import { BsPeople } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md";
import { BiServer } from "react-icons/bi";
import { BiSolidServer } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { RiLoginCircleFill } from "react-icons/ri";
import { RiLoginCircleLine } from "react-icons/ri";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaAddressCard } from "react-icons/fa6";
import { FaRegAddressCard } from "react-icons/fa";
import { TbBrandDolbyDigital } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth"; 
import { useState } from "react";

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const [home, setHome]=useState(Boolean(localStorage.getItem("home")));
  const [about, setAbout]=useState(Boolean(localStorage.getItem("about")));
  const [contact, setContact]=useState(Boolean(localStorage.getItem("contact")));
  const [service, setService]=useState(Boolean(localStorage.getItem("service")));
  const [register, setRegister]=useState(Boolean(localStorage.getItem("register")));
  const [login, setLogin]=useState(Boolean(localStorage.getItem("login")));
  const [logout, setLogout]=useState(Boolean(localStorage.getItem("logout")));
  console.log("service",service)
  return (
    <>
      <header>
        <div className="header-container">
          <div className="logo-brand">
            <a href="/">
              <TbBrandDolbyDigital />
              Digital Solution
            </a>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  onClick={() => {
                    localStorage.setItem("home", true);
                    setHome(Boolean(localStorage.getItem("home")));
                    localStorage.removeItem("login");
                    setLogin(Boolean(localStorage.getItem("login")));
                    localStorage.removeItem("about");
                    setAbout(Boolean(localStorage.getItem("about")));
                    localStorage.removeItem("contact");
                    setContact(Boolean(localStorage.getItem("contact")));
                    localStorage.removeItem("Service");
                    setService(Boolean(localStorage.getItem("Service")));
                    localStorage.removeItem("register");
                    setRegister(Boolean(localStorage.getItem("register")));
                    localStorage.removeItem("logout");
                    setLogout(Boolean(localStorage.getItem("logout")));                
                  }}
                >
                  {home ? <AiFillHome /> : <AiOutlineHome />}Home
                </NavLink>
              </li>
              <li style={{ display: "flex" }}>
                <NavLink
                  to="/about"
                  onClick={() => {
                    localStorage.setItem("about", true);
                    setAbout(Boolean(localStorage.getItem("about")));
                    localStorage.removeItem("login");
                    setLogin(Boolean(localStorage.getItem("login")));
                    localStorage.removeItem("contact");
                    setContact(Boolean(localStorage.getItem("contact")));
                    localStorage.removeItem("Service");
                    setService(Boolean(localStorage.getItem("Service")));
                    localStorage.removeItem("register");
                    setRegister(Boolean(localStorage.getItem("register")));
                    localStorage.removeItem("logout");
                    setLogout(Boolean(localStorage.getItem("logout")));
                    localStorage.removeItem("home");
                    setHome(Boolean(localStorage.getItem("home")));
                  }}
                >
                  {about ? <BsPeopleFill /> : <BsPeople />}About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => {
                    localStorage.setItem("contact", true);
                    setContact(Boolean(localStorage.getItem("contact")));
                    localStorage.removeItem("login");
                    setLogin(Boolean(localStorage.getItem("login")));
                    localStorage.removeItem("about");
                    setAbout(Boolean(localStorage.getItem("about")));
                    localStorage.removeItem("Service");
                    setService(Boolean(localStorage.getItem("Service")));
                    localStorage.removeItem("register");
                    setRegister(Boolean(localStorage.getItem("register")));
                    localStorage.removeItem("logout");
                    setLogout(Boolean(localStorage.getItem("logout")));
                    localStorage.removeItem("home");
                    setHome(Boolean(localStorage.getItem("home")));
                  }}
                >
                  {contact ? 
                    <MdPermContactCalendar />
                   : 
                    <MdOutlinePermContactCalendar />
                  }
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  onClick={() => {
                    localStorage.setItem("Service", true);
                    setService(Boolean(localStorage.getItem("Service")));
                    localStorage.removeItem("login");
                    setLogin(Boolean(localStorage.getItem("login")));
                    localStorage.removeItem("about");
                    setAbout(Boolean(localStorage.getItem("about")));
                    localStorage.removeItem("contact");
                    setContact(Boolean(localStorage.getItem("contact")));
                    localStorage.removeItem("register");
                    setRegister(Boolean(localStorage.getItem("register")));
                    localStorage.removeItem("logout");
                    setLogout(Boolean(localStorage.getItem("logout")));
                    localStorage.removeItem("home");
                    setHome(Boolean(localStorage.getItem("home")));
                  }}
                >
                  {service ? <BiSolidServer /> : <BiServer />}Service
                </NavLink>
              </li>
              {isLoggedIn ? (
                <li>
                  <NavLink
                    to="/logout"
                    onClick={() => {
                      localStorage.setItem("logout", true);
                      setLogout(Boolean(localStorage.getItem("logout")));
                      localStorage.removeItem("login");
                      setLogin(Boolean(localStorage.getItem("login")));
                      localStorage.removeItem("about");
                      setAbout(Boolean(localStorage.getItem("about")));
                      localStorage.removeItem("contact");
                      setContact(Boolean(localStorage.getItem("contact")));
                      localStorage.removeItem("Service");
                      setService(Boolean(localStorage.getItem("Service")));
                      localStorage.removeItem("register");
                      setRegister(Boolean(localStorage.getItem("register")));
                      localStorage.removeItem("home");
                      setHome(Boolean(localStorage.getItem("home")));
                    }}
                  >
                    {logout ? <RiLogoutCircleRFill /> : < RiLogoutCircleRLine/>}
                    Logout
                  </NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink
                      to="/register"
                      onClick={() => {
                        localStorage.setItem("register", true);
                        setRegister(Boolean(localStorage.getItem("register")));
                        localStorage.removeItem("login");
                        setLogin(Boolean(localStorage.getItem("login")));
                        localStorage.removeItem("about");
                        setAbout(Boolean(localStorage.getItem("about")));
                        localStorage.removeItem("contact");
                        setContact(Boolean(localStorage.getItem("contact")));
                        localStorage.removeItem("Service");
                        setService(Boolean(localStorage.getItem("Service")));
                        localStorage.removeItem("logout");
                        setLogout(Boolean(localStorage.getItem("logout")));
                        localStorage.removeItem("home");
                        setHome(Boolean(localStorage.getItem("home")));
                      }}
                    >
                      {register ? <FaAddressCard /> : <FaRegAddressCard />}
                      Register
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/login"
                      onClick={() => {
                        localStorage.setItem("login", true);
                        setLogin(Boolean(localStorage.getItem("login")));
                        localStorage.removeItem("about");
                        setAbout(Boolean(localStorage.getItem("about")));
                        localStorage.removeItem("contact");
                        setContact(Boolean(localStorage.getItem("contact")));
                        localStorage.removeItem("Service");
                        setService(Boolean(localStorage.getItem("Service")));
                        localStorage.removeItem("register");
                        setRegister(Boolean(localStorage.getItem("register")));
                        localStorage.removeItem("logout");
                        setLogout(Boolean(localStorage.getItem("logout")));
                        localStorage.removeItem("home");
                        setHome(Boolean(localStorage.getItem("home")));
                      }}
                    >
                      {login ? <RiLoginCircleFill /> : <RiLoginCircleLine />}
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
