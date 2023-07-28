import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  const options = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
    // {
    //   icon: "desktop",
    //   text: "system",
    // },
  ];

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);

    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        break;
    }
  }, [theme]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-white dark:bg-primary dark:border-none border-b-2 duration-100`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="logo w-10 h-10 object-contain" />
          <p className="name text-primary dark:text-white md:text-[16px] text-[18px] mr-4 font-bold cursor-pointer flex">
            Pranay Sanjule &nbsp;
          </p>
        </Link>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <div className="flex justify-end xs:ml-8 duration-100 dark:bg-slate-700 bg-slate-600 rounded-full mx-auto">
          {options?.map((opt) => (
            <button
              key={opt.text}
              onClick={() => setTheme(opt.text)}
              className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${
                theme === opt.text && " text-[yellow] dark:text-[cyan]"
              }`}
            >
              <ion-icon name={opt.icon}></ion-icon>
            </button>
          ))}
        </div>

        <ul className="sm:gap-3 list-none hidden sm:flex flex-row">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-black dark:text-white"
                  : "text-primary dark:text-secondary"
              } hover:text-[#f12711] dark:hover:text-white text-[18px] mx-2 font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Bar */}
        <div className="sm:hidden flex flex-1 justify-end items-center rounded-full">
          <img
            src={toggle ? close : menu}
            className="w-[30px] h-[35px] object-contain p-1 cursor-pointer bg-black rounded-full"
            onClick={() => setToggle(!toggle)}
          />{" "}
          {/* actual menu */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 special-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:text-red font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
