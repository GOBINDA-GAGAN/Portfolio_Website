import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import logo from "/logo5.png";

const Navbar = () => {
  const NavBarData = [
    {
      name: "About",
      link: "/about", // Absolute path
    },
    {
      name: "Skills",
      link: "/skills", // Absolute path
    },
    {
      name: "Project",
      link: "/projects", // Absolute path
    },

    {
      name: "Contact",
      link: "/contact", // Absolute path
    },
  ];

  const [theme, setTheme] = useState(false);

  return (
    <nav className="font-custom bg-[#000000] px-10 py-5 ">
      <div className="md:w-8/12  mx-auto text-white flex justify-between items-center">
        <ul className="md:flex items-center px-3 py-2 gap-7 border-[#06B6D4] border bg-[#27272A] rounded-2xl  ">
          <div className="flex gap-2 items-center">
            <img src={logo} className="h-8 w-8 rounded-full object-cover object-top" />
            <span className="font-semibold">Alok</span>
          </div>

          {NavBarData.map((value, index) => {
            return (
              <li key={index} className="hidden md:visible">
                <Link to={value.link} className="font-medium">
                  <span>{value.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center px-4 py-3 gap-7 bg-[#27272A] rounded-xl text-xl border-[#06B6D4] border">
          <span>{theme ? <CiDark /> : <CiLight />}</span>
          <span>
            <FaGithub />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
