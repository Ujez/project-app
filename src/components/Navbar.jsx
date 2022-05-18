import React, { useState } from "react";
import { Link } from "react-scroll";

const Nav = () => {
  let Links = [
    { name: "HOME", link: "home" },
    { name: "ABOUT", link: "about" },
    { name: "SUPPORT", link: "support" },
    { name: "PLATFORMS", link: "platforms" },
    { name: "PRICING", link: "pricing" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-between bg-white py-2 md:px-7 px-3">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center
      text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          <Link className="pt-2" to="home" smooth={true} duration={500}>
            ISAAC.
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-2xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-5 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-4 transition-all duration-500 ease-in ${
            open ? "top-10 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-base md:my-0 my-5">
              {/* <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a> */}
              <Link
                to={link.link}
                smooth={true}
                className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <div className="md:flex pr-4 md:ml-8 ml-4">
            <button className="border-none bg-transparent text-black mr-4">
              Sign In
            </button>
            <button className="px-8 py-3">Sign Up</button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
